import { Box, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Buttons, Logo } from "./Components";
import { PiBookOpenTextLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [navbarState, setNavbarState] = useState(
    JSON.parse(localStorage.getItem("navbarState")) || false
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedState = JSON.parse(localStorage.getItem("navbarState"));
      setNavbarState(updatedState);
    };

    const handleResize = () => {
      setScreenSize(window.innerWidth);
      setNavbarState(false);
    };

    window.addEventListener("navbarStateChange", handleStorageChange);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("navbarStateChange", handleStorageChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logout Successfully!");
  };
  return (
    <Box
      component={"div"}
      position={screenSize < 600 ? "absolute" : "relative"}
      display={
        screenSize < 600 && navbarState
          ? "flex"
          : navbarState
          ? "none"
          : { sm: "flex", xs: "none" }
      }
      flexDirection={"column"}
      alignItems={"center"}
      width={{ md: "280px", xs: "200px" }}
      height={"100%"}
      gap={"0.5rem"}
      bgcolor={screenSize < 600 ? "#fff" : "none"}
      boxShadow={
        screenSize < 600 ? " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;" : "none"
      }
      zIndex={{ md: 0, xs: 99 }}
    >
      <div style={{ padding: "1rem" }}>
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
        marginTop={"1rem"}
      >
        <PiBookOpenTextLight style={{ fontSize: "1.5rem" }} />
        <Typography
          display={{ md: "inline-block", sm: "none", xs: "inline-block" }}
        >
          Task
        </Typography>
      </Link>
      <Box display={{ sm: "none", xs: "inline-block" }} marginTop={"1rem"}>
        <Buttons title={"Log Out"} padding={"0.5rem 2rem"} methods={logout} />
      </Box>
    </Box>
  );
};

export default Sidebar;
