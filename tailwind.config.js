// Tailwind CSS configuration file for World Speech Day Zimbabwe event website
// Defines custom theme colors, fonts, and styling utilities used throughout the project

module.exports = {
  // Content array: Tell Tailwind where to find HTML/JSX files to scan for class names
  // Scans all TypeScript and JavaScript files in the src directory for Tailwind classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // Theme configuration: Extend default Tailwind theme with custom design system
  theme: {
    extend: {
      // Custom color palette for professional, minimalist design
      colors: {
        // Primary color: Dark gray (#1f2937) used for main text, headings, and backgrounds
        // Creates a sophisticated, professional appearance throughout the site
        primary: '#1f2937',
        
        // Secondary color: Light gray (#f3f4f6) used for alternative backgrounds and contrast
        // Provides subtle contrast without being overly bright or distracting
        secondary: '#f3f4f6',
        
        // Accent color: Medium gray (#6b7280) used for secondary text and hover states
        // Bridges visual hierarchy between primary and secondary colors
        accent: '#6b7280',
        
        // Black: Pure black (#000000) primarily used for footer background
        black: '#000000',
        
        // White: Pure white (#FFFFFF) used for text on dark backgrounds and button backgrounds
        white: '#FFFFFF',
      },
      // Custom font family configuration
      fontFamily: {
        // Sans-serif font stack with 'Inter' as primary, fallback to system sans fonts
        // Inter is a modern, clean, highly legible font suitable for professional web applications
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  // Plugins array: Currently empty but can add Tailwind plugins here for extended functionality
  // Examples: forms plugin, typography plugin, animation plugins, etc.
  plugins: [],
};
