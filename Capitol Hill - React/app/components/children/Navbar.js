import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">NYT - React</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/">Search</Link>
        </li>
        <li className={location.pathname === "/savedArticles" && "active"}>
          <Link to="/savedArticles">Saved</Link>
        </li>
      </ul>
    </div>
  </nav>

);
export default Navbar;
