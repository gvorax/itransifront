import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let auth = { token: true };
  return localStorage.getItem('token') ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
