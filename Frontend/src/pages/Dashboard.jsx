import React from 'react'

const Dashboard = () => {
  return (
    <div>
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
                  value={status}
                  size="small"
                  onChange={(e) => setStatus(e.target.value)}
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
                  value={assignee}
                  size="small"
                  onChange={(e) => setAssignee(e.target.value)}
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
    </div>
  )
}

export default Dashboard
