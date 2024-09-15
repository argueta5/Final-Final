// src/pages/Patients.tsx

// Import necessary modules and components from React and React Bootstrap.
import React, { useEffect, useState } from 'react'; // React for creating components and managing state.
import { Container } from 'react-bootstrap'; // Container component from React Bootstrap for layout and styling.
import PatientForm from '../components/PatientForm'; // Import the PatientForm component for adding new patients.
import PatientList from '../components/PatientList'; // Import the PatientList component for displaying the list of patients.
import { getPatients } from '../services/api'; // Import the API service function to fetch patients' data.

// Define the Patients functional component.
const Patients: React.FC = () => {
  // State to hold the list of patients. Initially set to an empty array.
  const [patients, setPatients] = useState<any[]>([]);

  // Function to fetch patients data and update the state.
  const handleRefresh = async () => {
    try {
      const data = await getPatients(); // Fetch data from the API.
      setPatients(data); // Update state with the fetched data.
    } catch (error) {
      console.error('Failed to fetch patients:', error); // Log errors if the fetch fails.
    }
  };

  // useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    handleRefresh(); // Call the handleRefresh function to load data on component mount.
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  // Render the Patients page.
  return (
    <Container> {/* Container component for responsive layout with padding. */}
      <h1 className="text-success">Patients</h1> {/* Page heading styled with Bootstrap class for text color. */}
      <PatientForm onRefresh={handleRefresh} /> {/* Render the PatientForm component with the handleRefresh function to refresh the list after adding a new patient. */}
      <PatientList patients={patients} onRefresh={handleRefresh} /> {/* Render the PatientList component, passing the patients data and handleRefresh function as props. */}
    </Container>
  );
};

// Export the Patients component for use in other parts of the application.
export default Patients;

