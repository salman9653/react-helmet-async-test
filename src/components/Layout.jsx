import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";

/**
 * Layout Component
 *
 * Provides consistent navigation across all pages with active link highlighting.
 * Wraps page content with a shared navigation menu.
 *
 * Requirements: 1.4, 7.4
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="layout-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="layout-content">{children}</main>
    </div>
  );
};

export default Layout;
