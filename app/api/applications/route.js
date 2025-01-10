import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import sendApplicationConfirmationEmail from "@/lib/email";

// GET handler: Fetch all job applications with related job postings
export async function GET() {
  try {
    const applications = await prisma.jobApplication.findMany({
      include: {
        jobPosting: true, // Include the related job posting details
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Error fetching applications: " + error.message },
      { status: 500 }
    );
  }
}

// POST handler: Create a new job application
export async function POST(req) {
  try {
    const data = await req.json();

    // Convert yearCompleted to integer
    const yearCompleted = parseInt(data.yearCompleted);

    // Ensure workHistory and volunteerHistory are arrays
    const workHistory = Array.isArray(data.workHistory) ? data.workHistory : [];
    const volunteerHistory = Array.isArray(data.volunteerHistory)
      ? data.volunteerHistory
      : [];

    // Ensure competencies is an object
    const competencies =
      typeof data.competencies === "object" ? data.competencies : {};

    // Ensure selectedRoles is an array
    const selectedRoles = Array.isArray(data.selectedRoles)
      ? data.selectedRoles
      : [];

    const application = await prisma.jobApplication.create({
      data: {
        jobPostingId: data.jobPostingId,
        firstName: data.firstName,
        middleName: data.middleName || null,
        surname: data.surname,
        address: data.address,
        region: data.region,
        district: data.district,
        email: data.email,
        telephone: data.telephone,
        certificate: data.certificate,
        yearCompleted: yearCompleted,
        institution: data.institution,
        classGraduated: data.classGraduated,
        workHistory: workHistory,
        volunteerHistory: volunteerHistory,
        competencies: competencies,
        selectedRoles: selectedRoles,
        education: data.education,
        status: "pending",
      },
    });

    try {
      // Send confirmation emails
      await sendApplicationConfirmationEmail(application);
    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      // Continue with the response even if email fails
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
