import React from 'react';
import { useRouter } from 'next/router';
import { Chart } from 'react-google-charts';
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  Button,
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import Head from "next/head";

const GradingPage = () => {
  const router = useRouter();
  const { grades } = router.query;
  const gradesQuery = grades || "";

  // Dummy data
  const gradings = [
    {
      instructor: 'proff A',
      year: 2022,
      course: 'PHY',
      grades: { A: 17, B: 18, C: 10, D: 3, E: 1, F: 1 },
      totalStudents: 50,
    },
    {
      instructor: 'prof B',
      year: 2021,
      course: 'MTH',
      grades: { A: 10, B: 20, C: 15, D: 5, E: 0, F: 0 },
      totalStudents: 50,
    },
    {
      instructor: 'Prof C',
      year: 2021,
      course: 'PHY',
      grades: { A: 19, B: 21, C: 19, D: 5, E: 0, F: 0 },
      totalStudents: 64,
    },
    {
      instructor: 'Prof C',
      year: 2022,
      course: 'MTH',
      grades: { A: 10, B: 25, C: 15, D: 5, E: 0, F: 5 },
      totalStudents: 60,
    },
    {
      instructor: 'Proff D',
      year: 2020,
      course: 'PHY',
      grades: { A: 10, B: 20, C: 15, D: 5, E: 0, F: 0 },
      totalStudents: 50,
    },
    {
      instructor: 'Proff E',
      year: 2021,
      course: 'PHY',
      grades: { A: 8, B: 22, C: 15, D: 5, E: 3, F: 5 },
      totalStudents: 58,
    },
    {
      instructor: 'Proff F',
      year: 2021,
      course: 'PHY',
      grades: { A: 30, B: 22, C: 15, D: 5, E: 0, F: 0 },
      totalStudents: 78,
    },
    {
      instructor: 'Proff G',
      year: 2019,
      course: 'PHY',
      grades: { A: 10, B: 20, C: 15, D: 5, E: 0, F: 0 },
      totalStudents: 50,
    },
    {
      instructor: 'Proff H',
      year: 2013,
      course: 'Mth',
      grades: { A: 8, B: 22, C: 15, D: 5, E: 3, F: 5 },
      totalStudents: 58,
    },
    {
      instructor: 'Proff I',
      year: 2020,
      course: 'TA',
      grades: { A: 30, B: 22, C: 15, D: 5, E: 0, F: 0 },
      totalStudents: 78,
    },
    {
      instructor: 'Proff J',
      year: 2015,
      course: 'TA',
      grades: { A: 6, B: 20, C: 15, D: 5, E: 0, F: 0 },
      totalStudents: 46,
    },
  ];

  const handleHome = () => {
    router.push('/home');
  };

  const handleBack = () => {
    router.push(`/course?search=${gradesQuery}`);
  };

  // Filter the data based on the provided course name
  const filteredGradings = gradings
    .filter((grading) =>
      grading.course.toLowerCase().startsWith(gradesQuery.toLowerCase())
    )
    .sort((a, b) => b.year - a.year); // Sort in descending order of year

  return (
    <ThemeProvider theme={createTheme()}>
      <Head>
        <title>Course Helper</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Helper
          </Typography>
          <Button color="inherit" onClick={handleBack}>
            Back
          </Button>
          <Button color="inherit" onClick={handleHome}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          <span style={{ color: 'blue', textTransform: 'uppercase' }}>{gradesQuery}</span> Grading:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {filteredGradings.map((grading, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Card sx={{ padding: '4px', margin: '16px' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <Typography variant="h6" align="center">
                      {grading.course}
                    </Typography>
                    <Typography variant="body1" align="center">
                      Instructor: {grading.instructor}
                    </Typography>
                    <Typography variant="body1" align="center">
                      Year: {grading.year}
                    </Typography>
                    <Typography variant="body1" align="center">
                      Total Students: {grading.totalStudents}
                    </Typography>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Chart
                      chartType="PieChart"
                      width="100%"
                      height="200px"
                      data={[['Task', 'Count'], ...Object.entries(grading.grades)]}
                      options={{
                        title: 'Grades',
                        chartArea: { width: '70%' }, // Increase the radius by adjusting the chartArea
                        pieHole: 0.4,
                        is3D: false,
                      }}
                    />
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default GradingPage;
