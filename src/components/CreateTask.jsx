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
const CreateTask = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    due_date: dayjs(),
    priority: "",
    status: "",
    assignee: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    due_date: "",
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
    if (name === "due_date") {
      setErrors((prev) => ({
        ...prev,
        due_date: value ? "" : "Due date is required",
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
      !formData.title ||
      !formData.assignee ||
      !formData.description ||
      !formData.due_date ||
      !formData.priority ||
      !formData.status ||
      errors.title ||
      errors.assignee ||
      errors.description ||
      errors.due_date ||
      errors.priority ||
      errors.status
    ) {
      toast.error("Something went wrong");
      return;
    }

    console.log(formData);
    navigate("/dashboard/task");
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
          <Box component={"form"} onSubmit={handleSubmit}>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              alignItems={"center"}
              padding={{ sm: "0rem 2rem", xs: "0rem 0rem" }}
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
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  error={!!errors.title}
                  helperText={errors.title}
                />
              </Box>
              <Box
                width={{ md: "45%", xs: "100%" }}
                padding={"1rem"}
                display={"flex"}
                flexDirection={"column"}
                marginTop={"0.4rem"}
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
                      value={formData.due_date}
                      onChange={(date) => {
                        setFormData({ ...formData, due_date: date });
                      }}
                      slotProps={{
                        textField: {
                          size: "small",
                        },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                {errors.title && (
                  <Typography color="error" fontSize="12px" mt="4px">
                    This field is required
                  </Typography>
                )}
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
              sx={{
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
