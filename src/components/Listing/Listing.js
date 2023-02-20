import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Listing = ({ data, onClick }) => {
  return (
    <Box>
      {data.length > 0 ? (
        data.map((customer) => (
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            key={customer._id}
            onClick={() => onClick(customer)}
          >
            <Box sx={{ display: "flex", margin: "10px" }}>
              <Avatar
                alt={customer.firstName.toUpperCase()}
                src={`../../../public/logo192.png`}
                sx={{ width: 56, height: 56 }}
              />
              <Box
                sx={{
                  paddingLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>
                  {customer.firstName} {customer.lastName}
                </Typography>
                <Typography>{customer.email}</Typography>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Typography>No Customer</Typography>
      )}
    </Box>
  );
};

export default Listing;
