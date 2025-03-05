import { Box, Link } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"start"}
        padding={"0.5rem 4rem"}
        gap={"1rem"}
        alignItems={"center"}
        height={"50px"}
        width={"100%"}
        bgcolor={"#000"}
      >
        <Link underline="hover" sx={{ color: "#fff" }} href="/login">
          Login
        </Link>
        <Link underline="hover" sx={{ color: "#fff" }} href="/signup">
          Register
        </Link>

        <Link underline="hover" sx={{ color: "#fff" }} href="/signup">
          Logout
        </Link>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <h2>Hello World!</h2>
      </div>
    </>
  );
};

export default Home;
