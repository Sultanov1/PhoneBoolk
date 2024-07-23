import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand" to="/">Contacts</Link>
        <Link className="navbar-item btn btn-primary" to="/new">add new contact</Link>
      </div>
    </nav>
);
};

export default Toolbar;
