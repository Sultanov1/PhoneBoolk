import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-medium fs-3" to="/">PhoneBook</Link>
        <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className="navbar-link btn btn-outline-dark" to="/new">Add new contact</Link>
          </li>
        </ul>
      </div>
    </nav>
);
};

export default Toolbar;
