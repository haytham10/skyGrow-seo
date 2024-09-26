import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, company, website, notes, packageName } = await request.json();

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // use TLS
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_USER
    }
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Consultation Request for ${packageName}`,
    text: `Package: ${packageName}\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nWebsite: ${website}\n\nNotes:\n${notes}`,
  };

  try {
    // Send email to yourself
    await transporter.sendMail(mailOptions);
  
    // Send confirmation email to client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your consultation request',
      text: `Dear ${name},\n\nThank you for your interest in our ${packageName}. We will reach out to you shortly to discuss your needs.\n\nBest regards,\nSkyGrow Team`,
    };
  
    await transporter.sendMail(clientMailOptions);
  
    return NextResponse.json({ message: 'Consultation request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}