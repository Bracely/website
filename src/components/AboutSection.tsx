import React from 'react';

// AboutSection: Displays information about the World Speech Day event
// This section introduces the mission and purpose of World Speech Day
// Section ID "about" allows navigation links to jump to this section
const AboutSection: React.FC = () => {
  return (
    // Full-width section with light gray background (secondary), vertical padding for spacing
    // ID attribute allows this section to be targeted by navigation links (e.g., href="#about")
    // Relative positioning enables absolute positioning of any child elements if needed
    <section id="about" className="py-16 bg-secondary text-center relative overflow-hidden">
      {/* No decorative elements - clean, professional appearance with only essential content */}

      {/* Centered content container with responsive padding */}
      <div className="container mx-auto px-4 relative">
        {/* Main heading for this section */}
        {/* Responsive sizing: 4xl on mobile, 5xl on larger screens */}
        {/* Extra bold font weight for emphasis, dark text color (primary), bottom margin */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
          About World Speech Day
        </h2>
        
        {/* Descriptive paragraph explaining World Speech Day */}
        {/* Medium text size, light font weight for readability */}
        {/* Max width of 3xl prevents text from becoming too wide on large screens */}
        {/* Centered both horizontally and vertically with generous spacing */}
        <p className="text-lg md:text-xl text-accent font-light leading-relaxed max-w-3xl mx-auto">
          World Speech Day is a global event celebrating speeches and public speaking that inspire positive change. Join us in amplifying voices that matter and making a difference in the world.
        </p>
      </div>
    </section>
  );
};

// Export AboutSection component for use in the main page
export default AboutSection;