import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent">
      <nav className="navbar navbar-expand-lg align-items-baseline shadow">
        <div className="container">
          <Link className="navbar-brand text-lg-center rounded brand" to="/">
            <b className="text-primary fs-4">Promilo</b>
            {/* <b className="text-primary">- Platform</b> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <button className="btn btn-sm m-1">Tickets</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-sm m-1">Contact Us</button>
              </li> */}
              {/* <li className="nav-item">
                <button className="btn btn-success btn-sm m-1">Contacts</button>
              </li> */}
            </ul>
            <div className="navbar-nav mb-2 mb-lg-0">
              {/* <Link
                className="nav-item btn btn-primary p-1 my-1 mx-2 text-light"
                style={{ width: 100 }}
                to = "/products"
              >
                <b>Products</b>
              </Link> */}
              <Link
                className="nav-item btn btn-primary p-1 my-1 mx-2 text-light"
                style={{ width: 100 }}
                to = "/about"
                
              >
                <b>About</b>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;