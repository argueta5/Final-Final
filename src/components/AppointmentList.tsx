// src/components/AppointmentList.tsx

// Import necessary modules and components from React and other libraries.
import React from 'react'; // React library for building user interfaces.
import { ListGroup, Button, Container } from 'react-bootstrap'; // UI components from React Bootstrap for list and button styling.
import { deleteAppointment } from '../services/api'; // Import the API service function to delete an appointment.

// Define the type for individual appointments.
interface Appointment {
  id: number; // Unique identifier for the appointment.
  date: string; // Date of the appointment.
  time: string; // Time of the appointment.
  patientId: number; // ID of the patient associated with the appointment.
  therapistId: number; // ID of the therapist associated with the appointment.
}

// Define the type for the props that the AppointmentList component will receive.
interface AppointmentListProps {
  appointments: Appointment[]; // Array of appointments to be displayed.
  onRefresh: () => Promise<void>; // Callback function to refresh the list of appointments after an operation (like deletion).
}

// Functional component definition with typed props.
const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, onRefresh }) => {
  // Function to handle the deletion of an appointment.
  const handleDelete = async (id: number) => {
    try {
      // Call the API service function to delete the appointment by ID.
      await deleteAppointment(id);
      // Call the onRefresh callback to update the appointment list after deletion.
      await onRefresh();
    } catch (err) {
      // Handle any errors that occur during the delete operation.
      console.error('Failed to delete appointment.', err);
    }
  };

  // Render the list of appointments.
  return (
    <Container className="my-4"> {/* Container with margin for styling. */}
      <h2>Appointment List</h2> {/* Header for the appointment list section. */}
      <ListGroup> {/* List group component to display appointments. */}
        {appointments.map((appointment) => (
          // Render each appointment in a ListGroup.Item.
          <ListGroup.Item key={appointment.id}>
            <div>
              <strong>Date:</strong> {appointment.date} <br />
              <strong>Time:</strong> {appointment.time} <br />
              <strong>Patient ID:</strong> {appointment.patientId} <br />
              <strong>Therapist ID:</strong> {appointment.therapistId}
              {/* Button to delete the appointment, positioned at the end of the list item. */}
              <Button 
                variant="danger" // Button variant for a red "danger" style.
                onClick={() => handleDelete(appointment.id)} // Handle delete on button click.
                className="float-end" // Float button to the end (right side) of the list item.
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

// Export the AppointmentList component for use in other parts of the application.
export default AppointmentList;
