import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple file-based storage for rate limiting (simulating a DB)
const LIMIT_FILE = path.join(process.cwd(), "submission_limits.json");

function getSubmissionHistory(): Record<string, number> {
  try {
    if (fs.existsSync(LIMIT_FILE)) {
      const data = fs.readFileSync(LIMIT_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error reading limit file", e);
  }
  return {};
}

function saveSubmissionHistory(history: Record<string, number>) {
  try {
    fs.writeFileSync(LIMIT_FILE, JSON.stringify(history, null, 2));
  } catch (e) {
    console.error("Error saving limit file", e);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, company } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailLower = String(email).toLowerCase().trim();
    const now = Date.now();
    const history = getSubmissionHistory();

    // 24-hour check (24 * 60 * 60 * 1000 = 86400000ms)
    if (history[emailLower] && now - history[emailLower] < 86400000) {
      const remaining = 86400000 - (now - history[emailLower]);
      const hours = Math.ceil(remaining / (1000 * 60 * 60));
      return NextResponse.json(
        { error: `You have already sent a message recently. Please try again in ${hours} hours.` },
        { status: 429 }
      );
    }

    // Attempt to send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Rigteq Inquiry <onboarding@resend.dev>",
      to: "ops@rigteq.com",
      subject: `New Inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 10px;"><strong>Company:</strong> ${company || "Not provided"}</p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #555; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
    }

    // Update history only if successful
    history[emailLower] = now;
    saveSubmissionHistory(history);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent to ops@rigteq.com."
    });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request or server error" }, { status: 500 });
  }
}
