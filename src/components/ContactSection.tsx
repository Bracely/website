import React from 'react';
// Import social media icons from react-icons library
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// ContactSection: Displays contact information and social media links
// Provides multiple ways for visitors to reach out and follow the event
const ContactSection: React.FC = () => {
    return (
        // Light gray background section with vertical padding for spacing
        // Relative positioning to organize child elements
        <section className="py-16 bg-secondary relative overflow-hidden">
            {/* No decorative elements for clean, professional appearance */}

            {/* Centered content container */}
            <div className="container mx-auto text-center relative">
                {/* Main section heading */}
                {/* Responsive text sizing and bold formatting for visual hierarchy */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
                    Get in Touch
                </h2>
                
                {/* Introductory paragraph encouraging visitors to make contact */}
                {/* Medium text size with light weight, limited width, bottom margin for spacing */}
                <p className="text-lg md:text-xl text-accent font-light leading-relaxed max-w-3xl mx-auto mb-8">
                    We would love to hear from you! Reach out to us through any of the following methods:
                </p>
                
                {/* Flex container for contact information - vertical layout with centered items */}
                <div className="flex flex-col items-center">
                    {/* Email contact information */}
                    {/* Bold heading followed by email address in medium gray */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-primary">Email:</h3>
                        <p className="text-accent">info@worldspeechdayzim.com</p>
                    </div>
                    
                    {/* Phone contact information */}
                    {/* Bold heading followed by phone number in medium gray */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-primary">Phone:</h3>
                        <p className="text-accent">+263 789 830 648</p>
                    </div>
                    
                    {/* Social media links container */}
                    {/* Horizontal flex layout with spacing between icons */}
                    <div className="flex space-x-6 mt-4">
                        {/* Facebook icon link */}
                        {/* 24px icon, medium gray text (accent) that changes to dark (primary) on hover */}
                        {/* Scales 10% larger on hover for interactive feel with smooth 300ms transition */}
                        <a href="#" className="text-accent hover:text-primary transition duration-300 transform hover:scale-110">
                            <FaFacebook size={24} />
                        </a>
                        
                        {/* Twitter icon link with same styling and hover effects */}
                        <a href="#" className="text-accent hover:text-primary transition duration-300 transform hover:scale-110">
                            <FaTwitter size={24} />
                        </a>
                        
                        {/* Instagram icon link with same styling and hover effects */}
                        <a href="#" className="text-accent hover:text-primary transition duration-300 transform hover:scale-110">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export ContactSection component for use in the main page
export default ContactSection;