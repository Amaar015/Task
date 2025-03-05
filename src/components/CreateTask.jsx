import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Navbar, Buttons } from "./Components";
import yellow from "./../assets/yellow.png";
import green from "./../assets/green.png";
import red from "./../assets/red.png";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CreateTask = () => {
  const [priority, setPriority] = useState("");
  const [assignee, setAsignee] = useState("");
  const [status, setStatus] = useState("");

  return (
    <Box
      flexGrow={1}
      width={{ xs: "100%" }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Navbar title={"Create New  Task"} />
      <Box
        sx={{
          bgcolor: "#F5F5F7",
          flexGrow: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          width={{ sm: "95%", xs: "100%" }}
          height={{ sm: "95%", xs: "100%" }}
          bgcolor={"#fff"}
          // padding={"1rem 0rem"}
        >
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"center"}
            padding={{ sm: "0rem 2rem", xs: "0rem 0.5rem" }}
          >
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              marginTop={{ sm: "1rem", xs: "0rem" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Title</p>
              <TextField label="Title" size="small" />
            </Box>
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              marginTop={{ sm: "1rem", xs: "-0.5rem" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Due Date</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select"
                  slotProps={{
                    textField: {
                      size: "small",
                      placeholder: "Select", // Custom Placeholder
                      sx: { width: "100%" }, // Custom size
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              marginTop={{ sm: "0rem", xs: "-0.5rem" }}
              flexDirection={"column"}
            >
              <p>Priority</p>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel
                  sx={{ marginTop: "-0.5rem" }}
                  id="demo-simple-select-helper-label"
                >
                  Select
                </InputLabel>

                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={priority}
                  label="Select"
                  size="small"
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <MenuItem value="">
                    <em>Priority</em>
                  </MenuItem>
                  <hr />
                  <MenuItem value={10}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        src={yellow}
                        alt=""
                        style={{ width: "1rem", height: "1rem" }}
                      />
                      <p>Low</p>
                    </Box>
                  </MenuItem>
                  <MenuItem value={20}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        src={green}
                        alt=""
                        style={{ width: "1rem", height: "1rem" }}
                      />
                      <p>Normal</p>
                    </Box>
                  </MenuItem>
                  <MenuItem value={30}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        src={red}
                        alt=""
                        style={{ width: "1rem", height: "1rem" }}
                      />
                      <p>High</p>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              marginTop={{ sm: "0rem", xs: "-0.5rem" }}
              flexDirection={"column"}
            >
              <p>Status</p>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel
                  sx={{ marginTop: "-0.5rem" }}
                  id="demo-simple-select-helper-label"
                >
                  Select Status
                </InputLabel>

                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={status}
                  label="Age"
                  size="small"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="">
                    <em>Select Status</em>
                  </MenuItem>
                  <hr />
                  <MenuItem value={10}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexDirection: "row",
                      }}
                    >
                      <Box
                        sx={{
                          width: "0.8rem",
                          height: "0.8rem",
                          borderRadius: "50%",
                          bgcolor: "#FFB72A",
                        }}
                      ></Box>
                      <p>Pending</p>
                    </Box>
                  </MenuItem>
                  <MenuItem value={20}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexDirection: "row",
                      }}
                    >
                      <Box
                        sx={{
                          width: "0.8rem",
                          height: "0.8rem",
                          borderRadius: "50%",
                          bgcolor: "#74D453",
                        }}
                      ></Box>
                      <p>Active</p>
                    </Box>
                  </MenuItem>
                  <MenuItem value={30}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        flexDirection: "row",
                      }}
                    >
                      <Box
                        sx={{
                          width: "0.8rem",
                          height: "0.8rem",
                          borderRadius: "50%",
                          bgcolor: "#F25353",
                        }}
                      ></Box>
                      <p>Closed</p>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              marginTop={{ sm: "0rem", xs: "-0.5rem" }}
              flexDirection={"column"}
            >
              <p>Assignee</p>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel
                  sx={{ marginTop: "-0.5rem" }}
                  id="demo-simple-select-helper-label"
                >
                  Select
                </InputLabel>

                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={assignee}
                  label="Age"
                  size="small"
                  onChange={(e) => setAsignee(e.target.value)}
                >
                  <MenuItem value="">
                    <em>Assignee</em>
                  </MenuItem>
                  <hr />
                  <MenuItem value={10}>Syed Muqarrab</MenuItem>
                  <MenuItem value={20}>Saud Haris</MenuItem>
                  <MenuItem value={30}>Saeed</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              marginTop={{ sm: "0rem", xs: "-0.5rem" }}
              flexDirection={"column"}
            >
              <p>Description</p>
              <TextField
                label="Lorem ipsum dolor sit amet"
                size="small"
                id="fullWidth"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "end" },
              width: "100%",
              margin: { xs: "1rem 0rem 0rem 0rem", md: "5rem 0rem 0rem -5rem" },
            }}
          >
            <Buttons
              title={"Create Task"}
              padding={"0.5rem 3rem"}
              width={"100%"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTask;
