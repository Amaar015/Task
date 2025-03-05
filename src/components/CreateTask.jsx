import {
  Box,
  Button,
  FormControl,
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

const CreateTask = () => {
  const [priority, setPriority] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    due_data: "",
    priority: "",
    status: "",
    assignee: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    due_data: "",
    priority: "",
    status: "",
    assignee: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    if (name === "title") {
      if (!/^.{3,}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          title: "Title Should be more than 3 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, title: "" }));
      }
    }
    if (name === "description") {
      setErrors((prev) => ({
        ...prev,
        description: value.trim() === "" ? "Description is required" : "",
      }));
    }
    if (name === "priority") {
      setErrors((prev) => ({
        ...prev,
        priority: value ? "" : "This field is required",
      }));
    }
    if (name === "assignee") {
      setErrors((prev) => ({
        ...prev,
        assignee: value ? "" : "This field is required",
      }));
    }
    if (name === "status") {
      setErrors((prev) => ({
        ...prev,
        status: value ? "" : "This field is required",
      }));
    }
    if (name === "dueDate") {
      setErrors((prev) => ({
        ...prev,
        description: value ? "" : "Description is required",
      }));
    }
  };
  const handleSubmit = () => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Box
      flexGrow={1}
      width={{ xs: "100%" }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Navbar title={"Create New Task"} />
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
          height={{ sm: "90%", xs: "100%" }}
          bgcolor={"#fff"}
          // padding={{ xs: "1rem 0rem", sm: "0rem 0rem" }}
        >
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"center"}
            padding={{ sm: "0rem 2rem", xs: "0rem 0rem" }}
          >
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Title</p>
              <TextField
                label="Title"
                size="small"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Box>
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Due Date</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="dueDate"
                  onChange={handleChange}
                  value={formData.due_data}
                  label="Select"
                  slotProps={{
                    textField: {
                      size: "small",
                      sx: { width: "100%" },
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
            {/* Priority Dropdown */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Priority</p>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="priority-label" sx={{ marginTop: "-0.5rem" }}>
                  Select
                </InputLabel>
                <Select
                  labelId="priority-label"
                  id="priority-select"
                  value={formData.priority}
                  name="priority"
                  size="small"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Priority</em>
                  </MenuItem>
                  <MenuItem value="Low">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <img
                        src={yellow}
                        alt="Low Priority"
                        width="16"
                        height="16"
                      />
                      Low
                    </Box>
                  </MenuItem>
                  <MenuItem value="Normal">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <img
                        src={green}
                        alt="Normal Priority"
                        width="16"
                        height="16"
                      />
                      Normal
                    </Box>
                  </MenuItem>
                  <MenuItem value="High">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <img
                        src={red}
                        alt="High Priority"
                        width="16"
                        height="16"
                      />
                      High
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Status Dropdown */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Status</p>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="status-label" sx={{ marginTop: "-0.5rem" }}>
                  Select Status
                </InputLabel>
                <Select
                  labelId="status-label"
                  id="status-select"
                  value={formData.status}
                  name="status"
                  size="small"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Select Status</em>
                  </MenuItem>
                  <MenuItem value="Pending">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          bgcolor: "#FFB72A",
                        }}
                      />
                      Pending
                    </Box>
                  </MenuItem>
                  <MenuItem value="Active">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          bgcolor: "#74D453",
                        }}
                      />
                      Active
                    </Box>
                  </MenuItem>
                  <MenuItem value="Closed">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          bgcolor: "#F25353",
                        }}
                      />
                      Closed
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Assignee Dropdown */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Assignee</p>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="assignee-label" sx={{ marginTop: "-0.5rem" }}>
                  Select
                </InputLabel>
                <Select
                  labelId="assignee-label"
                  id="assignee-select"
                  value={formData.assignee}
                  name="assignee"
                  size="small"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Assignee</em>
                  </MenuItem>
                  <MenuItem value="Syed Muqarrab">Syed Muqarrab</MenuItem>
                  <MenuItem value="Saud Haris">Saud Haris</MenuItem>
                  <MenuItem value="Saeed">Saeed</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Description */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
            >
              <p>Description</p>
              <TextField
                label="Enter description"
                size="small"
                fullWidth
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                margin: {
                  xs: "1rem 0rem 0rem 0rem",
                  md: "5rem 4rem 0rem 0rem",
                },
              }}
            >
              <Button
                type="submit"
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
              >
                Create Task
              </Button>
            </Box>
          </Box>
          {/* Create Task Button */}
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTask;
