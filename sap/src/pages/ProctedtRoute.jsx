import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../CommanContext/DataProvider'; // Assuming the user context is here
import LoginJson from './LoginJson.json'; // JSON file containing user details

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { username, password } = useContext(DataContext);

  // Find the valid user from the JSON (login data)
  const validUser = LoginJson.users.find(
    (user) => user.email === username && user.password === password
  );

  const userRole = validUser ? validUser.role : null;

  // Check if user is logged in and has a valid role
  if (!validUser) {
    return <Navigate to="/" />; // Redirect to login if the user is not logged in
  }

  // Check if the user's role is allowed to access the page
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />; // Redirect to login if role is not allowed
  }

  // If the user is authenticated and has the correct role, render the children
  return <>{children}</>;
};

export default ProtectedRoute;
