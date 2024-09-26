import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main>
      <div className="container" style={containerStyle}>
        <h1>Thank You for Choosing SkyGrow!</h1>
        <p>We will contact you shortly.</p>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </main>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '100px 0',
};
