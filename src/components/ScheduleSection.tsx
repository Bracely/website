import React from 'react';

// ScheduleSection: Displays key event details in an organized card layout
// Shows date, time, location, and format information for the World Speech Day event
const ScheduleSection: React.FC = () => {
    return (
        // Light gray background section with generous vertical padding
        // Relative positioning to organize child elements
        <section className="py-20 bg-secondary relative overflow-hidden">
            {/* No decorative elements for clean design */}

            {/* Centered content container */}
            <div className="container mx-auto text-center relative">
                {/* Main section heading */}
                {/* Responsive text sizing and bold formatting */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
                    Event Schedule
                </h2>
                
                {/* Introductory paragraph describing the event */}
                {/* Medium text size with light weight, limited max width, bottom margin */}
                <p className="text-lg md:text-xl text-accent font-light leading-relaxed max-w-3xl mx-auto mb-8">
                    Join us for an inspiring day of speeches and discussions.
                </p>
                
                {/* Flex container for schedule detail cards */}
                {/* Stacks cards vertically on mobile, horizontally on medium+ screens, maintains horizontal centering */}
                <div className="flex flex-col md:flex-row justify-center">
                    {/* Date Card - Key event date */}
                    {/* White background with shadow, rounded corners, padding, and margins */}
                    {/* Scales 5% larger on hover for interactivity */}
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transform hover:scale-105 transition duration-300">
                        {/* Card heading - bold dark text */}
                        <h3 className="text-xl font-semibold text-primary">Date</h3>
                        {/* Card content - medium gray text */}
                        <p className="text-accent">March 27, 2026</p>
                    </div>
                    
                    {/* Time Card - Event time range */}
                    {/* Same styling as Date card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-primary">Time</h3>
                        <p className="text-accent">10:00 AM - 4:00 PM</p>
                    </div>
                    
                    {/* Location Card - Event venue information */}
                    {/* Same styling and hover effects as other cards */}
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-primary">Location</h3>
                        <p className="text-accent">Harare International Conference Centre</p>
                    </div>
                    
                    {/* Format Card - Event delivery method */}
                    {/* Indicates both in-person and virtual participation options */}
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-primary">Format</h3>
                        <p className="text-accent">In-person and Virtual</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export ScheduleSection component for use in the main page
export default ScheduleSection;