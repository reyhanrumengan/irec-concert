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
        email: "reyhanrumengan98@gmail.com",
      },
      to: [{ email: email }],
      subject: "Kühlender Klang vor dem Herbst",
      htmlContent: "<strong>Thank you for signing up!</strong>.",
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
