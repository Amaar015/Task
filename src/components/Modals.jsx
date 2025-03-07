import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "65%", xs: "80%" },
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
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
          sx={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Task Details
        </Typography>
        <CloseIcon onClick={HandleCLose} sx={{ cursor: "pointer" }} />
      </Box>
      <Divider sx={{ margin: "1rem 0rem" }} />

      <Typography
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"Poppins"}
        color="#546FFF"
      >
        {row.name}
      </Typography>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"1rem 0rem"}
        gap={{sm:"0.1rem", xs:"1rem"}}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography variant="p" color="#656F7D" fontSize={"12px"}>
            Due Date
          </Typography>
          <Typography
            variant="span"
            color="#000000"
            fontSize={"14px"}
            fontWeight={500}
          >
            {row.duedate}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography variant="p" color="#656F7D" fontSize={"12px"}>
            Assignee
          </Typography>
          <Typography
            variant="span"
            color="#000000"
            fontSize={"14px"}
            fontWeight={500}
          >
            {row.assignee}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography variant="p" color="#656F7D" fontSize={"12px"}>
            Priority
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            color="#000000"
            fontSize={"14px"}
            fontWeight={500}
          >
            <img src={row.image} alt="Low Priority" width="16" height="16" />
            {row.priority}
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography variant="p" color="#656F7D" fontSize={"12px"}>
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
              width: "50px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {row.status}
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography variant="p" color="#656F7D" fontSize={"12px"}>
            Assigned by
          </Typography>
          <Typography
            variant="span"
            color="#000000"
            fontSize={"14px"}
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
        padding={"0.8rem"}
      >
        <Typography color="#000000" fontSize={"14px"} fontWeight={500}>
          {row.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Modals;
