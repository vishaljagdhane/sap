import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);  // Hook to access the context values
};

export const AuthProvider = ({ children }) => {
  // Get authentication status from localStorage, default to false
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [username, setUserName] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');

  // Method to log the user in
  const login = (user, pass) => {
    setIsAuthenticated(true);
    setUserName(user);
    setPassword(pass);

    // Persist authentication and credentials in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', user);
    localStorage.setItem('password', pass);
  };

  // Method to log the user out
  const logout = () => {
    setIsAuthenticated(false);
    setUserName('');
    setPassword('');

    // Clear authentication and credentials from localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  };

  const ContextValue = {
    isAuthenticated,
    login,
    logout,
    username,
    setUserName,
    password,
    setPassword,
  };

  return (
    <AuthContext.Provider value={ContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
