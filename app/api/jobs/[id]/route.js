// app/api/jobs/[id]/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const data = await req.json();

    const job = await prisma.jobPosting.update({
      where: { id },
      data: {
        isActive: data.isActive,
        updatedAt: new Date(),
      },
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
