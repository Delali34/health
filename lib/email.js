import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendApplicationConfirmationEmail = async (application) => {
  try {
    // Add fallback for job title in case jobPosting is undefined
    const jobTitle = application.jobPosting?.title || "the position";

    // Email to applicant
    const applicantEmailTemplate = {
      from: process.env.GMAIL_USER,
      to: application.email,
      subject: "Application Confirmation",
      html: `
        <h1>Application Confirmation</h1>
        
        <p>Dear ${application.firstName} ${application.surname},</p>
        
        <p>Thank you for submitting your application for ${jobTitle}. 
        We have received your application and it is currently being reviewed.</p>
        
        <h2>Application Details:</h2>
        <ul>
          <li>Position: ${jobTitle}</li>
          <li>Status: ${application.status}</li>
          <li>Submitted on: ${new Date(
            application.createdAt
          ).toLocaleDateString()}</li>
        </ul>
        
        <h3>Personal Information:</h3>
        <ul>
          <li>Name: ${application.firstName} ${application.middleName || ""} ${
        application.surname
      }</li>
          <li>Region: ${application.region}</li>
          <li>District: ${application.district}</li>
          <li>Contact: ${application.telephone}</li>
        </ul>
        
        <p>We will review your application carefully and contact you regarding the next steps.</p>
        
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
        
        <h2>Position Details:</h2>
        <ul>
          <li>Position: ${jobTitle}</li>
          <li>Application Status: ${application.status}</li>
        </ul>
        
        <h2>Applicant Details:</h2>
        <ul>
          <li>Name: ${application.firstName} ${application.middleName || ""} ${
        application.surname
      }</li>
          <li>Email: ${application.email}</li>
          <li>Phone: ${application.telephone}</li>
          <li>Region: ${application.region}</li>
          <li>District: ${application.district}</li>
        </ul>
        
        <p>Please login to the admin portal to review the complete application and take necessary actions.</p>
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
