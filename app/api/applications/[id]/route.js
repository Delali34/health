// app/api/applications/[id]/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req, { params }) {
  try {
    const { id } = params;
    const data = await req.json();

    const application = await prisma.jobApplication.update({
      where: { id },
      data: {
        status: data.status,
      },
    });

    return NextResponse.json(application);
  } catch (error) {
    console.error("Error updating application:", error);
    return NextResponse.json(
      { error: "Error updating application: " + error.message },
      { status: 500 }
    );
  }
}
