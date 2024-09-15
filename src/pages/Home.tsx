// src/pages/Home.tsx

// Import necessary modules and components from React and React Bootstrap.
import React from 'react'; // React library for building user interfaces.
import { Container, Row, Col, Card } from 'react-bootstrap'; // UI components from React Bootstrap for layout and styling.

// Functional component definition for the Home page.
const Home: React.FC = () => {
  // Render the Home page with a welcome message and links to other sections.
  return (
    <Container> {/* Container for responsive layout and padding. */}
      <h1 className="text-center my-4">Welcome to Therapy Clinic</h1> {/* Page heading styled to be centered with margin. */}
      <Row> {/* Row component to create a horizontal group of columns. */}
        {/* Column for Appointments */}
        <Col md={4}> {/* Column takes up 4/12 of the width on medium devices and larger. */}
          <Card className="text-center"> {/* Card component for a box-like container with centered text. */}
            <Card.Body>
              <Card.Title>Appointments</Card.Title> {/* Card title */}
              <Card.Text>
                Manage your appointments efficiently and never miss a session.
              </Card.Text> {/* Card text */}
              <Card.Link href="/appointments">View Appointments</Card.Link> {/* Link to navigate to the Appointments page */}
            </Card.Body>
          </Card>
        </Col>
        {/* Column for Patients */}
        <Col md={4}> {/* Column takes up 4/12 of the width on medium devices and larger. */}
          <Card className="text-center"> {/* Card component for a box-like container with centered text. */}
            <Card.Body>
              <Card.Title>Patients</Card.Title> {/* Card title */}
              <Card.Text>
                Add and manage patient information easily.
              </Card.Text> {/* Card text */}
              <Card.Link href="/patients">View Patients</Card.Link> {/* Link to navigate to the Patients page */}
            </Card.Body>
          </Card>
        </Col>
        {/* Column for Feedback */}
        <Col md={4}> {/* Column takes up 4/12 of the width on medium devices and larger. */}
          <Card className="text-center"> {/* Card component for a box-like container with centered text. */}
            <Card.Body>
              <Card.Title>Feedback</Card.Title> {/* Card title */}
              <Card.Text>
                We value your feedback to improve our services.
              </Card.Text> {/* Card text */}
              <Card.Link href="/feedback">Submit Feedback</Card.Link> {/* Link to navigate to the Feedback page */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Export the Home component for use in other parts of the application.
export default Home;
