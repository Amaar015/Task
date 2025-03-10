import { Box, Link } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signup");
  }, []);
  return <></>;
};

export default Home;
