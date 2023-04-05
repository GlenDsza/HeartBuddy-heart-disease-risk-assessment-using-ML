import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { protectedNavLinks, publicNavLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/" className="d-flex align-middle">
        <img src={logo} className="w-[55px] h-[45px] d-inline" />
        <div className="font-poppins font-bold cursor-pointer text-[26px] text-gradient ml-1 d-inline">
          HeartBuddy
        </div>
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {publicNavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === publicNavLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* For mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28-px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {publicNavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === publicNavLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
