import React from "react";
import { Link } from "react-router-dom";
// import SearchField from "react-search-field";
// import News from './news';

export function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link
          className="navbar-brand border border-light pill p-1"
          to="/general"
        >
          DiemFlash
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse dot"
          style={{ left: "90%!important" }}
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/business">
                
                Business
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link"
                aria-current="page"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/sports">
                Sports
              </Link>
            </li>
          </ul>
        </div>
        {/* <SearchField
          placeholder="Search..."
          onSearchClick={newsDM}
          className="test-class p-1"
        /> */}
      </div>
    </nav>
  );
}

export default Navbar;
