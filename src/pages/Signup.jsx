import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import bg from "../assets/login.png";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "", // Single role selection
    email: "",
    password: "",
  });

  const rolesList = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "SQA",
  ];

  const [errors, setErrors] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Password validation regex (8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle input change with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Name validation
    if (name === "name") {
      setErrors((prev) => ({
        ...prev,
        name: value.trim() === "" ? "Name is required" : "",
      }));
    }

    // Role validation
    if (name === "role") {
      setErrors((prev) => ({
        ...prev,
        role: value ? "" : "Please select a role",
      }));
    }

    // Email validation
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      }));
    }

    // Password validation
    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: passwordRegex.test(value)
          ? ""
          : "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    // Role validation
    if (!formData.role) {
      validationErrors.role = "Role is required";
    }

    // Email validation
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character";
    }

    if (!localStorage.setItem("user", JSON.stringify(formData))) {
      alert("User Registered Successfully");
    }

    // If no errors, proceed with form submission
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom", // Adjust for mobile
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Prevents any unwanted scrolling issues
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          height: "500px",
          width: { sm: "450px", xs: "100%" },
          background: "#ffffff",
          boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "10px",
          padding: { sm: "2rem 4rem", xs: "3rem 1rem" },
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Header Section */}
        <Box
          display={"flex"}
          width={"100%"}
          alignItems={"center"}
          gap={"16px"}
          justifyContent={"center"}
        >
          <LocalLibraryIcon
            sx={{
              width: "30px",
              height: "30px",
              color: "#fff",
              padding: "0.2rem",
              background: "#546fff",
              borderRadius: "10px",
            }}
          />
          <Typography
            variant="h4"
            fontSize={"32px"}
            fontWeight={"600"}
            color="#141522"
          >
            Taska
          </Typography>
        </Box>
        <Typography
          variant="p"
          fontSize={"24px"}
          fontWeight={600}
          color="#4C4E64DE"
        >
          Welcome to Taska! 👋🏻
        </Typography>

        {/* Form Fields */}
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          {/* Full Name */}
          <TextField
            type="text"
            label="Full Name"
            variant="outlined"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />

          {/* Select Role */}
          <FormControl fullWidth variant="outlined" error={!!errors.role}>
            <InputLabel>Select Role</InputLabel>
            <Select
              value={formData.role}
              onChange={handleChange}
              label="Select Role"
              name="role"
            >
              <MenuItem value="">Select Role</MenuItem>
              {rolesList.map((role, index) => (
                <MenuItem key={index} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
            {errors.role && (
              <Typography color="error" fontSize="12px" mt="4px">
                {errors.role}
              </Typography>
            )}
          </FormControl>

          {/* Email */}
          <TextField
            required
            type="email"
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          {/* Password */}
          <TextField
            required
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "#666CFF",
            fontWeight: 600,
            fontSize: "15px",
            color: "#fff",
            height: "42px",
          }}
        >
          Register
        </Button>

        {/* Sign Up Link */}
        <Typography
          variant="p"
          fontSize={"14px"}
          fontWeight={"400"}
          textAlign={"center"}
          color=" #4C4E64DE"
          letterSpacing={"2px"}
        >
          Already have an account?{" "}
          <Link
            to={"/login"}
            style={{ color: " #666CFF", textDecoration: "none" }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
