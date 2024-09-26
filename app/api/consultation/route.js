import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, website, notes, selectedPack } = body;

    console.log('Received form data:', { name, email, company, website, notes, selectedPack });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'haytham.mkt@gmail.com',
      subject: 'New Consultation Request',
      text: 
	  	`
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
		`
    };

    console.log('Sending email with options:', mailOptions);

    // Add this before sending the email
    dns.lookup('smtp.gmail.com', (err, address, family) => {
      console.log('DNS lookup result:', err, address, family);
    });

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}