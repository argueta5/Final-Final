// src/components/Footer.tsx

// Import necessary modules and components from React and other libraries.
import React from 'react'; // React library for building user interfaces.
import { Container } from 'react-bootstrap'; // Container component from React Bootstrap for layout and styling.

// Functional component definition for Footer.
const Footer: React.FC = () => {
  // Render the footer component.
  return (
    <Container className="text-center my-4"> {/* Container with text centered and margin for styling. */}
      <footer>
        <p>&copy; 2024 Therapy Clinic. All rights reserved.</p> {/* Footer text indicating copyright and the name of the organization. */}
      </footer>
    </Container>
  );
};

// Export the Footer component for use in other parts of the application.
export default Footer;
