// app/api/applications/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import sendApplicationConfirmationEmail from "@/lib/email";

export async function POST(req) {
  try {
    const data = await req.json();

    // Validate and process education history
    const educationHistory = Array.isArray(data.educationHistory)
      ? data.educationHistory.map((edu) => ({
          level: edu.level,
          program: edu.program,
          yearCompleted: edu.yearCompleted,
          institution: edu.institution,
        }))
      : [];

    // Process work and volunteer history
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

    // Ensure competencies is an object
    const competencies =
      typeof data.competencies === "object" ? data.competencies : {};

    // Create application with included jobPosting relation
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
      },
      include: {
        jobPosting: true, // Include the job posting data
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
