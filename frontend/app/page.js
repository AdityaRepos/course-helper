"use client";
import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import AppBarComponent from "../components/AppBarComponent";
import CourseCard from "../components/CourseCard";
import AddCourseDialog from "../components/AddCourseDialog";
import ViewCourseDialog from "../components/ViewCourseDialog";

export default function LandingPage() {
  const initialCourses = [
    {
      id: 1,
      name: "Machine Learning",
      code: "CS771",
      description: "An advanced course on machine learning algorithms.",
      credits: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sXvAhlZ68GDr_LA9ho4jhOz7-8Mzp7d-pQ&s",
    },
    {
      id: 2,
      name: "Data Structures",
      code: "ESO207",
      description: "Learn about arrays, linked lists, trees, and more.",
      credits: 11,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVeLTyGkk6Cs7HbuWQEMJ8LNsc268Vg-LFw&s",
    },
    {
      id: 3,
      name: "Fluid Mechanics",
      code: "ME302",
      description: "Fundamentals of fluid mechanics and applications.",
      credits: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbIRenGR02WlXYPQAAOxRdKAhIhqcBfS3hQ&s",
    },
    {
      id: 4,
      name: "Introduction to Electronis",
      code: "ESO201",
      description: "Fundamentals of electrical circuits and applications.",
      credits: 14,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcABJGVYyzdY_jy_0oIFEocYC3HoS2nBV6w&s",
    },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleAddOpen = () => setOpenAddDialog(true);
  const handleAddClose = () => setOpenAddDialog(false);

  const handleViewCourse = (course) => setSelectedCourse(course);
  const handleCloseViewDialog = () => setSelectedCourse(null);

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
    setSelectedCourse(null);
  };

  const handleUpdateCourse = (id, updatedCourse) => {
    setCourses(courses.map((course) => (course.id === id ? updatedCourse : course)));
    setSelectedCourse(null);
  };

  return (
    <Box>
      <AppBarComponent title="Course Helper" />

      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <CourseCard course={course} onClick={() => handleViewCourse(course)} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddOpen}
        sx={{ position: "fixed", bottom: 16, left: 16 }}
      >
        Add Course
      </Button>

      <AddCourseDialog open={openAddDialog} onClose={handleAddClose} />

      {selectedCourse && (
        <ViewCourseDialog
          open={Boolean(selectedCourse)}
          course={selectedCourse}
          onClose={handleCloseViewDialog}
          onUpdate={handleUpdateCourse}
          onDelete={handleDeleteCourse}
        />
      )}
    </Box>
  );
}
