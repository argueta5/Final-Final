// src/components/PatientList.tsx

// Import necessary modules and components from React and other libraries.
import React from 'react'; // React library for building user interfaces.
import { ListGroup, Button, Container } from 'react-bootstrap'; // UI components from React Bootstrap for list and button styling.
import { deletePatient } from '../services/api'; // Import the API service function to delete a patient record.

// Define the type for each patient.
interface Patient {
  id: number; // Unique identifier for the patient.
  name: string; // Name of the patient.
}

// Define the type for the props that the PatientList component will receive.
interface PatientListProps {
  patients: Patient[]; // Array of patient objects to be displayed in the list.
  onRefresh: () => void; // Callback function to refresh data or update the parent component after deleting a patient.
}

// Functional component definition for PatientList.
const PatientList: React.FC<PatientListProps> = ({ patients, onRefresh }) => {
  // Function to handle patient deletion.
  const handleDelete = async (id: number) => {
    try {
      await deletePatient(id); // Call the API service function to delete the patient with the given ID.
      await onRefresh(); // Refresh data or update the parent component after successful deletion.
    } catch (error) {
      // Handle errors that occur during the deletion process.
      console.error('Failed to delete patient:', error);
    }
  };

  // Render the list of patients.
  return (
    <Container> {/* Container component from React Bootstrap for layout and responsive padding. */}
      <ListGroup> {/* ListGroup component from React Bootstrap to display a list of items. */}
        {patients.map(patient => (
          <ListGroup.Item key={patient.id} className="d-flex justify-content-between align-items-center">
            {/* ListGroup.Item for each patient, with flexbox classes for layout and alignment. */}
            {patient.name} {/* Display the name of the patient. */}
            <Button variant="danger" onClick={() => handleDelete(patient.id)}> {/* Danger variant button for deletion action. */}
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

// Export the PatientList component for use in other parts of the application.
export default PatientList;
