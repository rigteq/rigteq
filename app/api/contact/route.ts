import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string || "Not Specified";
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.verify();
    } catch (error) {
      console.error("SMTP Connection Error:", error);
      // Fallback or just log if developing without keys
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("Missing Email Credentials. Returning success for DEV mode.");
        return NextResponse.json({ success: true, message: "Message received (Dev Mode)" });
      }
      throw new Error("Failed to connect to email provider");
    }

    let attachments = [];
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Email to Ops (Rigteq Team)
    const mailOptions = {
      from: `"Rigteq Website" <${process.env.EMAIL_USER}>`,
      to: "ops@rigteq.com",
      subject: `New Inquiry from ${name} - Rigteq Website`,
      html: `
            <div style="font-family: Arial, sans-serif; max-w-width: 600px; margin: 0 auto;">
                <h2 style="color: #003366;">New Project Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background: #f5f5f5; padding: 15px; border-left: 4px solid #003366;">
                    ${message}
                </blockquote>
                ${file ? `<p><strong>Attachment:</strong> ${file.name}</p>` : ''}
                <p style="font-size: 12px; color: #888;">Received via Rigteq.com Contact Form</p>
            </div>
        `,
      attachments: attachments,
    };

    // Auto-reply to User
    const autoReplyOptions = {
      from: `"Rigteq Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Rigteq!",
      html: `
             <div style="font-family: Arial, sans-serif; max-w-width: 600px; margin: 0 auto;">
                <h2 style="color: #003366;">Hello ${name},</h2>
                <p>Thank you for reaching out to Rigteq. We have received your message and our team will review it shortly.</p>
                <p>We usually reply within 24 hours.</p>
                <br/>
                <p>Best Regards,</p>
                <p><strong>Team Rigteq</strong></p>
                <a href="https://rigteq.com" style="color: #003366;">www.rigteq.com</a>
            </div>
        `
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message: " + (error as Error).message },
      { status: 500 }
    );
  }
}
