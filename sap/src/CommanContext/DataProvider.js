import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const ContextValue = {
    username,
    setUserName,
    password,
    setPassword,
  };

  return (
    <DataContext.Provider value={ContextValue}>
      {children}
    </DataContext.Provider>
  );
}
