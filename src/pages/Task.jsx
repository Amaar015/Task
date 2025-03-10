import { Box, Button, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Navbar } from "../components/Components";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/dashboard/task");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Box
      flexGrow={1}
      width={{ xs: "100%" }}
      height={{ sm: "100vh", xs: "100%" }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Navbar title={"Task"} />
      <Box
        sx={{
          bgcolor: { sm: "#F5F5F7", xs: "#fff" },
          flexGrow: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width={{ sm: "95%", xs: "100%" }}
          height={{ sm: "90%", xs: "100%" }}
          padding={"1rem"}
        >
          <Box
            display={"flex"}
            justifyContent={{ sm: "end", xs: "center" }}
            sx={{ marginTop: "1rem" }}
          >
            <Button
              sx={{
                textTransform: "capitalize",
                borderRadius: "10px",
                padding: "0.5rem 3rem",
                width: { xs: "100%", sm: "auto" },
                fontSize: "15px",
                fontFamily: "Poppins",
                background: "#546FFF",
                color: "#fff",
              }}
              onClick={() => navigate("/dashboard/createTask")}
            >
              Create Task
            </Button>
          </Box>

          {/* Table content */}
          <Table />
        </Box>
      </Box>
    </Box>
  );
};

export default Task;
