// app/api/downloads/[id]/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fetch from "node-fetch";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    // Get the application to find the CV file details
    const application = await prisma.jobApplication.findUnique({
      where: { id },
      select: { cvFile: true, cvFileName: true },
    });

    if (!application || !application.cvFile) {
      return NextResponse.json({ error: "CV not found" }, { status: 404 });
    }

    // Fetch the file from Cloudinary
    const response = await fetch(application.cvFile);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch file: ${response.statusText}` },
        { status: response.status }
      );
    }

    // Get the file content as an array buffer
    const fileBuffer = await response.arrayBuffer();

    // Determine content type based on file extension
    let contentType = "application/octet-stream"; // Default
    if (application.cvFileName?.endsWith(".pdf")) {
      contentType = "application/pdf";
    } else if (application.cvFileName?.endsWith(".docx")) {
      contentType =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    } else if (application.cvFileName?.endsWith(".doc")) {
      contentType = "application/msword";
    }

    // Set up response headers for download
    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set(
      "Content-Disposition",
      `attachment; filename="${application.cvFileName}"`
    );

    // Return the file as a download
    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    return NextResponse.json(
      { error: "Error downloading file: " + error.message },
      { status: 500 }
    );
  }
}
