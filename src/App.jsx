import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { createMuiTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
const App = () => {
  const theme = createMuiTheme({
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
      </ThemeProvider>
    </>
  );
};

export default App;
