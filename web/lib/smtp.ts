import nodemailer from "nodemailer";

export async function sendContactNotificationEmail(data: {
  name: string;
  email: string;
  company: string;
  fleetSize: string;
  planInterest: string;
  message?: string;
}) {
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER || "info@hyrento.com";
  const pass = process.env.SMTP_PASS;
  const to = process.env.SMTP_TO || "sales@hyrento.com";

  if (!pass) {
    console.warn("SMTP_PASS environment variable is missing. SMTP email sending skipped.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: `"HyRento Contact Form" <${user}>`,
    to,
    replyTo: data.email,
    subject: `New Lead: ${data.name} (${data.company})`,
    html: `
      <h2>New Lead Submission from HyRento</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Fleet Size:</strong> ${data.fleetSize}</p>
      <p><strong>Plan Interest:</strong> ${data.planInterest || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message ? data.message.replace(/\n/g, "<br/>") : "No message provided."}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact form email sent successfully via SMTP:", info.messageId);
    return true;
  } catch (error) {
    console.error("Failed to send contact form email via SMTP:", error);
    return false;
  }
}
