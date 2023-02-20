import React from "react";

export const AuthContext = React.createContext({
  loading: false,
  customers: [],
  handleCustomers: () => {},
});

export default AuthContext;
