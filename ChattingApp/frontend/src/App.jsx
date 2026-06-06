import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignInPage from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import { isAuthenticated } from './services/api'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Navigate to="/chat" replace /> : <SignInPage />} />
        <Route path="/chat" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App