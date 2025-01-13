// app/api/jobs/[id]/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const data = await req.json();

    // Prepare update data based on what fields are provided
    const updateData = {
      updatedAt: new Date(),
    };

    // Add fields to updateData only if they exist in the request
    if (data.isActive !== undefined) {
      updateData.isActive = data.isActive;
    }
    if (data.title !== undefined) {
      updateData.title = data.title;
    }
    if (data.description !== undefined) {
      updateData.description = data.description;
    }
    if (data.department !== undefined) {
      updateData.department = data.department;
    }
    if (data.requirements !== undefined) {
      updateData.requirements = data.requirements;
    }

    const job = await prisma.jobPosting.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { error: "Error updating job: " + error.message },
      { status: 500 }
    );
  }
}
