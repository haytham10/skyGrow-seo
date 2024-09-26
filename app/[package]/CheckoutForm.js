'use client';

import { useRouter } from 'next/navigation';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement } from '@stripe/react-stripe-js';

export default function CheckoutForm({ formData, selectedPackage }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRouterReady, setIsRouterReady] = useState(false);

  useEffect(() => {
    setIsRouterReady(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isRouterReady) return; // Add this check

    setIsProcessing(true);

    const { data: clientSecret } = await axios.post('/api/payment', {
      amount: selectedPackage.price * 100, // Convert to cents
      formData,
      packageName: selectedPackage.name,
    });

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      // Payment successful
      router.push('/thank-you');
    }
  };

  if (!isRouterReady) {
    return null; // or a loading indicator
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <CardElement />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}

const formStyle = {
  padding: '20px',
  backgroundColor: '#2E2E2E',
  borderRadius: '10px',
  marginTop: '20px',
};
