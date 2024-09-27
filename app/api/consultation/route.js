import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, website, notes, selectedPack } = body;

    console.log('Received form data:', { name, email, company, website, notes, selectedPack });

    // Set up Zoho Mail transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465, // Or use 587 for TLS
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_USER, // Your Zoho Mail email
        pass: process.env.ZOHO_PASS, // Your Zoho Mail password or App-specific password
      },
    });

    const mailOptions = {
      from: process.env.ZOHO_USER,
      to: 'info@skygrow.live', // Updated recipient email
      subject: 'New Consultation Request',
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Website: ${website}
        Selected Pack: ${selectedPack || 'Not specified'}
        Notes: ${notes}
      `,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Selected Pack:</strong> ${selectedPack || 'Not specified'}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `,
    };

    console.log('Sending email with options:', mailOptions);

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
