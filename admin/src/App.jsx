import React from 'react'
import Login from './pages/Login'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import { useContext } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route , Routes } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import AllApointments from './pages/admin/AllApointments';
import AddDoctor from './pages/admin/AddDoctor';
import DoctorsList from './pages/admin/DoctorsList';
const App = () => {
  
  const {aToken} = useContext(AdminContext)
  
  
  return aToken ? (
    <div className='bg-[#F8F9FD]' >

      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllApointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorsList/>}/>
          

        </Routes>

      </div>



    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>

    </>
  )
}

export default App