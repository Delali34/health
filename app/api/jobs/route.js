// app/api/jobs/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.jobPosting.findMany({
      include: {
        applications: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Error fetching jobs" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    // Ensure requirements is an array
    const requirements = Array.isArray(data.requirements)
      ? data.requirements
      : [];

    const job = await prisma.jobPosting.create({
      data: {
        title: data.title,
        description: data.description,
        department: data.department,
        requirements: requirements,
        isActive: true,
      },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "Error creating job: " + error.message },
      { status: 500 }
    );
  }
}
