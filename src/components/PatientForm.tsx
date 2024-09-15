// src/components/PatientForm.tsx

// Import necessary modules and components from React and other libraries.
import React, { useState } from 'react'; // React library for building components and managing state.
import { Button, Form } from 'react-bootstrap'; // UI components from React Bootstrap for form styling and functionality.
import { createPatient } from '../services/api'; // Import the API service function to create a new patient record.

// Functional component definition for PatientForm with typed props.
const PatientForm: React.FC<{ onRefresh: () => void }> = ({ onRefresh }) => {
  // State variables for managing form input.
  const [name, setName] = useState(''); // State to store the patient's name.
  const [age, setAge] = useState<number | "">(''); // State to store the patient's age. Initialized as an empty string.
  const [email, setEmail] = useState(''); // State to store the patient's email address.

  // Function to handle form submission.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior which would reload the page.

    // Convert the age state to a number, handling empty string as undefined.
    const ageNumber = age === '' ? undefined : Number(age);

    // Validate that all fields are filled in before proceeding.
    if (name && ageNumber !== undefined && email) {
      try {
        // Call the API service function to create a new patient record with the current state values.
        await createPatient({ name, age: ageNumber, email });
        // Call the onRefresh callback to update the parent component or refresh data after submission.
        await onRefresh();
        // Clear the form fields after successful submission.
        setName('');
        setAge('');
        setEmail('');
      } catch (error) {
        // Handle any errors that occur during the API call or form submission.
        console.error('Error creating patient:', error);
      }
    } else {
      // Log an error message if any required fields are missing.
      console.error('Invalid input');
    }
  };

  // Render the form component with controlled input fields.
  return (
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
      <Form.Group controlId="formAge"> {/* Group for the age input field. */}
        <Form.Label>Age</Form.Label> {/* Label for the age input. */}
        <Form.Control
          type="number" // Input type is "number" to accept numeric values for age.
          value={age} // Controlled input value bound to the age state.
          onChange={(e) => setAge(e.target.value ? Number(e.target.value) : '')} // Update the age state on input change, converting to number.
          required // Make the age input field required.
        />
      </Form.Group>
      <Form.Group controlId="formEmail"> {/* Group for the email input field. */}
        <Form.Label>Email</Form.Label> {/* Label for the email input. */}
        <Form.Control
          type="email" // Input type is "email" to validate email format.
          value={email} // Controlled input value bound to the email state.
          onChange={(e) => setEmail(e.target.value)} // Update the email state on input change.
          required // Make the email input field required.
        />
      </Form.Group>
      <Button variant="primary" type="submit"> {/* Primary button for form submission. */}
        Create Patient
      </Button>
    </Form>
  );
};

// Export the PatientForm component for use in other parts of the application.
export default PatientForm;
