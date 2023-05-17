import React, { useState } from "react";
import "../Navbar/navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

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
      <header className="header flex"  >
        <div className="logoDiv">
          <NavLink to="#" className="logo flex">
            <h1>
            <Link  to="/" className="icon" > <MdOutlineTravelExplore /> <span className="text-black"> Asgard </span> </Link>
            </h1>
          </NavLink>
        </div>

        <div className={active} style={{height: "60px"}} >
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink to="/" className="navLink">
                Home
              </NavLink>
            </li>
            {/* <li className="navItem">
              <NavLink to="packages" className="navLink">
                Packages
              </NavLink>
            </li> */}
            <li class="dropdown">
              <NavLink
                class="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                // to="packages"
                aria-expanded="false"
              >
                Packages <IoMdArrowDropdown />
              </NavLink>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/domestic">
                    Domestic Tour
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="international">
                    International Tour
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="Honeymoon">
                    Honeymoon Tour
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="Wedding">
                    Wedding Tours
                  </a>
                </li>
              </ul>
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

            <button className="navbar_btn">
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
