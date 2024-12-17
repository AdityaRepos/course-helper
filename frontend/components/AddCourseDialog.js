import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";

const AddCourseDialog = ({ open, onClose, onSubmit }) => {
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    code: "",
    credits: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(courseDetails);
    setCourseDetails({ name: "", code: "", credits: "", description: "", image: "" });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Course</DialogTitle>
      <DialogContent>
        <TextField name="name" label="Course Name" fullWidth margin="normal" onChange={handleChange} value={courseDetails.name} />
        <TextField name="code" label="Course Code" fullWidth margin="normal" onChange={handleChange} value={courseDetails.code} />
        <TextField name="credits" label="Credits" fullWidth margin="normal" onChange={handleChange} value={courseDetails.credits} />
        <TextField name="description" label="Description" fullWidth multiline rows={3} margin="normal" onChange={handleChange} value={courseDetails.description} />
        <TextField name="image" label="Image URL" fullWidth margin="normal" onChange={handleChange} value={courseDetails.image} />
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: "16px" }}>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseDialog;
