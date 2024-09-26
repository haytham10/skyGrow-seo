import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'SkyGrow SEO Agency',
  description: 'Maximize Your Online Growth with Expert SEO Services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
