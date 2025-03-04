import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  createMuiTheme,
  ThemeProvider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import bg from "../assets/login.png";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Password validation (min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle input change with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Validate email
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Validate password
    if (name === "password") {
      if (!passwordRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          password:
            "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, 1 number, and 1 special character",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("User not found! Authentication faild");
      return;
    }

    if (
      storedUser.email !== formData.email ||
      storedUser.password !== formData.password
    ) {
      setErrors("Invalid email or password");
      return;
    }

    // Save authenticated user in localStorage
    localStorage.setItem("authenticatedUser", JSON.stringify(storedUser));

    console.log("Login successful!");
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
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
          height: "440px",
          margin: "0rem 1.5rem",
          width: { sm: "400px", xs: "100%" },
          background: "#ffffff",
          boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "10px",
          padding: { sm: "3rem 4rem", xs: "3rem 1rem" },
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
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
            textAlign={"center"}
          >
            Taska
          </Typography>
        </Box>
        <Typography
          variant="p"
          fontSize={"24px"}
          fontWeight={600}
          color="#4C4E64DE"
          fontFamily={"Poppins"}
        >
          Welcome to Taska! 👋🏻
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <TextField
            required
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            fontFamily={"Poppins"}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </span>
          )}
          <TextField
            required
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.password}
            </span>
          )}
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            padding: "",
            background: "#666CFF",
            fontWeight: 600,
            fontSize: "15px",
            color: "#fff",
            height: "42px",
            fontFamily: "Poppins",
          }}
        >
          Login
        </Button>
        <Typography
          variant="p"
          fontSize={"14px"}
          fontWeight={"400"}
          textAlign={"center"}
          color=" #4C4E64DE"
          letterSpacing={"2px"}
          fontFamily={"Poppins"}
        >
          Don't have an account?{"  "}
          <Link
            to={"/sign-up"}
            style={{ color: " #666CFF", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
