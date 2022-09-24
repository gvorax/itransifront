import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from '../pages/AdminPanel';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoutes from '../utils/PrivateRoutes';

const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<AdminPanel />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} exact />
    </Routes>
  );
};

export default Router;
