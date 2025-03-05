import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FaBookOpen } from "react-icons/fa6";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Logo = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      alignItems={"center"}
      gap={"16px"}
      justifyContent={"center"}
    >
      <FaBookOpen
        style={{
          width: "24px",
          height: "24px",
          color: "#fff",
          padding: "0.4rem",
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
        fontFamily={"Plus Jakarta Sans"}
        display={{ md: "inline-block", xs: "none" }}
      >
        Taska
      </Typography>
    </Box>
  );
};

export const Navbar = ({ title }) => {
  const [isVisible, setIsVisible] = useState(window.innerWidth <= 600); // Set initial state correctly
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 600); // Check width exactly at 600px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to ensure the state is correct on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logout Successfully!");
  };

  return (
    <Box
      width={"100%"}
      padding={"1rem 0rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {isVisible && (
        <FaBookOpen
          style={{
            width: "24px",
            height: "24px",
            color: "#fff",
            padding: "0.4rem",
            background: "#546fff",
            borderRadius: "10px",
            marginLeft: "1.5rem",
          }}
        />
      )}
      <Typography
        variant="h4"
        fontSize={"32px"}
        fontWeight={"600"}
        color="#141522"
        textAlign={"center"}
        fontFamily={"Plus Jakarta Sans"}
        display={{ sm: "none", xs: "inline-block" }}
      >
        Taska
      </Typography>
      <Box
        margin={{ sm: "0 2rem 0 0", xs: "0 1.5rem 0rem 0rem" }}
        display={"flex"}
        alignItems={"center"}
        gap={"0.5rem"}
      >
        <MenuIcon style={{ cursor: "pointer" }} />
        <Typography
          fontSize={"24px"}
          fontWeight={"600"}
          fontFamily={"Plus Jakarta Sans"}
          variant="p"
          display={{ sm: "inline-block", xs: "none" }}
        >
          {title}
        </Typography>
      </Box>
      <Box marginRight={"4rem"} display={{ sm: "inline-block", xs: "none" }}>
        <Buttons title={"Log Out"} padding={"0.5rem 1.5rem"} methods={logout} />
      </Box>
    </Box>
  );
};

export const Buttons = ({ title, padding, width, methods }) => {
  return (
    <Button
      onClick={methods}
      sx={{
        textTransform: "capitalize",
        borderRadius: "10px",
        padding: `${padding}`,
        width: { xs: `${width}`, sm: "auto" },
        fontSize: "15px",
        fontFamily: "Poppins",
        background: "#546FFF",
        color: "#fff",
      }}
    >
      {title}
    </Button>
  );
};
