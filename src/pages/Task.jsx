import { Link, Typography } from "@mui/material";
import React from "react";

const Task = () => {
  return (
    <div>
      Task display Page here
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
        href="/dashboard/createTask"
      >
        <Typography display={{ md: "inline-block", xs: "none" }}>
          Task
        </Typography>
      </Link>
    </div>
  );
};

export default Task;
