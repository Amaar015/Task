import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import yellow from "../assets/yellow.png";
import green from "../assets/green.png";
import red from "../assets/red.png";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "65%", xs: "70%" },
  bgcolor: "#ffffff",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: "3rem",
  borderRadius: "20px",
  maxHeight: "80vh",
  overflowY: "scroll",
  overflowX: "hidden",
};
const Modals = ({ HandleCLose, row }) => {
  return (
    <Box sx={modalStyle}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          fontSize={"24px"}
          fontWeight={600}
          color="#141522"
          sx={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Task Details
        </Typography>
        <CloseIcon
          onClick={HandleCLose}
          sx={{ cursor: "pointer", color: "#4C4E648A" }}
        />
      </Box>
      <Divider sx={{ margin: "1rem 0rem" }} />

      <Typography
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"Poppins"}
        color="#546FFF"
        margin={"2rem 0rem"}
      >
        {row.name}
      </Typography>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"1.5rem 0rem"}
        gap={{ sm: "0.5rem", xs: "1rem" }}
      >
        <Box
          width={"100px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Typography
            variant="p"
            color="#656F7D"
            fontSize={"14px"}
            fontWeight={400}
          >
            Due Date
          </Typography>
          <Typography
            variant="span"
            color="#000000"
            fontSize={"15px"}
            fontWeight={500}
          >
            {row.duedate}
          </Typography>
        </Box>
        <Box
          width={"140px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Typography
            variant="p"
            color="#656F7D"
            fontSize={"14px"}
            fontWeight={400}
          >
            Assignee
          </Typography>
          <Typography
            variant="span"
            color="#000000"
            fontSize={"15px"}
            fontWeight={500}
          >
            {row.assignee}
          </Typography>
        </Box>
        <Box
          width={"100px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Typography
            variant="p"
            color="#656F7D"
            fontSize={"14px"}
            fontWeight={400}
          >
            Priority
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            color="#000000"
            fontSize={"15px"}
            fontWeight={500}
          >
            <img
              src={
                row.priority === "Low"
                  ? yellow
                  : row.priority === "Normal"
                  ? green
                  : red
              }
              alt={`${row.priority} Priority`}
              width="16"
              height="16"
            />
            {row.priority}
          </Box>
        </Box>
        <Box
          width={"80px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Typography
            variant="p"
            color="#656F7D"
            fontSize={"14px"}
            fontWeight={400}
          >
            Status
          </Typography>
          <Box
            sx={{
              bgcolor:
                row.status === "Active"
                  ? "#75D653"
                  : row.status === "Closed"
                  ? "#F25353"
                  : "#FFB72B",
              padding: "0.3rem 0.8rem",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            {row.status}
          </Box>
        </Box>
        <Box
          width={"120px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <Typography
            variant="p"
            color="#656F7D"
            fontSize={"14px"}
            fontWeight={400}
          >
            Assigned by
          </Typography>
          <Typography
            variant="span"
            color="#000000"
            fontSize={"15px"}
            fontWeight={500}
          >
            {row.assignedBy}
          </Typography>
        </Box>
      </Box>
      <Box
        width={"100%"}
        border="1px solid #D7D7D7"
        borderRadius={"10px"}
        marginTop={"2rem"}
        marginLeft={"-1rem"}
        padding={"1rem 1rem 2rem 1rem"}
      >
        <Typography
          fontFamily={"Poppins"}
          color="#000000"
          fontSize={"14px"}
          fontWeight={500}
        >
          {row.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Modals;
