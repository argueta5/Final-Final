// src/App.tsx
import React from 'react'; // Import React to use JSX and component functionality
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components for routing
import Home from './pages/Home'; // Import the Home page component
import Appointments from './pages/Appointments'; // Import the Appointments page component
import Patients from './pages/Patients'; // Import the Patients page component
import Feedback from './pages/Feedback'; // Import the Feedback page component
import Therapists from './pages/Therapists'; // Import the Therapists page component
import Header from './components/Header'; // Import the Header component for the app's top navigation
import Footer from './components/Footer'; // Import the Footer component for the app's bottom section
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS for styling
import './styles/custom.css'; // Import custom CSS for additional styling

const App: React.FC = () => {
  return (
    <>
      <Header /> {/* Render the Header component at the top of the page */}
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Home />} /> {/* Route for the Home page */}
        <Route path="/appointments" element={<Appointments />} /> {/* Route for the Appointments page */}
        <Route path="/patients" element={<Patients />} /> {/* Route for the Patients page */}
        <Route path="/feedback" element={<Feedback />} /> {/* Route for the Feedback page */}
        <Route path="/therapists" element={<Therapists />} /> {/* Route for the Therapists page */}
      </Routes>
      <Footer /> {/* Render the Footer component at the bottom of the page */}
    </>
  );
};

export default App; // Export the App component to be used in other parts of the application
