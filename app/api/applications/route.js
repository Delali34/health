import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import sendApplicationConfirmationEmail from "@/lib/email";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

// Helper function to ensure upload directory exists
async function ensureUploadDirectory() {
  const uploadDir = join(process.cwd(), "public", "uploads");
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }
  return uploadDir;
}

// Helper function to handle file upload
async function saveFile(file) {
  try {
    const uploadDir = await ensureUploadDirectory();
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique file name
    const uniqueName = `${Date.now()}-${file.name}`;
    const path = join(uploadDir, uniqueName);

    // Write the file
    await writeFile(path, buffer);
    return {
      fileName: file.name,
      filePath: `/uploads/${uniqueName}`,
    };
  } catch (error) {
    console.error("Error saving file:", error);
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
        cvData = await saveFile(cvFile);
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
        cvFile: cvData?.filePath || null,
        cvFileName: cvData?.fileName || null,
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
