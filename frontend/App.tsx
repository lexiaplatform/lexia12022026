import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Layout from './components/Layout';
import DriverDashboard from './pages/DriverDashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import InvestorDashboard from './pages/InvestorDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Navbar />
            <Landing />
          </>
        } />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route path="driver" element={<DriverDashboard />} />
          <Route path="owner" element={<OwnerDashboard />} />
          <Route path="investor" element={<InvestorDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
