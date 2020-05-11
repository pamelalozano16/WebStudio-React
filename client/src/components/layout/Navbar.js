import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = () => {
  //   const authLinks = (
  //     <ul>
  //       <li>
  //         <Link to="/dashboard">
  //           <i className="fas fa-user"></i>{" "}
  //           <span className="hide-sm">Dashboard</span>
  //         </Link>
  //       </li>
  //       <li>
  //         <a onClick={logout} href="#!">
  //           <i className="fas fa-sign-out-alt"></i>{" "}
  //           <span className="hide-sm">Logout</span>
  //         </a>
  //       </li>
  //     </ul>
  //   );

  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Developers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <Fragment>{guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;