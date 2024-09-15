// src/components/Header.tsx

// Import necessary modules and components from React and other libraries.
import React from 'react'; // React library for building user interfaces.
import { Navbar, Nav } from 'react-bootstrap'; // Navbar and Nav components from React Bootstrap for navigation bar and menu.
import { Link } from 'react-router-dom'; // Link component from React Router for navigation between routes.

// Functional component definition for Header.
const Header: React.FC = () => {
  // Render the header component with a navigation bar.
  return (
    <Navbar bg="light" expand="lg"> {/* Navbar component from React Bootstrap with light background and expandable layout. */}
      <Navbar.Brand as={Link} to="/"> {/* Brand link that navigates to the home page ("/"). */}
        Therapy Clinic
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for collapsing the navbar on smaller screens. */}
      <Navbar.Collapse id="basic-navbar-nav"> {/* Container for collapsible content within the navbar. */}
        <Nav className="mr-auto"> {/* Navigation links, with margin on the right for spacing. */}
          <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link> {/* Link to the appointments page. */}
          <Nav.Link as={Link} to="/patients">Patients</Nav.Link> {/* Link to the patients page. */}
          <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link> {/* Link to the feedback page. */}
          <Nav.Link as={Link} to="/therapists">Therapists</Nav.Link> {/* Link to the therapists page. */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Export the Header component for use in other parts of the application.
export default Header;

