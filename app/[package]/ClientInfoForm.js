import { useState } from 'react';
import PaymentForm from './PaymentForm';

export default function ClientInfoForm({ selectedPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    websiteURL: '',
    notes: '',
  });

  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  if (showPayment) {
    return <PaymentForm formData={formData} selectedPackage={selectedPackage} />;
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>Name</label>
      <input type="text" name="name" required onChange={handleChange} />

      <label>Email</label>
      <input type="email" name="email" required onChange={handleChange} />

      <label>Company Name</label>
      <input type="text" name="companyName" required onChange={handleChange} />

      <label>Website URL</label>
      <input type="url" name="websiteURL" required onChange={handleChange} />

      <label>Additional Notes (optional)</label>
      <textarea name="notes" onChange={handleChange}></textarea>

      <button type="submit">Proceed to Payment</button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  margin: '0 auto',
};

const labelStyle = {
  marginTop: '10px',
};

const inputStyle = {
  padding: '10px',
  marginTop: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};
