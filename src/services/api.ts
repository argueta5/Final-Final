// src/services/api.ts

// Define the base URL for the API.
const BASE_URL = 'http://localhost:3000';

// Define TypeScript interfaces to represent the structure of data for appointments, patients, therapists, and feedback.

// Interface for Appointment data.
interface Appointment {
  id?: number; // Optional ID, used for existing appointments.
  date: string; // Date of the appointment.
  time: string; // Time of the appointment.
  patientId: number; // ID of the patient for this appointment.
  therapistId: number; // ID of the therapist for this appointment.
}

// Interface for Patient data.
interface Patient {
  id?: number; // Optional ID, used for existing patients.
  name: string; // Name of the patient.
  age: number; // Age of the patient.
  email: string; // Email address of the patient.
}

// Interface for Therapist data.
interface Therapist {
  id?: number; // Optional ID, used for existing therapists.
  name: string; // Name of the therapist.
  specialization: string; // Specialization of the therapist.
}

// Interface for Feedback data.
interface Feedback {
  id?: number; // Optional ID, used for existing feedback.
  feedback: string; // Feedback text.
}

// Function to get all appointments from the server.
export const getAppointments = async (): Promise<Appointment[]> => {
  // Make a GET request to fetch appointments.
  const response = await fetch(`${BASE_URL}/appointments`);
  // Check if the response is not OK (status code outside of 200-299).
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to create a new appointment.
export const createAppointment = async (appointment: Appointment): Promise<Appointment> => {
  // Make a POST request to create a new appointment.
  const response = await fetch(`${BASE_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appointment), // Convert the appointment object to a JSON string.
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to delete an appointment by ID.
export const deleteAppointment = async (id: number): Promise<void> => {
  // Make a DELETE request to remove the appointment.
  const response = await fetch(`${BASE_URL}/appointments/${id}`, {
    method: 'DELETE',
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
};

// Function to get all patients from the server.
export const getPatients = async (): Promise<Patient[]> => {
  // Make a GET request to fetch patients.
  const response = await fetch(`${BASE_URL}/patients`);
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to create a new patient.
export const createPatient = async (patient: Patient): Promise<Patient> => {
  // Make a POST request to create a new patient.
  const response = await fetch(`${BASE_URL}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patient), // Convert the patient object to a JSON string.
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to delete a patient by ID.
export const deletePatient = async (id: number): Promise<void> => {
  // Make a DELETE request to remove the patient.
  const response = await fetch(`${BASE_URL}/patients/${id}`, {
    method: 'DELETE',
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
};

// Function to get all therapists from the server.
export const getTherapists = async (): Promise<Therapist[]> => {
  // Make a GET request to fetch therapists.
  const response = await fetch(`${BASE_URL}/therapists`);
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to create a new therapist.
export const createTherapist = async (therapist: Therapist): Promise<Therapist> => {
  // Make a POST request to create a new therapist.
  const response = await fetch(`${BASE_URL}/therapists`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(therapist), // Convert the therapist object to a JSON string.
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to delete a therapist by ID.
export const deleteTherapist = async (id: number): Promise<void> => {
  // Make a DELETE request to remove the therapist.
  const response = await fetch(`${BASE_URL}/therapists/${id}`, {
    method: 'DELETE',
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
};

// Function to get all feedback from the server.
export const getFeedback = async (): Promise<Feedback[]> => {
  // Make a GET request to fetch feedback.
  const response = await fetch(`${BASE_URL}/feedback`);
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to submit new feedback.
export const submitFeedback = async (feedback: Feedback): Promise<Feedback> => {
  // Make a POST request to submit feedback.
  const response = await fetch(`${BASE_URL}/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(feedback), // Convert the feedback object to a JSON string.
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
  // Parse and return the JSON response.
  return response.json();
};

// Function to delete feedback by ID.
export const deleteFeedback = async (id: number): Promise<void> => {
  // Make a DELETE request to remove the feedback.
  const response = await fetch(`${BASE_URL}/feedback/${id}`, {
    method: 'DELETE',
  });
  // Check if the response is not OK.
  if (!response.ok) throw new Error('Network response was not ok');
};
