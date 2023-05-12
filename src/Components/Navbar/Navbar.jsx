import React, { useState } from "react";
import "../Navbar/navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("navbar");

  // Function to toggle navbar

  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  // Function to remove navbar

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <NavLink to="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Asgard
            </h1>
          </NavLink>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink to="home" className="navLink">
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="packages" className="navLink">
                Packages
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="about" className="navLink">
                About Us
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="contact" className="navLink">
                Contact Us
              </NavLink>
            </li>

            <button className="btn">
              <NavLink to="/booknow"> Book Now</NavLink>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggeleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
