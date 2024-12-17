import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, Button, TextField } from "@mui/material";

const ViewCourseDialog = ({ open, onClose, course, onUpdate, onDelete }) => {
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    code: "",
    credits: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (course) {
      setCourseDetails({
        name: course.name,
        code: course.code,
        credits: course.credits,
        description: course.description,
        image: course.image,
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onUpdate(course.id, courseDetails);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Course Details</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <TextField fullWidth margin="normal" label="Course Name" name="name" value={courseDetails.name} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Course Code" name="code" value={courseDetails.code} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Credits" name="credits" type="number" value={courseDetails.credits} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Description" name="description" value={courseDetails.description} onChange={handleChange} multiline rows={3} />
          <TextField fullWidth margin="normal" label="Image URL" name="image" value={courseDetails.image} onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" style={{ margin: "8px" }}>
            Update
          </Button>
          <Button variant="contained" color="secondary" onClick={() => onDelete(course.id)} style={{ margin: "8px" }}>
            Delete
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ViewCourseDialog;
