import ConsultationForm from '../components/ConsultationForm';

export default function ContactPage() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-xl mx-auto">
          <ConsultationForm />
          <div className="mt-8 text-center">
            <p className="mb-2">Or reach us at:</p>
            <p>Email: <a href="mailto:info@skygrowseo.com" className="text-highlight">info@skygrowseo.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-highlight">+1 (234) 567-890</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
