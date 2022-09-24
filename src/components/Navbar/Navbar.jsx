import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/logo.jpg';

const Navbar = () => {

  let navigate = useNavigate();

  const removeUser = ()=> {
    navigate('login');
    localStorage.clear();
  }
  return (
    <nav className="w-100 navbar navbar-light bg-light position-fixed">
      <div className=" container  container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Image}
            alt=""
            width="100"
            height="auto"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="button">
          <button className="d-inline-block btn btn-primary" onClick={removeUser}>Log out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
