import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa6";
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
import axios from "axios";
import { toast } from "react-toastify";
import { EndAdornment, LoginForm, Logo } from "../components/Components";

const Signup = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/dashboard/task");
    }
  }, [navigate]);
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
  const handleSubmit = async (e) => {
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

    setErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      toast.error("Something went wrong");
      return;
    }

    try {
      const register = await axios.post("/zetsol/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (register.data.success) {
        toast.success(register.data.message);
        navigate("/login");
      } else {
        toast.error(register.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong!");
      } else if (error.request) {
        toast.error("No response from server!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundColor: { xs: "#F7F7F9" },
        backgroundSize: { lg: "cover", xs: "contain" },
        backgroundPosition: "bottom", // Adjust for mobile
        backgroundRepeat: { xs: "no-repeat" },
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
          height: { sm: "85%", xs: "640px" },
          // margin: "0rem 1.5rem",
          width: { sm: "400px", xs: "270px" },
          background: "#ffffff",
          boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "10px",
          padding: { sm: "1.5rem 4rem", xs: "3rem 1rem" },
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          justifyContent: "center",
        }}
      >
        {/* Header Section */}
        <LoginForm />
        <Typography
          variant="p"
          fontSize={{ sm: "24px", xs: "20px" }}
          fontWeight={600}
          color="#4C4E64DE"
          fontFamily={"Poppins"}
          letterSpacing={{ sm: "1.5px", xs: "0px" }}
        >
          Welcome to Taska! 👋🏻
        </Typography>

        {/* Form Fields */}
        <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
          {/* Full Name */}
          <TextField
            type="text"
            label="Full Name"
            variant="outlined"
            required
            name="name"
            size="small"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />

          {/* Select Role */}
          <FormControl fullWidth variant="outlined" error={!!errors.role}>
            <InputLabel sx={{ marginTop: "-0.5rem" }}>Select Role</InputLabel>
            <Select
              value={formData.role}
              onChange={handleChange}
              label="Select Role"
              name="role"
              size="small"
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
            size="small"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          {/* Password */}
          <TextField
            required
            label="Password"
            type={visible ? "text" : "password"}
            variant="outlined"
            name="password"
            size="small"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <EndAdornment visible={visible} setVisible={setVisible} />
              ),
              inputProps: {
                autoComplete: "new-password", // Prevents browser auto-suggestions
                inputMode: "text", // Stops default password handling
              },
            }}
          />
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          disabled={
            Object.values(formData).some((value) => !value.trim()) ||
            Object.values(errors).some((error) => error)
          }
          sx={{
            background: "#666CFF",
            fontWeight: 600,
            fontSize: "15px",
            color: "#fff",
            height: "42px",
            fontFamily: "Poppins",
          }}
        >
          Sign up
        </Button>

        {/* Sign Up Link */}
        <Typography
          variant="p"
          fontSize={"14px"}
          fontWeight={"400"}
          textAlign={"center"}
          color=" #4C4E64DE"
          letterSpacing={"2px"}
          fontFamily={"Poppins"}
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
