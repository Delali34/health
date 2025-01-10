// lib/email.js
import nodemailer from "nodemailer";

// Create reusable transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Make sure to use 'export default' instead of 'export'
const sendApplicationConfirmationEmail = async (application) => {
  try {
    // Email to applicant
    const applicantEmailTemplate = {
      from: process.env.GMAIL_USER,
      to: application.email,
      subject: "Application Confirmation",
      html: `
        <h1>Application Confirmation</h1>
        
        <p>Dear ${application.firstName} ${application.surname},</p>
        
        <p>Thank you for submitting your application. Here are your application details:</p>
        
        <h2>Application Details:</h2>
        <ul>
          <li>Position(s): ${application.selectedRoles.join(", ")}</li>
          <li>Status: ${application.status}</li>
          <li>Submitted on: ${new Date().toLocaleDateString()}</li>
        </ul>
        
        <p>We will review your application and get back to you soon.</p>
        
        <p>Best regards,<br/>HR Team</p>
      `,
    };

    // Email to admin
    const adminEmailTemplate = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Job Application Received",
      html: `
        <h1>New Job Application Received</h1>
        
        <h2>Applicant Details:</h2>
        <ul>
          <li>Name: ${application.firstName} ${application.middleName || ""} ${
        application.surname
      }</li>
          <li>Email: ${application.email}</li>
          <li>Phone: ${application.telephone}</li>
          <li>Position(s): ${application.selectedRoles.join(", ")}</li>
          <li>Education: ${application.education}</li>
          <li>Institution: ${application.institution}</li>
        </ul>
        
        <p>Please login to the admin portal to review the complete application.</p>
      `,
    };

    // Send emails
    const applicantMailResult = await transporter.sendMail(
      applicantEmailTemplate
    );
    console.log(
      "Applicant confirmation email sent:",
      applicantMailResult.messageId
    );

    const adminMailResult = await transporter.sendMail(adminEmailTemplate);
    console.log("Admin notification email sent:", adminMailResult.messageId);

    return { success: true };
  } catch (error) {
    console.error("Failed to send application emails:", error);
    return { success: false, error: error.message };
  }
};

export default sendApplicationConfirmationEmail;
