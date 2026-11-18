import type { Metadata } from 'next';
import './main.css';
import './animations.css';
import Loader from '@/components/Loader';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AppointmentModal from '@/components/AppointmentModal';
import SiteEffects from '@/components/SiteEffects';

const TITLE = 'Ashish Eye Hospital – Best Eye Hospital in Surat';
const DESC = 'Ashish Eye Hospital – Best Eye Hospital in Surat. Expert eye care services including Cataract Surgery, LASIK, Retina Treatment, Glaucoma & more. Book appointment today!';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: TITLE,
  description: DESC,
  keywords: 'eye hospital surat, best eye hospital surat, cataract surgery surat, lasik surat, retina treatment surat, ashish eye hospital, eye doctor surat',
  robots: 'index, follow',
  icons: { icon: '/images/favicon.svg' },
  openGraph: {
    title: TITLE,
    description: 'Expert eye care in Surat. Cataract, LASIK, Retina, Glaucoma & more. 5-star rated. Book your appointment today.',
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: 'Ashish Eye Hospital',
  description: 'Best Eye Hospital in Surat offering Cataract Surgery, LASIK, Retina Treatment, Glaucoma Treatment and more.',
  telephone: '+91 70435 99108',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7th Floor, Oxygen House, Near Sudama Chowk, Mota Varachha',
    addressLocality: 'Surat', addressRegion: 'Gujarat', postalCode: '394101', addressCountry: 'IN',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '200' },
  medicalSpecialty: 'Ophthalmology',
  openingHours: 'Mo-Sa 09:00-19:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <Loader />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <AppointmentModal />
        <FloatingButtons />
        <SiteEffects />
      </body>
    </html>
  );
}
