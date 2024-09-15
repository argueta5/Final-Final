// src/pages/Feedback.tsx
import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import FeedbackForm from '../components/FeedbackForm';
import { getFeedback, deleteFeedback } from '../services/api';

const Feedback: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<any[]>([]);

  const handleRefresh = async () => {
    try {
      const data = await getFeedback();
      setFeedbackList(data);
    } catch (error) {
      console.error('Failed to fetch feedback:', error);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleDeleteFeedback = async (id: number) => {
    try {
      await deleteFeedback(id);
      setFeedbackList(feedbackList.filter(fb => fb.id !== id));
    } catch (error) {
      console.error('Failed to delete feedback:', error);
    }
  };

  return (
    <Container>
      <h1 className="text-success">Feedback</h1>
      <FeedbackForm onRefresh={handleRefresh} />
      <ListGroup>
        {feedbackList.map((feedback) => (
          <ListGroup.Item key={feedback.id}>
            <p>{feedback.feedback}</p>
            <Button 
              variant="danger" 
              onClick={() => handleDeleteFeedback(feedback.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Feedback;
