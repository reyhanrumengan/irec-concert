import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const apiKey = process.env.BREVO_API_KEY;

    // if (!email) {
    //   return NextResponse.json(
    //     { message: "Email is required" },
    //     { status: 400 }
    //   );
    // }

    const url = "https://api.brevo.com/v3/smtp/email";
    const headers = {
      accept: "application/json",
      "api-key": apiKey!,
      "content-type": "application/json",
    };

    const data = {
      sender: {
        name: "Kühlender Klang vor dem Herbst",
        email: "irec.concert@gmail.com",
      },
      to: [{ email: email }],
      subject: "Kühlender Klang vor dem Herbst",
      htmlContent: `
      <p>Dear Attendee,</p>
      
      <p>You have been successfully registered to the IREC Berlin concert: <strong>Kühlender Klang vor dem Herbst</strong>.</p>

      <p>For more information, you can send an email to: 
      <a href="mailto:info@irec-berlin.org">info@irec-berlin.org</a>
      </p>

      <p>See you there!</p>

      <p>Kind regards,
      <br/>
      IREC Berlin</p>
  `,
    };

    await axios.post(url, data, { headers });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
