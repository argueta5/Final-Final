// src/pages/Appointments.tsx

// Import necessary modules and components from React and other libraries.
import React, { useEffect, useState } from 'react'; // React library for building user interfaces and managing component state.
import { Container } from 'react-bootstrap'; // Container component from React Bootstrap for layout and spacing.
import AppointmentForm from '../components/AppointmentForm'; // Import the AppointmentForm component for creating new appointments.
import AppointmentList from '../components/AppointmentList'; // Import the AppointmentList component for displaying existing appointments.
import { getAppointments } from '../services/api'; // Import the API service function to fetch appointments.

// Functional component definition for the Appointments page.
const Appointments: React.FC = () => {
  // State variable to store the list of appointments.
  const [appointments, setAppointments] = useState<any[]>([]); // State initialized with an empty array.

  // Function to handle refreshing the list of appointments.
  const handleRefresh = async () => {
    try {
      const data = await getAppointments(); // Fetch the list of appointments from the API.
      setAppointments(data); // Update the state with the fetched appointments.
    } catch (error) {
      console.error('Failed to fetch appointments:', error); // Log an error if fetching fails.
    }
  };

  // useEffect hook to fetch appointments when the component mounts.
  useEffect(() => {
    handleRefresh(); // Call handleRefresh to load appointments when the component is first rendered.
  }, []); // Empty dependency array ensures this effect runs only once after the initial render.

  // Render the Appointments page with the form and list of appointments.
  return (
    <Container> {/* Container for layout and responsive padding. */}
      <h1 className="text-success">Appointments</h1> {/* Page heading styled with a success color. */}
      <AppointmentForm onRefresh={handleRefresh} /> {/* Render the AppointmentForm component and pass handleRefresh as a prop. */}
      <AppointmentList appointments={appointments} onRefresh={handleRefresh} /> {/* Render the AppointmentList component with appointments data and refresh callback. */}
    </Container>
  );
};

// Export the Appointments component for use in other parts of the application.
export default Appointments;
