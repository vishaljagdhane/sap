import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../CommanContext/AuthProvider';


// This component will be used to protect routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  return children; // If authenticated, render the children (protected page)
};

export default ProtectedRoute;
