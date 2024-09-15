// src/index.tsx
import React from 'react'; // Import React to use JSX
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering React components to the DOM
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for handling routing
import App from './App'; // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import './styles/custom.css'; // Import custom CSS for additional or overriding styles

// Render the React application
ReactDOM.render(
  <Router> {/* Provide routing context to the app */}
    <App /> {/* Render the main App component */}
  </Router>,
  document.getElementById('root') // Target the root element in the HTML to mount the React app
);
