import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";
import CreateTask from "./components/CreateTask";
import Task from "./pages/Task";

const Layout = () => {
  return (
    <Box
      display={"flex"}
      width={"100vw"}
      height={{ xs: "100%", sm: "100vh" }}
      minHeight={"100vh"}
      minWidth={"100vw"}
      overflow={{ md: "hidden" }}
    >
      <Sidebar />
      <Outlet />
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "createTask",
        element: <CreateTask />,
      },
      {
        path: "task",
        element: <Task />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
const App = () => {
  const theme = createTheme({
    typography: {
      h4: {
        fontFamily: ["Plus Jakarta Sans"].join(","),
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
