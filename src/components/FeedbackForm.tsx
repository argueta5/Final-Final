// src/components/FeedbackForm.tsx
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { submitFeedback } from '../services/api'; // Updated import

interface FeedbackFormProps {
  onRefresh: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onRefresh }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitFeedback({ feedback });
      await onRefresh();
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFeedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Feedback
      </Button>
    </Form>
  );
};

export default FeedbackForm;
