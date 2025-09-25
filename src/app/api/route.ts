import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const apiKey = process.env.BREVO_API_KEY;
    const attachmentUrl =
      process.env.NEXT_PUBLIC_SITE_URL + "/concert-calendar.ics";

    const url = "https://api.brevo.com/v3/smtp/email";
    const headers = {
      accept: "application/json",
      "api-key": apiKey!,
      "content-type": "application/json",
    };

    const data = {
      sender: {
        name: "A Harmonic Voyage: From Europe to Asia",
        email: "irec.concert@gmail.com",
      },
      to: [{ email: email }],
      subject: "A Harmonic Voyage: From Europe to Asia",
      htmlContent: `
      <p>Dear Attendee,</p>

      <p>You have been successfully registered to the IREC Berlin concert: </p>
      <strong>A Harmonic Voyage: From Europe to Asia</strong>
      <p>
        <strong>Date: Saturday, 18th October 2026, 16:00 (CEST)</strong>
        </br>
        <strong>Location: Kaiser-Friedrich-Gedächniskirche, Händelallee 20, 10557 Berlin</strong>
      </p>

      <p>For more information, you can send an email to: 
      <a href="mailto:info@irec-berlin.org">info@irec-berlin.org
      </a>
      </p>

      <p>See you there!</p>

      <p>Kind regards,
      <br/>
      IREC Berlin</p>

      <p>P.S.: This is an automated email. Please do not reply to this email.</p>

      <p>-----</p>

      <p>Liebe Teilnehmer,</p>

      <p>Sie haben sich erfolgreich für das Konzert des IREC Berlin angemeldet: </p>
      <strong>Eine harmonische Reise: von Europa nach Asien</strong>
      <p>
        <strong>Datum: Samstag, 18. Oktober 2026, 16:00 (CEST)</strong>
        </br>
        <strong>Ort: Kaiser-Friedrich-Gedächniskirche, Händelallee 20, 10557 Berlin</strong>
      </p>

      <p>Für weitere Informationen können Sie eine E-Mail senden an:
      <a href="mailto:info@irec-berlin.org">info@irec-berlin.org
      </a>
      </p>

      <p>Wir sehen uns dort!</p>

      <p>Mit freundlichen Grüßen,
      <br/>
      IREC Berlin</p>

      <p>P.S.: Dies ist eine automatisierte E-Mail. Bitte antworten Sie nicht auf diese E-Mail.</p>
  `,

      // attachment: [
      // {
      //   url: `${process.env.NEXT_PUBLIC_SITE_URL}/concert-calendar.ics`,
      // },
      // ],

      // attachment: [
      //   {
      //     url: "https://irec-concert-2024-bucket.s3.eu-central-1.amazonaws.com/concert-calendar.ics",
      //   },
      // ],
    };

    await axios.post(url, data, { headers });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email. Please check your data" },
      { status: 500 }
    );
  }
}
