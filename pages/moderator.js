import React, { useState } from 'react';
import { Card, CardContent, Button, Grid, Typography } from '@mui/material';

const ModeratorPage = () => {
  const [reviews, setReviews] = useState([
    {
      student: 'John Doe',
      comment: 'is it necessary',
      approved: true,
    },
    {
      student: 'Jane Smith',
      comment: 'no use course',
      approved: false,
    },
  ]);

  const handleApproval = (index) => {
    setReviews((prevReviews) => {
      const updatedReviews = [...prevReviews];
      updatedReviews[index].approved = !updatedReviews[index].approved;
      return updatedReviews;
    });
  };
   

  const sortedReviews = [...reviews].sort((a, b) =>
    a.approved === b.approved ? 0 : a.approved ? 1 : -1
  );

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Reviews
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {sortedReviews.map((review, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{review.student}</Typography>
                <Typography variant="body1">{review.comment}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleApproval(index)}
                  sx={{ marginTop: '1rem' }}
                >
                  {review.approved ? 'Disapprove' : 'Approve'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ModeratorPage;
