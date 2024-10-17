import React, { useEffect } from 'react';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard'
import VideosList from './component/VideosList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  useEffect(() => {
    // Add the class to the <html> element
    document.documentElement.classList.add('h-full', 'bg-gray-50');
    // Add the class to the <body> element
    document.body.classList.add('h-full');

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.documentElement.classList.remove('h-full', 'bg-gray-50');
      document.body.classList.remove('h-full');
    };
  }, []);
  return (
    <Router>
        {/* <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/videos" element={<VideosList />} />
        </Routes>
    </Router>
  );
}

export default App;
