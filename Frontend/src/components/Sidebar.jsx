import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { Logo } from "./Components";
import { PiBookOpenTextLight } from "react-icons/pi";
const Sidebar = () => {
  return (
    <Box
      component={"div"}
      display={{ sm: "flex", xs: "none" }}
      flexDirection={"column"}
      alignItems={"center"}
      width={{ md: "280px", xs: "60px" }}
      height={"100%"}
      gap={"0.5rem"}
    >
      <div style={{ padding:"1rem" }}>
        <Logo />
      </div>
      <Link
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ md: "normal", xs: "center" }}
        width={"60%"}
        padding={{ md: "0.7rem 1rem", xs: "0.7rem 0.4rem" }}
        color="#141522"
        gap={"0.8rem"}
        fontSize={"18px"}
        underline="none"
        borderRadius={"10px"}
        bgcolor="#F5F5F7"
        fontFamily={"Plus Jakarta Sans"}
        href="/dashboard/task"
        marginTop={'1rem'}
      >
        <PiBookOpenTextLight style={{ fontSize: "1.5rem" }} />
        <Typography display={{ md: "inline-block", xs: "none" }}>
          Task
        </Typography>
      </Link>
    </Box>
  );
};

export default Sidebar;
