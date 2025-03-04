import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Example from "./components/Example";
import Example6 from "./components/Example6";
import Example2 from "./components/Example2";
import Example4 from "./components/Example4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example",
    element: <Example />,
  },
  {
    path: "/example6",
    element: <Example6 />,
  },
  {
    path: "/example2",
    element: <Example2 />,
  },
  {
    path: "/example4",
    element: <Example4 />,
  },
]);
const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
