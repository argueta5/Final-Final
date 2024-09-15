// src/components/TherapistForm.tsx

// Import necessary modules and components from React and other libraries.
import React, { useState } from 'react'; // React library for building user interfaces and managing state.
import { Button, Form, Container, Alert } from 'react-bootstrap'; // UI components from React Bootstrap for form, layout, and alert styling.
import { createTherapist } from '../services/api'; // Import the API service function to create a new therapist record.

// Define the type for the props that the TherapistForm component will receive.
interface TherapistFormProps {
  onRefresh: () => Promise<void>; // Callback function to refresh data or update the parent component after form submission.
}

// Functional component definition for TherapistForm.
const TherapistForm: React.FC<TherapistFormProps> = ({ onRefresh }) => {
  // State variables for managing form input and error messages.
  const [name, setName] = useState(''); // State to store the therapist's name.
  const [specialization, setSpecialization] = useState(''); // State to store the therapist's specialization.
  const [error, setError] = useState<string | null>(null); // State to store error messages, initially null.

  // Function to handle form submission.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior which would reload the page.

    try {
      // Call the API service function to create a new therapist record with the current state values.
      await createTherapist({ name, specialization });
      // Call the onRefresh callback to update the parent component or refresh data after submission.
      await onRefresh();
      // Clear the form fields after successful submission.
      setName('');
      setSpecialization('');
      // Clear any previous error messages.
      setError(null);
    } catch (err) {
      // Handle any errors that occur during the API call or form submission.
      setError('Failed to create therapist.'); // Set an error message to be displayed.
    }
  };

  // Render the form component with controlled input fields and error handling.
  return (
    <Container className="my-4"> {/* Container for layout with vertical margin for spacing. */}
      <h2>Add Therapist</h2> {/* Heading for the form. */}
      {error && <Alert variant="danger">{error}</Alert>} {/* Display an error message if there is one. */}
      <Form onSubmit={handleSubmit}> {/* Attach the handleSubmit function to the form's onSubmit event. */}
        <Form.Group controlId="formName"> {/* Group for the name input field. */}
          <Form.Label>Name</Form.Label> {/* Label for the name input. */}
          <Form.Control
            type="text" // Input type is "text" for the name field.
            value={name} // Controlled input value bound to the name state.
            onChange={(e) => setName(e.target.value)} // Update the name state on input change.
            required // Make the name input field required.
          />
        </Form.Group>
        <Form.Group controlId="formSpecialization"> {/* Group for the specialization input field. */}
          <Form.Label>Specialization</Form.Label> {/* Label for the specialization input. */}
          <Form.Control
            type="text" // Input type is "text" for the specialization field.
            value={specialization} // Controlled input value bound to the specialization state.
            onChange={(e) => setSpecialization(e.target.value)} // Update the specialization state on input change.
            required // Make the specialization input field required.
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3"> {/* Success variant button for form submission. */}
          Add Therapist
        </Button>
      </Form>
    </Container>
  );
};

// Export the TherapistForm component for use in other parts of the application.
export default TherapistForm;
