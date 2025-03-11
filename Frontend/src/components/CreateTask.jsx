import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Components";
import yellow from "./../assets/yellow.png";
import green from "./../assets/green.png";
import red from "./../assets/red.png";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ExistingTask } from "../data.js";
const CreateTask = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    duedate: dayjs(),
    priority: "",
    status: "",
    assignee: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    duedate: "",
    priority: "",
    status: "",
    assignee: "",
    description: "",
  });

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/dashboard/createTask");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    if (name === "name") {
      if (!/^.{3,}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          name: "Title Should be more than 3 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
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
    if (name === "due_date") {
      setErrors((prev) => ({
        ...prev,
        duedate: value ? "" : "Due date is required",
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (
      !formData.name ||
      !formData.assignee ||
      !formData.description ||
      !formData.duedate ||
      !formData.priority ||
      !formData.status ||
      errors.name ||
      errors.assignee ||
      errors.description ||
      errors.duedate ||
      errors.priority ||
      errors.status
    ) {
      toast.error("Something went wrong");
      return;
    }

    const existingTasks =
      JSON.parse(localStorage.getItem("tasks")) || ExistingTask;
    const updatedTasks = [...existingTasks, formData];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    navigate("/dashboard/task");
    toast.success("Task Created Successfully");
  };

  return (
    <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
      <Navbar title={"Create New Task"} />
      <Box
        sx={{
          bgcolor: { sm: "#F5F5F7", xs: "#ffffff" },
          flexGrow: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:{ sm: "1rem 2rem", xs: "1rem" },
        
        }}
      >
        <Box
          height="80vh" // Set a fixed height or use maxHeight
          width="100%"
          bgcolor="#fff"
          component="form"
          padding={{ sm: "1rem 2rem", xs: "1" }}
          overflow="auto" // Enables scrolling when content overflows
          onSubmit={handleSubmit}
        >
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              // marginTop={"-1rem"}
              flexDirection={"column"}
            >
              <p>Title</p>
              <TextField
                label="Title"
                size="small"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Box>
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              // marginTop={"0.4rem"}
            >
              <p style={{ marginBottom: "0.2rem" }}>Due Date</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    sx={{
                      width: "100%",
                    }}
                    minDate={dayjs().startOf("year")} // Disables past years
                    shouldDisableDate={(date) => {
                      return dayjs(date).isBefore(dayjs(), "day"); // Disable past dates
                    }}
                    name="due_date"
                    value={formData.duedate}
                    onChange={(date) => {
                      setFormData({ ...formData, duedate: date });
                    }}
                    // disableOpenPicker
                    slotProps={{
                      textField: {
                        size: "small",
                        readOnly: true,
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>

            {/* Priority Dropdown */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              marginTop={"-1rem"}
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
                {errors.priority && (
                  <Typography color="error" fontSize="12px" mt="4px">
                    {errors.priority}
                  </Typography>
                )}
              </FormControl>
            </Box>
            {/* Status Dropdown */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              marginTop={"-1rem"}
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
                {errors.status && (
                  <Typography color="error" fontSize="12px" mt="4px">
                    {errors.status}
                  </Typography>
                )}
              </FormControl>
            </Box>
            {/* Assignee Dropdown */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              marginTop={"-1rem"}
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
                {errors.assignee && (
                  <Typography color="error" fontSize="12px" mt="4px">
                    {errors.assignee}
                  </Typography>
                )}
              </FormControl>
            </Box>
            {/* Description */}
            <Box
              width={{ md: "45%", xs: "100%" }}
              padding={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              marginTop={"-1rem"}
            >
              <p>Description</p>
              <TextField
                label="Enter description"
                size="small"
                fullWidth
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"end"}
            margin={{
              lg: "6rem 1rem 0rem 0rem",
              md: "3rem 1rem 0rem 0rem",
              xs: "2rem 0rem 0rem 0rem",
            }}
          >
            <Button
              type="submit"
              sx={{
                textTransform: "capitalize",
                borderRadius: "10px",
                padding: "0.5rem 3rem",
                width: { xs: "100%", md: "auto" },
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
  );
};

export default CreateTask;
