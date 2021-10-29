import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <div>
          <Link to="/contacts" className="btn btn-light ml-auto">
            Create a Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;