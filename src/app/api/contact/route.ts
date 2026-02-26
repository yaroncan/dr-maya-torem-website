import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import content from "@/content/site-content.json";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: "שירות האימייל אינו מוגדר" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "שדות חובה חסרים" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "אתר ד״ר מאיה טורם <onboarding@resend.dev>",
      to: content.contact.notificationEmail,
      subject: `פנייה חדשה מהאתר: ${subject || "ללא נושא"}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>פנייה חדשה מהאתר</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; font-weight: bold;">שם:</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">טלפון:</td><td style="padding: 8px;" dir="ltr">${phone}</td></tr>
            ${email ? `<tr><td style="padding: 8px; font-weight: bold;">אימייל:</td><td style="padding: 8px;" dir="ltr">${email}</td></tr>` : ""}
            ${subject ? `<tr><td style="padding: 8px; font-weight: bold;">נושא:</td><td style="padding: 8px;">${subject}</td></tr>` : ""}
            <tr><td style="padding: 8px; font-weight: bold;">הודעה:</td><td style="padding: 8px;">${message}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "שגיאה בשליחת ההודעה" },
      { status: 500 }
    );
  }
}
