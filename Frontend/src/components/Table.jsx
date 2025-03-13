import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { task } from "../data";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import { FiTrash2 } from "react-icons/fi";
import { Box, Modal, Divider, Menu, MenuItem } from "@mui/material";
import Modals from "./Modals";
import yellow from "../assets/yellow.png";
import green from "../assets/green.png";
import red from "../assets/red.png";
import dayjs from "dayjs";
import { ExistingTask } from "../data";
import axios from "axios";
import { toast } from "react-toastify";

export default function AccessibleTable() {
  //   menu
  const [task, setTask] = React.useState();
  const [selectedRow, setSelectedRow] = React.useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // Slice the data based on pagination
  const paginatedRows = task?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  //    Modal
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  React.useEffect(() => {
    const getTask = async () => {
      try {
        const userid = JSON.parse(localStorage.getItem("user"))?.userId;
        const tasks = await axios.get(
          `/zetsol/task/get-tasks?assignedBy=${userid}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setTask(tasks.data.task);
        console.log(tasks.data.task);
      } catch (error) {}
    };
    getTask();
  }, []);

  const deleteTask = async (id) => {
    try {
      const deleted = await axios.delete(`/zetsol/task/delete-task/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (deleted.data.success) {
        toast.success("Task deleted");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "1rem",
        width: "100%", // Always full width on all devices
      }}
    >
      <Table
        // size="small"
        sx={{
          // width: "100%",
          // On xs devices, remove minWidth and force a fixed table layout
          tableLayout: { xs: "fixed", sm: "auto" },
          minWidth: { xs: 0, sm: 650 },
        }}
        aria-label="responsive table"
      >
        <TableHead>
          <TableRow>
            {/* Always visible on all devices */}
            <TableCell sx={{ width: { xs: "80%", sm: "auto" } }}>
              Name
            </TableCell>

            {/* Hide these columns on small screens */}
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Due Date
            </TableCell>
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Assignee
            </TableCell>
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Priority
            </TableCell>
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              Status
            </TableCell>

            {/* Actions column visible on all devices */}
            <TableCell sx={{ width: { xs: "20%", sm: "auto" } }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows?.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                onClick={() => {
                  handleOpenModal(row);
                }}
                component="th"
                scope="row"
                sx={{
                  width: {
                    xs: "80%",
                    sm: "auto",
                  },
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#546FFF",
                  cursor: "pointer",
                }}
              >
                {row.title}
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                {dayjs(row.dueDate).format("YYYY-MM-DD")}
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                {row.assignee}
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img
                    src={
                      row.priority === "Low"
                        ? yellow
                        : row.priority === "High"
                        ? red
                        : green
                    }
                    alt="Low Priority"
                    width="16"
                    height="16"
                  />
                  {row.priority}
                </Box>
              </TableCell>

              <TableCell
                sx={{ display: { xs: "none", sm: "table-cell" }, width: "0px" }}
              >
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
                  }}
                >
                  {row.status}
                </Box>
              </TableCell>

              <TableCell sx={{ width: { xs: "20%", sm: "auto" } }}>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: "#F25353",
                  }}
                  onClick={() => {
                    deleteTask(row._id);
                  }}
                >
                  <FiTrash2 />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[6]}
        component="div"
        count={task?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="create-modal-title"
        aria-describedby="create-modal-description"
      >
        <Modals HandleCLose={handleCloseModal} row={selectedRow} />
      </Modal>
    </TableContainer>
  );
}
