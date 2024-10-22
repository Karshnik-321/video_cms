/* 
  This example requires some changes to your config:
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
*/

'use client'

import { AuthProvider } from './context/AuthenticationContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard';
import VideosList from './pages/VideosList'
import PageNotFound from './pages/PageNotFound';
import PrivateRoutes from './routes/ProtectedRoutes';

export default function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* <Route  element={<PrivateRoutes />}> */}
            <Route path="/" element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/videolist' element={<VideosList />} />
          {/* </Route> */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}