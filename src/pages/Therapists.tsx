// src/pages/Therapists.tsx
import React, { useEffect, useState } from 'react'; // Import React and hooks for state and lifecycle management
import { Container, ListGroup, Button } from 'react-bootstrap'; // Import Bootstrap components for styling and layout
import TherapistForm from '../components/TherapistForm'; // Import the form component for adding new therapists
import { getTherapists, deleteTherapist } from '../services/api'; // Import API functions to fetch and delete therapists

const Therapists: React.FC = () => {
  // State to hold the list of therapists
  const [therapists, setTherapists] = useState<any[]>([]); // Initial state is an empty array

  // Function to fetch the therapists from the API and update the state
  const handleRefresh = async () => {
    try {
      const data = await getTherapists(); // Call API to get therapists
      setTherapists(data); // Update state with the fetched data
    } catch (error) {
      console.error('Failed to fetch therapists:', error); // Log an error if the fetch fails
    }
  };

  // useEffect hook to fetch therapists when the component mounts
  useEffect(() => {
    handleRefresh(); // Fetch therapists when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle the deletion of a therapist
  const handleDeleteTherapist = async (id: number) => {
    try {
      await deleteTherapist(id); // Call API to delete the therapist by ID
      setTherapists(therapists.filter(therapist => therapist.id !== id)); // Remove the deleted therapist from state
    } catch (error) {
      console.error('Failed to delete therapist:', error); // Log an error if deletion fails
    }
  };

  // Render the Therapists page
  return (
    <Container>
      <h1 className="text-success">Therapists</h1> {/* Page heading with a success color */}
      <TherapistForm onRefresh={handleRefresh} /> {/* Render the form for adding therapists and pass handleRefresh function */}
      <ListGroup>
        {/* Render the list of therapists */}
        {therapists.map((therapist) => (
          <ListGroup.Item key={therapist.id}>
            {/* Display therapist's name and specialization */}
            {therapist.name} - {therapist.specialization}
            <Button
              variant="danger" // Button style for danger (red color)
              onClick={() => handleDeleteTherapist(therapist.id)} // Call handleDeleteTherapist when button is clicked
              style={{ float: 'right' }} // Float the button to the right
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Therapists; // Export the Therapists component for use in other parts of the application
