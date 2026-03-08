import { NextPage } from 'next'; // Type definition for Next.js page component
// Import all section components that make up the main page
import Header from '../components/Header'; // Navigation bar at top of page
import HeroSection from '../components/HeroSection'; // Large landing banner with call-to-action
import AboutSection from '../components/AboutSection'; // Information about World Speech Day
import SpeakersSection from '../components/SpeakersSection'; // Featured speakers display
import ScheduleSection from '../components/ScheduleSection'; // Event date, time, location details
import SponsorsSection from '../components/SponsorsSection'; // Sponsor logos showcase
import ContactSection from '../components/ContactSection'; // Contact information and social media
import Footer from '../components/Footer'; // Footer with copyright and links
import MotionWrapper from '../components/MotionWrapper'; // Animation wrapper component
// Note: FaFacebook and FaTwitter are imported but not currently used (kept for future reference)
import { FaFacebook, FaTwitter } from 'react-icons/fa';

// Home page component - main landing page for World Speech Day Zimbabwe
// Composes multiple section components into a complete page layout
// Uses NextPage type from Next.js for TypeScript type safety
const Home: NextPage = () => {
  return (
    // Main container div wrapping all page content
    <div>
      {/* Header component - persistent navigation bar at top of page */}
      <Header />
      
      {/* Hero section wrapped with motion animation for fade-in effect */}
      {/* HeroSection displays main event title, subtitle, and register button */}
      <MotionWrapper>
        <HeroSection />
      </MotionWrapper>
      
      {/* About section explaining the purpose and mission of World Speech Day */}
      <AboutSection />
      
      {/* Speakers section showing featured speakers for the event */}
      <SpeakersSection />
      
      {/* Schedule section displaying event date, time, location, and format */}
      <ScheduleSection />
      
      {/* Sponsors section showcasing event sponsors and partners */}
      <SponsorsSection />
      
      {/* Contact section with email, phone, and social media information */}
      <ContactSection />
      
      {/* Footer with copyright notice and social media links */}
      <Footer />
    </div>
  );
};

// Export Home component as default export for Next.js routing
export default Home;