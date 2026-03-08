import React from 'react';
// Import react-icons icons for social media links
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// Footer: Bottom section of the website with copyright info and social media links
// Appears on every page and provides footer content
const Footer: React.FC = () => {
  return (
    // Full-width footer with black background, white text, and minimal padding
    // Positioned at bottom of page with relative positioning for organization
    <footer className="bg-black text-white py-6 relative overflow-hidden">
      {/* No decorative elements - clean, professional footer design */}

      {/* Centered footer content container */}
      <div className="container mx-auto text-center relative">
        {/* Copyright notice showing year and organization name */}
        <p className="text-lg font-light">© 2026 World Speech Day Zimbabwe</p>
        
        {/* Social media links container */}
        {/* Flexbox centers the icons horizontally with spacing between them */}
        <div className="flex justify-center space-x-6 mt-4">
          {/* Facebook icon link */}
          {/* 24px icon size, white text that changes to light gray (secondary) on hover */}
          {/* Scales up 10% on hover with smooth transition for interactive feel */}
          <a href="#" className="text-white hover:text-secondary transition duration-300 transform hover:scale-110">
            <FaFacebook size={24} />
          </a>
          
          {/* Twitter icon link with same styling and hover effects */}
          <a href="#" className="text-white hover:text-secondary transition duration-300 transform hover:scale-110">
            <FaTwitter size={24} />
          </a>
          
          {/* Instagram icon link with same styling and hover effects */}
          <a href="#" className="text-white hover:text-secondary transition duration-300 transform hover:scale-110">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Export Footer component to be used on all pages
export default Footer;