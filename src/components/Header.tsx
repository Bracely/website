import React from 'react';

// Header: Navigation component displayed at the top of every page
// Sticky positioning means it stays at top when scrolling
// Contains the logo and navigation menu with links to different sections
const Header: React.FC = () => {
  return (
    // Fixed header with dark background color (primary), white text
    // Sticky positioning means it stays at top when user scrolls
    // z-50 ensures it stays above other content, shadow-lg adds depth
    <header className="bg-primary text-white py-4 sticky top-0 z-50 shadow-lg">
      {/* Container with flexbox: logo on left, navigation menu on right */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo image from public/logos directory, 48px height maintains aspect ratio */}
        <img src="/logos/logo.png" alt="World Speech Day Zimbabwe" className="h-12 w-auto" />
        {/* Navigation menu section with horizontal list of links */}
        <nav>
          {/* Flex container with small gap between navigation items */}
          <ul className="flex space-x-4">
            {/* Home link - scrolls to top of page */}
            {/* Button-style: white background (visible), dark text, rounded corners, padding */}
            {/* Hover effect: background lightens to secondary gray, smooth 300ms transition */}
            <li><a href="#" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition duration-300">Home</a></li>
            
            {/* About section link - scrolls to about section via anchor ID */}
            <li><a href="#about" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition duration-300">About</a></li>
            
            {/* Event Details section link */}
            <li><a href="#event-details" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition duration-300">Event Details</a></li>
            
            {/* Speakers section link */}
            <li><a href="#speakers" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition duration-300">Speakers</a></li>
            
            {/* Register section link */}
            <li><a href="#register" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition duration-300">Register</a></li>
            
            {/* Contact section link */}
            <li><a href="#contact" className="bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Export Header component for use throughout the application
export default Header;