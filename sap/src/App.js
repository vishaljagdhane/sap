import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserTableData from './pages/UserTableData'
import UseRegister from './pages/UseRegister'
import SimpleLoginForm from './pages/LoginPages'
import AdminDashboard from './module/AdminModule/AdminDashbaord'
import { AuthProvider } from './CommanContext/AuthProvider'
import ProtectedRoute from './pages/ProctedtRoute'
export default function App() {
  return (
    <>
   <AuthProvider>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<SimpleLoginForm/>}></Route>

   <Route 
   path="/admin-dashabord" 
   element={
     <ProtectedRoute>
       <AdminDashboard/>
     </ProtectedRoute>
   }
 />

 <Route path="/user-table-data" element={<UserTableData />}></Route>
 <Route path='/Dashbaord' element={<h1>Dashbaord</h1>}></Route> 
 <Route path='/Button' element={<h1>Button</h1>}></Route> 
 <Route path='/TextFiled' element={<h1>TextFiled</h1>}></Route> 
 <Route path='/Table' element={<h1>Table</h1>}></Route> 
 <Route path='/According' element={<h1>According</h1>}></Route> 
 
 </Routes>
   
   
   </BrowserRouter>
   
   </AuthProvider>
    </>
  )
}
