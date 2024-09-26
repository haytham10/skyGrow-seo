import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PaymentForm({ formData, selectedPackage }) {
  return (
    <div style={paymentStyle}>
      <h2>Payment Details</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm formData={formData} selectedPackage={selectedPackage} />
      </Elements>
    </div>
  );
}

const paymentStyle = {
  maxWidth: '500px',
  margin: '0 auto',
};
