import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import yellow from "../assets/yellow.png";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: 4,
};
const Modals = () => {
  return (
    <Box sx={modalStyle}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant={{ md: "h4", sm: "h5" }}>Task Details</Typography>
        <CloseIcon />
      </Box>
      <Divider sx={{ margin: "1rem 0rem" }} />
      <Typography
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"Poppins"}
        color="#546FFF"
      >
        Create Mobile App
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"1rem 0rem"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Typography variant="p">Due Date</Typography>
          <Typography variant="span">24 jan 2025</Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Typography variant="p">Assignee</Typography>
          <Typography variant="span">Saud Shaikh</Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Typography variant="p">Priority</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <img src={yellow} alt="Low Priority" width="16" height="16" />
            Low
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Typography variant="p">Status</Typography>
          <Box
            sx={{
              bgcolor: "#FFB72B",
              // row.status === "Active"
              //   ? "#75D653"
              //   : row.status === "Closed"
              //   ? "#F25353"
              //   : "#FFB72B",
              padding: "0.3rem 0.8rem",
              borderRadius: "4px",
              width: "50px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Pending
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Typography variant="p">Assigned by</Typography>
          <Typography variant="span">Majid Alee</Typography>
        </Box>
      </Box>
      <Box width={"90%"} border="1px solid #333" margin={'1rem'}>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          tempora perferendis, provident placeat eius eos, iusto accusamus sequi
          et aut corrupti expedita iste! Possimus odit quidem odio repudiandae
          natus. Similique. Inventore corrupti, aliquam consequatur laborum
          fugit quasi incidunt blanditiis vel totam, delectus maiores molestias
          tempore nisi eveniet illum voluptatibus. Sunt minus, atque corporis
          voluptas facere aliquam quisquam tenetur ducimus facilis? Placeat
          beatae, fugit aliquid sint, mollitia rem quod veniam voluptatem iste,
          aperiam rerum ratione. Itaque ea sed assumenda, ratione dolore,
          molestiae voluptatibus repellat minus, ut totam tenetur architecto quo
          ab! Repudiandae ab veritatis autem temporibus aperiam nostrum
          molestias omnis adipisci vero accusantium architecto nulla, a iure
          voluptates sed, exercitationem eveniet. Cumque hic, a saepe maiores
          cupiditate optio perspiciatis nesciunt sed?
        </Typography>
      </Box>
    </Box>
  );
};

export default Modals;
