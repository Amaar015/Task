import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { task } from "../data";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import { FiTrash2 } from "react-icons/fi";
import { Box, Modal, Divider, Menu, MenuItem } from "@mui/material";
import Modals from "./Modals";

export default function AccessibleTable() {
  //   menu
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

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
  const paginatedRows = task.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const uniquePriorities = task.reduce((unique, current) => {
    if (!unique.some((item) => item.priority === current.priority)) {
      unique.push(current);
    }
    return unique;
  }, []);

  const uniqueStatus = task.reduce((unique, current) => {
    if (!unique.some((item) => item.status === current.status)) {
      unique.push(current);
    }
    return unique;
  }, []);

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

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "1rem",
        width: "100%", // Always full width on all devices
      }}
    >
      <Table
        sx={{
          width: "100%",
          // On xs devices, remove minWidth and force a fixed table layout
          tableLayout: { xs: "fixed", sm: "auto" },
          minWidth: { xs: 0, sm: 650 },
        }}
        aria-label="responsive table"
      >
        <TableHead>
          <TableRow>
            {/* Always visible on all devices */}
            <TableCell sx={{ width: { xs: "70%", sm: "auto" } }}>
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
            <TableCell sx={{ width: { xs: "30%", sm: "auto" } }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row) => (
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
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#546FFF",
                    cursor: "pointer",
                  },
                }}
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                {row.duedate}
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                {row.assignee}
              </TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                <Box
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={row.image}
                    alt="Low Priority"
                    width="16"
                    height="16"
                  />
                  {row.priority}
                </Box>
              </TableCell>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    boxShadow: "none", // Remove box shadow
                    width: "200px", // Set width to 200px
                  },
                }}
              >
                <MenuItem>Priority</MenuItem>
                <Divider />
                {uniquePriorities.map((tasks) => (
                  <>
                    <MenuItem onClick={handleClose}>
                      <Box
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <img
                          src={tasks.image}
                          alt="Low Priority"
                          width="16"
                          height="16"
                        />
                        {tasks.priority}
                      </Box>
                    </MenuItem>
                    <Divider />
                  </>
                ))}
              </Menu>
              <TableCell
                sx={{ display: { xs: "none", sm: "table-cell" }, width: "0px" }}
              >
                <Box
                  aria-controls={open1 ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClick1}
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
                  }}
                >
                  {row.status}
                </Box>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl1}
                  open={open1}
                  onClose={handleClose1}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      boxShadow: "none", // Remove box shadow
                      width: "200px", // Set width to 200px
                    },
                  }}
                >
                  <MenuItem>Status</MenuItem>
                  <Divider />
                  {uniqueStatus.map((tasks) => (
                    <>
                      <MenuItem onClick={handleClose1}>
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
                              bgcolor:
                                tasks.status === "Active"
                                  ? "#75D653"
                                  : tasks.status === "Closed"
                                  ? "#F25353"
                                  : "#FFB72B",
                            }}
                          />
                          {tasks.status}
                        </Box>{" "}
                      </MenuItem>
                      <Divider />
                    </>
                  ))}
                </Menu>
              </TableCell>

              <TableCell sx={{ width: { xs: "20%", sm: "auto" } }}>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: "#F25353",
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
        count={task.length}
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
