import React, { useState } from 'react';
import { Card, CardContent, Button, Grid, Typography, AppBar, Toolbar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from "next/head";

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

  const [resource, setResource] = useState([
    {
      student: 'John Doe',
      comment: 'link to course',
      approved: true,
    },
    {
      student: 'Jane Smith',
      comment: 'course file',
      approved: false,
    },
    {
      student: 'John Doe',
      comment: 'is it necessary',
      approved: true,
    },
    {
      student: 'Jane Smith',
      comment: 'course file',
      approved: false,
    },
  ]);

  const handleApproval = (index) => {
    setReviews((prevReviews) => {
      const updatedReviews = [...prevReviews];
      updatedReviews[index].approved = true;
      return updatedReviews;
    });
  };

  const disapprovedReviews = reviews.filter((review) => review.approved === false);

  return (
    <ThemeProvider theme={createTheme()}>
      <Head>
        <title>Admin</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Helper
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Typography variant="h4" align="center" gutterBottom>
        Reviews
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {disapprovedReviews.map((review, index) => (
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
                  approve
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default ModeratorPage;
