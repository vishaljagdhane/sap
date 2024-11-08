import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import ProtectedRoute from './pages/ProctedtRoute';
import AdminDashbaord from './module/AdminModule/AdminDashbaord';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPages />} />

        {/* Protected routes with role-based access */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
             <AdminDashbaord/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/usermodule"
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <h1>User Module</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
