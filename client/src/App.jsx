import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Payslips from './pages/Payslips'
import Settings from './pages/Settings'
import Layout from './pages/Layout'
import LoginLanding from './pages/LoginLanding'
import PrintPayslips from './pages/PrintPayslips'
import LoginForm from './components/LoginForm'



const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/login' element={<LoginLanding />} />
        <Route path='/login/admin' element={<LoginForm role="admin" 
        title="Admin Portal" subtitle="Sign in to your admin account" />} />
        <Route path='/login/employee' element={<LoginForm role="employee" 
        title="Employee Portal" subtitle="Sign in to your employee account" />} />

        <Route element={<Layout />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/leave' element={<Leave />} />
          <Route path='/payslips' element={<Payslips />} />
          <Route path='/settings' element={<Settings />} />
        </Route>

        <Route path='/print/payslips/:id' element={<PrintPayslips />} />
        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
    </>
  )
}

export default App
