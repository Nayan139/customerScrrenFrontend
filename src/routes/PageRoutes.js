import axios from "axios";
import React, { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { API } from "../api";
import Dashboard from "../components/Dashboard/Dashboard";
import AuthContext from "../context";

const PageRoutes = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCustomers = async () => {
    try {
      setLoading(true);
      const response = await API("/selectAllCustomers", { method: "GET" });
      console.log("customers--------------------->", customers);
      if (response.status === 200) {
        setCustomers(response.customer);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loading, customers, handleCustomers: handleCustomers }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default PageRoutes;
