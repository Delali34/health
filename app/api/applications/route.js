import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import sendApplicationConfirmationEmail from "@/lib/email";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper function to handle file upload to Cloudinary
// In your app/api/applications/route.js, update the uploadToCloudinary function
async function uploadToCloudinary(file) {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Clean the filename
    const originalName = file.name;
    const baseName = originalName.replace(/\.[^/.]+$/, "");
    const safeBaseName = baseName
      .replace(/[()[\]{}'"\/\\,;:#<>]/g, "")
      .replace(/\s+/g, "-");

    const uniqueId = Date.now();
    const safePublicId = `cv-uploads/${uniqueId}-${safeBaseName}`;

    // Upload to Cloudinary with proper delivery type and access mode
    const dataURI = `data:${file.type};base64,${buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "",
      resource_type: "auto",
      public_id: safePublicId,
      use_filename: false,
      access_mode: "public", // Ensure public access to the file
      type: "upload", // Regular upload type for public access
    });

    return {
      fileName: originalName,
      filePath: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error(`File upload failed: ${error.message}`);
  }
}
export async function POST(req) {
  try {
    // Get form data
    const formData = await req.formData();

    // Handle CV file upload
    const cvFile = formData.get("cvFile");
    let cvData = null;

    if (cvFile) {
      // Validate file size (3MB)
      const fileSize = cvFile.size;
      const maxSize = 3 * 1024 * 1024; // 3MB in bytes

      if (fileSize > maxSize) {
        return NextResponse.json(
          { error: "File size must be less than 3MB" },
          { status: 400 }
        );
      }

      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(cvFile.type)) {
        return NextResponse.json(
          { error: "Only PDF and Word documents are allowed" },
          { status: 400 }
        );
      }

      try {
        // Upload to Cloudinary instead of saving locally
        cvData = await uploadToCloudinary(cvFile);
      } catch (uploadError) {
        return NextResponse.json(
          { error: uploadError.message },
          { status: 500 }
        );
      }
    }

    // Parse the JSON data
    const data = JSON.parse(formData.get("data"));

    // Rest of your existing application processing code...
    const educationHistory = Array.isArray(data.educationHistory)
      ? data.educationHistory.map((edu) => ({
          level: edu.level,
          program: edu.program,
          yearCompleted: edu.yearCompleted,
          institution: edu.institution,
        }))
      : [];

    const workHistory = Array.isArray(data.workHistory)
      ? data.workHistory.map((work) => ({
          position: work.position,
          yearStarted: work.yearStarted,
          yearEnded: work.yearEnded,
          achievements: work.achievements,
        }))
      : [];

    const volunteerHistory = Array.isArray(data.volunteerHistory)
      ? data.volunteerHistory.map((volunteer) => ({
          position: volunteer.position,
          yearStarted: volunteer.yearStarted,
          yearEnded: volunteer.yearEnded,
          achievement: volunteer.achievement,
        }))
      : [];

    const competencies =
      typeof data.competencies === "object" ? data.competencies : {};

    // Create application with included jobPosting relation and CV data
    const application = await prisma.jobApplication.create({
      data: {
        jobPostingId: data.jobPostingId,
        firstName: data.firstName,
        middleName: data.middleName || null,
        surname: data.surname,
        region: data.region,
        district: data.district,
        email: data.email,
        telephone: data.telephone,
        educationHistory: educationHistory,
        workHistory: workHistory,
        volunteerHistory: volunteerHistory,
        competencies: competencies,
        status: "pending",
        cvFile: cvData?.filePath || null, // This now stores Cloudinary URL
        cvFileName: cvData?.fileName || null,
        cvPublicId: cvData?.publicId || null, // Store this for potential future deletion
      },
      include: {
        jobPosting: true,
      },
    });

    try {
      await sendApplicationConfirmationEmail(application);
    } catch (emailError) {
      console.error("Error sending emails:", emailError);
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Error submitting application: " + error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const applications = await prisma.jobApplication.findMany({
      include: {
        jobPosting: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Error fetching applications" },
      { status: 500 }
    );
  }
}
