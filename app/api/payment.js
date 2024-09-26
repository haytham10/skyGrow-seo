import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, formData, packageName } = req.body;

    try {
      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
      });

      // Send automated email
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: formData.email,
        subject: `Thank you for purchasing the ${packageName}`,
        text: `Dear ${formData.name},\n\nThank you for choosing SkyGrow's ${packageName}. We will contact you shortly to discuss the next steps.\n\nBest regards,\nSkyGrow Team`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: 'Payment processing failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
