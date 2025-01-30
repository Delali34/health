// app/api/volunteer/route.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Received form data:", data);

    const {
      fullName,
      email,
      phoneNumber,
      reason,
      otherReason,
      availability,
      otherAvailability,
      region,
    } = data;

    // Get final reason and availability values
    const finalReason = reason === "Other" ? otherReason : reason;
    const finalAvailability =
      availability === "Other" ? otherAvailability : availability;

    // Email to volunteer
    const volunteerEmailTemplate = {
      from: {
        name: "Africa Health Promotion",
        address: process.env.GMAIL_USER,
      },
      to: email,
      subject: "Volunteer Application Confirmation",
      html: `
        <h1>Volunteer Application Confirmation</h1>
        
        <p>Dear ${fullName},</p>
        
        <p>Thank you for expressing interest in volunteering with Africa Health Promotion. We have received your application and will review it shortly.</p>
        
        <h2>Your Application Details:</h2>
        <ul>
          <li>Name: ${fullName}</li>
          <li>Region: ${region}</li>
          <li>Contact: ${phoneNumber}</li>
          <li>Reason for Volunteering: ${finalReason}</li>
          <li>Availability: ${finalAvailability}</li>
        </ul>
        
        <p>We will contact you soon to discuss the next steps in the volunteer process.</p>
        
        <p>Best regards,<br/>Volunteer Coordination Team</p>
      `,
    };

    // Email to admin
    const adminEmailTemplate = {
      from: {
        name: "Volunteer System",
        address: process.env.GMAIL_USER,
      },
      to: process.env.ADMIN_EMAIL,
      subject: "New Volunteer Application",
      html: `
        <h1>New Volunteer Application Received</h1>
        
        <h2>Volunteer Details:</h2>
        <ul>
          <li>Name: ${fullName}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phoneNumber}</li>
          <li>Region: ${region}</li>
          <li>Reason for Volunteering: ${finalReason}</li>
          <li>Availability: ${finalAvailability}</li>
        </ul>
        
        <p>Please review the application and contact the volunteer to discuss next steps.</p>
      `,
    };

    console.log("Sending volunteer email...");
    await transporter.sendMail(volunteerEmailTemplate);
    console.log("Volunteer email sent");

    console.log("Sending admin email...");
    await transporter.sendMail(adminEmailTemplate);
    console.log("Admin email sent");

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to process volunteer application:", error);
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
