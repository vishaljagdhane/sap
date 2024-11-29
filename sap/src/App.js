import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import ProtectedRoute from './pages/ProctedtRoute';
import AdminDashbaord from './module/AdminModule/AdminDashbaord';
import UseRegister from './pages/UseRegister';
import UserTableData from './pages/UserTableData';
import ApiServices from './APIServises/ApiServices';

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
        <Route path='/userregister' element={<UseRegister/>}/>
        <Route path='/userTableData' element={<UserTableData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
