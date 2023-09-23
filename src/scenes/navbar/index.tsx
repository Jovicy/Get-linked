import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileLinkClick = (sectionId: string) => {
    closeMobileMenu();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="fixed top-0 bg-primary-100 w-full text-white py-8 flex justify-center items-center border-b border-gray-800 z-50">
        <div className="w-11/12 mx-auto md:flex md:justify-between justify-end items-center relative">
          <div className="hidden md:block">
            <img src={Logo} alt="logo" />
          </div>
          <div className="hidden md:flex items-center gap-14">
            <ul className="flex gap-8">
              <li>
                <div>
                  {isHomePage ? (
                    <ScrollLink
                      activeClass="active"
                      to="timeline"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                      onClick={() => handleMobileLinkClick("timeline")}
                    >
                      Timeline
                    </ScrollLink>
                  ) : (
                    <Link
                      to="/"
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                    >
                      Timeline
                    </Link>
                  )}
                </div>
              </li>
              <li>
                <div>
                  {isHomePage ? (
                    <ScrollLink
                      activeClass="active"
                      to="overview"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                      onClick={() => handleMobileLinkClick("overview")}
                    >
                      Overview
                    </ScrollLink>
                  ) : (
                    <Link
                      to="/"
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                    >
                      Overview
                    </Link>
                  )}
                </div>
              </li>
              <li>
                <div>
                  {isHomePage ? (
                    <ScrollLink
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                      onClick={() => handleMobileLinkClick("faq")}
                    >
                      FAQs
                    </ScrollLink>
                  ) : (
                    <Link
                      to="/"
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                    >
                      FAQs
                    </Link>
                  )}
                </div>
              </li>
              <li>
                <div>
                  <Link
                    to="/contact"
                    className="font-montserrat font-normal text-base cursor-pointer capitalize"
                  >
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
            <Link
              to="/register"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-none hover:border-border hover:border-2 text-white w-40 h-12 rounded font-montserrat font-normal text-base flex justify-center items-center"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className={`text-white hover:text-gray-400`}
            >
              <img src={Menu} alt="Menu" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile version */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMobileMenu}></div>
      )}
      <div
        className={`fixed top-0 left-0 w-full h-full transition-all duration-300 z-50 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-8 right-8 border border-border rounded-full p-2 text-white hover:text-gray-400"
        >
          <img src={Close} alt="Close" />
        </button>
        <div className="bg-primary-100 w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-8">
            <ul className={`text-white flex flex-col gap-8`}>
              <li>
                <div>
                  {isHomePage ? (
                    <ScrollLink
                      activeClass="active"
                      to="timeline"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                      onClick={() => handleMobileLinkClick("timeline")}
                    >
                      Timeline
                    </ScrollLink>
                  ) : (
                    <Link
                      to="/"
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                    >
                      Timeline
                    </Link>
                  )}
                </div>
              </li>
              <li>
                <div>
                  {isHomePage ? (
                    <ScrollLink
                      activeClass="active"
                      to="overview"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                      onClick={() => handleMobileLinkClick("overview")}
                    >
                      Overview
                    </ScrollLink>
                  ) : (
                    <Link
                      to="/"
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                    >
                      Overview
                    </Link>
                  )}
                </div>
              </li>
              <li>
                <div>
                  {isHomePage ? (
                    <ScrollLink
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                      onClick={() => handleMobileLinkClick("faq")}
                    >
                      FAQs
                    </ScrollLink>
                  ) : (
                    <Link
                      to="/"
                      className="font-montserrat font-normal text-base cursor-pointer capitalize"
                    >
                      FAQs
                    </Link>
                  )}
                </div>
              </li>
              <li>
                <div>
                  <Link
                    to="/contact"
                    className="font-montserrat font-normal text-base cursor-pointer capitalize"
                  >
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
            <Link
              to="/register"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-none hover:border-border hover.borderColor-2 text-white w-40 h-12 rounded font-montserrat font-normal text-base flex justify-center items-center"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
