import React from "react";
import { Avatar, Button, Typography, Box } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const View = ({ customer }) => {
  console.log("customer======================>", customer);
  return (
    <Box>
      {customer ? (
        <Box>
          <Box sx={{ padding: "25px", height: "30vh", bgcolor: "red" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Avatar
                alt={customer.firstName.toUpperCase()}
                src={`../../../public/logo192.png`}
                sx={{ width: 66, height: 66 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="h5" sx={{ paddingLeft: "20px" }}>
                    {customer.firstName} {customer.lastName}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ marginLeft: "20px" }}>
                    <Box
                      sx={{ display: "flex", marginTop: "5px", gap: "10px" }}
                    >
                      <AccountCircleOutlinedIcon
                        sx={{ height: "30px", width: "30px" }}
                      />
                      <Typography>{customer.username}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ marginLeft: "20px" }}>
                    <Box></Box>
                    <Box
                      sx={{ display: "flex", marginTop: "5px", gap: "10px" }}
                    >
                      <MailOutlineOutlinedIcon
                        sx={{ height: "30px", width: "30px" }}
                      />
                      <Typography>{customer.email}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ marginLeft: "20px" }}>
                    <Box
                      sx={{ display: "flex", marginTop: "5px", gap: "10px" }}
                    >
                      <LocalPhoneOutlinedIcon
                        sx={{ height: "30px", width: "30px" }}
                      />
                      <Typography>{customer.phone}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "10px", paddingLeft: "20px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Button
                      variant="outlined"
                      sx={{ paddingLeft: "20px" }}
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ paddingLeft: "20px" }}
                      startIcon={<EditIcon />}
                    >
                      Delete Customer
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography>Loading....</Typography>
      )}
    </Box>
  );
};

export default View;
