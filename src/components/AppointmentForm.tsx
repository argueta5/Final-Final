// src/components/AppointmentForm.tsx

// Import necessary modules and components from React and other libraries.
import React, { useState } from 'react'; // React library and useState hook for managing state in the component.
import { Button, Form } from 'react-bootstrap'; // UI components from React Bootstrap for form and button styling.
import { createAppointment } from '../services/api'; // Import the API service function to create an appointment.

// Define the type for the props that the AppointmentForm component will receive.
interface AppointmentFormProps {
  onRefresh: () => void; // Callback function to refresh data after a new appointment is created.
}

// Functional component definition with typed props.
const AppointmentForm: React.FC<AppointmentFormProps> = ({ onRefresh }) => {
  // State variables for managing the form inputs.
  const [date, setDate] = useState(''); // State for storing the selected date.
  const [time, setTime] = useState(''); // State for storing the selected time.
  const [patientId, setPatientId] = useState<number | "">(''); // State for storing the patient ID.
  const [therapistId, setTherapistId] = useState<number | "">(''); // State for storing the therapist ID.

  // Function to handle form submission.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    try {
      // Call the API service function to create an appointment with the form data.
      await createAppointment({
        date,
        time,
        patientId: Number(patientId), // Convert patientId to a number before sending it to the API.
        therapistId: Number(therapistId) // Convert therapistId to a number before sending it to the API.
      });

      // Call the onRefresh callback to update the parent component or refresh data.
      await onRefresh();

      // Clear the form fields after successful submission.
      setDate('');
      setTime('');
      setPatientId('');
      setTherapistId('');
    } catch (error) {
      // Handle any errors that occur during the API call or form submission.
      console.error('Error creating appointment:', error);
    }
  };

  // Render the form component with controlled inputs.
  return (
    <Form onSubmit={handleSubmit}> {/* Attach the handleSubmit function to the form's onSubmit event. */}
      <Form.Group controlId="formDate"> {/* Group for the date input field. */}
        <Form.Label>Date</Form.Label> {/* Label for the date input. */}
        <Form.Control
          type="date" // Input type is "date" to allow date selection.
          value={date} // Controlled input value bound to the date state.
          onChange={(e) => setDate(e.target.value)} // Update the date state on change.
          required // Make the date input field required.
        />
      </Form.Group>
      <Form.Group controlId="formTime"> {/* Group for the time input field. */}
        <Form.Label>Time</Form.Label> {/* Label for the time input. */}
        <Form.Control
          type="time" // Input type is "time" to allow time selection.
          value={time} // Controlled input value bound to the time state.
          onChange={(e) => setTime(e.target.value)} // Update the time state on change.
          required // Make the time input field required.
        />
      </Form.Group>
      <Form.Group controlId="formPatientId"> {/* Group for the patient ID input field. */}
        <Form.Label>Patient ID</Form.Label> {/* Label for the patient ID input. */}
        <Form.Control
          type="number" // Input type is "number" to allow numeric input.
          value={patientId} // Controlled input value bound to the patientId state.
          onChange={(e) => setPatientId(e.target.value ? Number(e.target.value) : '')} // Update the patientId state, convert to number or reset to empty.
          required // Make the patient ID input field required.
        />
      </Form.Group>
      <Form.Group controlId="formTherapistId"> {/* Group for the therapist ID input field. */}
        <Form.Label>Therapist ID</Form.Label> {/* Label for the therapist ID input. */}
        <Form.Control
          type="number" // Input type is "number" to allow numeric input.
          value={therapistId} // Controlled input value bound to the therapistId state.
          onChange={(e) => setTherapistId(e.target.value ? Number(e.target.value) : '')} // Update the therapistId state, convert to number or reset to empty.
          required // Make the therapist ID input field required.
        />
      </Form.Group>
      <Button variant="primary" type="submit"> {/* Primary button for form submission. */}
        Create Appointment
      </Button>
    </Form>
  );
};

// Export the AppointmentForm component for use in other parts of the application.
export default AppointmentForm;
