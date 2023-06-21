import React, { useState } from "react";
import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Container,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Link,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Head from "next/head";

const Course = ({ student }) => {
  const router = useRouter();
  const { search } = router.query;
  const searchQuery = search || "";

  const [dialogOpen, setDialogOpen] = useState(false);
  const [shareQuery, setShareQuery] = useState(searchQuery);
  const [resourceType, setResourceType] = useState("");

  const courses = [
    {
      title: "MTH",
      description: "It is an introductory course in mathematics that covers topics in calculus and real analysis. It provides a foundation in concepts such as real numbers, convergence of sequences, limits, continuity, differentiation, and integration. The course aims to develop students' understanding of these fundamental mathematical principles and their applications in various fields.",
      resources: ["Lecture Notes", "Assignments", "PYQs"],
    },
    {
      title: "PHY",
      description: "It is an introductory course in electrodynamics for freshmen. It covers the basic principles of electricity and magnetism. Students will learn about electric charges and fields, electric potential and capacitance, electric current and circuits, magnetic fields and forces, electromagnetic induction and inductance, and alternating current circuits. The course provides a foundation for further study in electromagnetism and related areas of physics.",
      resources: ["Lecture Notes", "Assignments", "PYQs"],
    },
  ];

  const initialReviews = [
    {
      student: "Student A",
      comment: "no use course",
      approved: true,
    },
    {
      student: "Student B",
      comment: "is it necessary",
      approved: true,
    },
    {
      student: "Student C",
      comment: "The grading in the MTH course was fair, the workload was manageable with consistent effort, the difficulty level was moderate, the teaching style was effective with clear explanations and examples, and overall, I was satisfied with the course.",
      approved: true,
    },
    {
      student: "Student D",
      comment: "The grading in the MTH course was fair, the workload was manageable with consistent effort, the difficulty level was moderate, the teaching style was effective with clear explanations and examples, and overall, I was satisfied with the course.",
      approved: true,
    },
  ];

  const [reviewContent, setReviewContent] = useState("");
  const [reviews, setReviews] = useState(initialReviews);
  const [pendingReview, setPendingReview] = useState(null);

  const course = courses.find(
    (course) => course.title.toLowerCase() === searchQuery.toLowerCase()
  );

  const handleApprove = () => {
    // Logic to handle review approval
  };

  const handleSubmitReview = () => {
    if (reviewContent.trim() !== "") {
      const newReview = {
        student: student,
        comment: reviewContent,
        approved: false,
      };
      setPendingReview(newReview);
      setReviewContent("");
      handleApprove();
    }
  };

  const handleReviewChange = () => {
    if (reviewContent.trim() !== "") {
      const updatedReview = {
        ...pendingReview,
        comment: reviewContent,
      };
      setPendingReview(updatedReview);
      setReviewContent("");
      handleApprove();
    }
  };

  const renderReviews = (reviews) => {
    const approvedReviews = reviews.filter((review) => review.approved);
    return approvedReviews.map((review, index) => (
      <Card key={index} variant="outlined" sx={{ width: "100%", my: 1, mx: 0 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Review #{review.student}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            -- {review.comment}
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  const handleSubmit = () => {
    // Logic to handle resource submission
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleHome = () => {
    router.push('/home');
  };

  const handleSignIn = () => {
    router.push('/signin');
  };

  const handleGrading = () => {
    router.push(`/grading?grades=${searchQuery}`);
  };

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <ThemeProvider theme={createTheme()}>
      <Head>
        <title>Course</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Helper
          </Typography>
          <Fab color="primary" onClick={handleDialogOpen} sx={{ position: isMobile ? 'fixed' : 'static', bottom: isMobile ? 16 : 'auto', right: isMobile ? 16 : 'auto' }}>
            <AddIcon />
          </Fab>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          <Button color="inherit" onClick={handleSignIn}>SignIn</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "16px", display: "flex" }}>
        <CssBaseline />
        <div style={{ flex: 3 }}>
          <Card sx={{ marginBottom: "8px" }}>
            {course ? <CardHeader title={course.title} /> : <CardHeader title="I think you have typed" />}
            {course ? <CardContent>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography variant="subtitle1" component="span">
                    {course.description}
                  </Typography>
                </Grid>
                <Grid item>
                <Link href={`/grading?grades=${searchQuery}`} variant="body1" sx={{ marginLeft: "16px" }}>
                  Go to Grading
                </Link>
                </Grid>
              </Grid>
            </CardContent> :
              <CardContent>
                <Typography variant="subtitle1" component="span">
                  Not Available
                </Typography>
              </CardContent>}
          </Card>
          <Card>
            <CardHeader title="Resources:" />
            {course ? <CardContent>
              <Grid container direction="column">
                {course.resources.map((resource, index) => (
                  <Grid item key={index}>
                    <Typography variant="subtitle1" component="span">
                      {resource}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent> :
              <CardContent>
                <Typography variant="subtitle1" component="span">
                  Not Available
                </Typography>
              </CardContent>}
          </Card>
        </div>
        <div style={{ flex: 1 }}>
          <CardHeader
            title="Reviews"
            sx={{ textAlign: "center", marginBottom: "-20px" }}
          />
          <CardContent>
            <Grid container alignItems="center">
              <TextField
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                multiline
                rows={3}
                placeholder="Write your review..."
                fullWidth
                variant="outlined"
              />
              {pendingReview ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleReviewChange}
                  sx={{ marginTop: "4px" }}
                >
                  Change
                </Button>
              ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmitReview}
                    sx={{ marginTop: "4px" }}
                  >
                    Submit
                  </Button>
                )}
              {pendingReview && (
                <Card sx={{ marginTop: "16px", width: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Pending Review
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Student: {pendingReview.student}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Comment: {pendingReview.comment}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status: Pending moderation
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {renderReviews(reviews)}
            </Grid>
          </CardContent>
        </div>
      </Container>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Want to share</DialogTitle>
        <DialogContent>
          <TextField
            label="Course name"
            value={shareQuery}
            onChange={(e) => setShareQuery(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Resource type"
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default Course;
