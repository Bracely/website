import React from 'react';

// SpeakersSection: Displays featured speakers for the World Speech Day event
// Shows speaker profile cards in a responsive grid layout
// Section ID "speakers" allows navigation links to jump to this section
const SpeakersSection: React.FC = () => {
  return (
    // White background section with vertical padding for spacing
    // ID allows this section to be targeted by navigation links
    <section id="speakers" className="py-16 bg-white text-center relative overflow-hidden">
      {/* No decorative elements for clean, professional appearance */}

      {/* Main content container with responsive padding */}
      <div className="container mx-auto px-4 relative">
        {/* Section heading */}
        {/* Responsive text sizing and bold formatting for visual hierarchy */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary">
          Meet Our Speakers
        </h2>
        
        {/* Responsive grid layout */}
        {/* 1 column on mobile, 3 columns on medium+ screens, 32px gap between cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Speaker Card 1 - Reusable template structure */}
          {/* Light gray background with drop shadow for depth, rounded corners, padding */}
          {/* Scales 5% larger on hover to indicate interactivity */}
          <div className="bg-secondary shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            {/* Placeholder for speaker image - medium gray background, 160px height */}
            <div className="h-40 bg-accent rounded mb-4"></div>
            
            {/* Speaker name - bold, larger text */}
            <h3 className="text-xl font-semibold text-primary">Speaker Name</h3>
            
            {/* Speaker title/role - medium gray color for secondary information */}
            <p className="text-accent">Title</p>
            
            {/* Speaker biography - short description with top margin */}
            <p className="text-primary mt-2">Short bio placeholder.</p>
          </div>
          
          {/* Speaker Card 2 - Identical structure to Card 1 */}
          {/* Replace placeholder text with actual speaker information */}
          <div className="bg-secondary shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="h-40 bg-accent rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-primary">Speaker Name</h3>
            <p className="text-accent">Title</p>
            <p className="text-primary mt-2">Short bio placeholder.</p>
          </div>
          
          {/* Speaker Card 3 - Identical structure to Cards 1 and 2 */}
          {/* Can easily add more cards by duplicating this div */}
          <div className="bg-secondary shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="h-40 bg-accent rounded mb-4"></div>
            <h3 className="text-xl font-semibold text-primary">Speaker Name</h3>
            <p className="text-accent">Title</p>
            <p className="text-primary mt-2">Short bio placeholder.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export SpeakersSection component for use in the main page
export default SpeakersSection;