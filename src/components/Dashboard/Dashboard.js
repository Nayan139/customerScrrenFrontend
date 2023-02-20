import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context";
import Listing from "../Listing/Listing";
import View from "../View/View";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(auth.loading);
  const [isCustomer, setIsCustomer] = useState(undefined);

  useEffect(() => {
    auth.handleCustomers();
  }, []);

  useEffect(() => {
    setLoading(auth.loading);
  });

  useEffect(() => {
    setIsCustomer(auth.customers[0]);
  }, [auth.customers]);

  const handleClick = (customer) => {
    console.log("customer-333333333333---------------------------->", customer);
    setIsCustomer(customer);
  };

  console.log("authloading", loading, isCustomer);
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Box sx={{ bgcolor: "#cfe8fc", width: "25%" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box></Box>
          <Button>Add Customer</Button>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            <Listing
              data={auth.customers}
              onClick={(customer) => handleClick(customer)}
            />
          )}
        </Box>
      </Box>
      <Box sx={{ width: "75%" }}>
        <View customer={isCustomer} />
      </Box>
    </Box>
  );
};

export default Dashboard;
