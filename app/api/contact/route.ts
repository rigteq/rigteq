import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // In a real app you'd enqueue this to an email service, CRM or database.
    // For now we mock success and echo back a trimmed payload (do not echo secrets in production).
    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      company: body.company ? String(body.company).trim() : null,
      message: String(message).trim(),
      receivedAt: new Date().toISOString(),
    };

    // TODO: integrate with third-party service (SendGrid, Mailgun, HubSpot, etc.)

    return NextResponse.json({ success: true, payload });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
