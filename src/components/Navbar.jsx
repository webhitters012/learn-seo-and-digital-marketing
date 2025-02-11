import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); // ✅ React Router Navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        
        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          Our Courses
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => navigate("/SEO")}>SEO</li>
              <li><Link to="/courses/web-design">Web Design</Link></li>
              <li onClick={() => navigate("/DM")}>Digital Marketing</li>
            </ul>
          )}
        </li>
        
        <li><Link to="/blog">Our Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li className="apply-jobs"><Link to="/apply-jobs">Apply Jobs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
