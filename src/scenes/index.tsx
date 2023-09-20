import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary-100 w-full text-white p-8 flex justify-center items-center border-b border-gray-800">
      <div className="flex w-11/12 md:justify-between justify-end items-center relative">
        <div className="hidden md:block">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hidden md:flex items-center gap-14">
          <ul className="flex gap-8">
            <li>
              <a href="/" className="font-montserrat font-normal text-base">
                Timeline
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-montserrat font-normal text-base"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="font-montserrat font-normal text-base"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-montserrat font-normal text-base"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white w-40 h-12 rounded font-montserrat font-normal text-base">
            Register
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`text-white hover:text-gray-400 ${
              isMobileMenuOpen ? "border-2 border-mixed rounded-full p-1" : ""
            }`}
          >
            <img
              src={isMobileMenuOpen ? Close : Menu}
              alt={isMobileMenuOpen ? "Close" : "Menu"}
            />
          </button>
        </div>
        {/* mobile version */}
        <div
          className={`md:hidden absolute top-40 left-0 bg-primary-100 w-full transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col gap-8">
            <ul
              className={`text-white flex flex-col gap-8 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <li>
                <a href="/" className="font-montserrat font-normal text-base">
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="font-montserrat font-normal text-base"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-montserrat font-normal text-base"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-montserrat font-normal text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div>
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white w-40 h-12 rounded font-montserrat font-normal text-base">
                Register
                </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
