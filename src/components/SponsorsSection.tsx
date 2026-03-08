import React from 'react';

// SponsorsSection: Displays sponsor logos and acknowledges event sponsors
// Section allows sponsors to showcase their brand and support for the event
const SponsorsSection: React.FC = () => {
    return (
        // White background section with minimal vertical padding
        // Provides space for sponsor logo showcase
        <section className="py-10 bg-white relative overflow-hidden">
            {/* No decorative elements - clean sponsor display */}

            {/* Centered content container */}
            <div className="container mx-auto text-center relative">
                {/* Section heading */}
                {/* Responsive text sizing with bold formatting */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
                    Our Sponsors
                </h2>
                
                {/* Flex container that wraps sponsor logos horizontally */}
                {/* wraps to new line if needed, centers items */}
                <div className="flex flex-wrap justify-center">
                    {/* Sponsor #1 - Logo container with hover effect */}
                    {/* Each sponsor gets equal spacing (margin on all sides) */}
                    {/* Scales 5% larger on hover for interactive feedback */}
                    <div className="m-4 transform hover:scale-105 transition duration-300">
                        {/* Sponsor logo image - 80px height, aspect ratio maintained */}
                        {/* Replace /path/to/sponsor1-logo.png with actual logo path in public/logos */}
                        <img src="/path/to/sponsor1-logo.png" alt="Sponsor 1" className="h-20" />
                    </div>
                    
                    {/* Sponsor #2 - Logo container with same styling and hover effects */}
                    {/* Same structure as Sponsor #1 - easy to duplicate for adding more sponsors */}
                    <div className="m-4 transform hover:scale-105 transition duration-300">
                        <img src="/path/to/sponsor2-logo.png" alt="Sponsor 2" className="h-20" />
                    </div>
                    
                    {/* Sponsor #3 - Logo container matching the pattern */}
                    {/* This is the third and final sponsor in this section */}
                    <div className="m-4 transform hover:scale-105 transition duration-300">
                        <img src="/path/to/sponsor3-logo.png" alt="Sponsor 3" className="h-20" />
                    </div>
                    
                    {/* TO ADD MORE SPONSORS: */}
                    {/* Duplicate any of the sponsor div blocks above and update the src and alt text */}
                    {/* Update the image path to point to the actual sponsor logo file */}
                </div>
            </div>
        </section>
    );
};

// Export SponsorsSection component for use in the main page
export default SponsorsSection;