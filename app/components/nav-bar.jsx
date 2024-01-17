"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState(
    "absolute top-0 left-0 w-full bg-opacity-90 p-4 z-10"
  );

  // Detect scroll to adjust navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarStyle(
          "fixed top-0 left-0 w-full bg-opacity-90 p-4 z-10 shadow-md"
        );
      } else {
        setNavbarStyle("absolute top-0 left-0 w-full bg-opacity-90 p-4 z-10");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={navbarStyle}>
      <div className="container mx-auto flex justify-between items-center">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img
            src="/images/navlogo.png"
            alt="Logo"
            className="w-[120px] h-[130px] cursor-pointer mr-2"
            onClick={closeMobileMenu}
          />
        </ScrollLink>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pr-10 text-2xl md:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMobileMenu}
          >
            <span className="text-white font-sans uppercase font-bold cursor-pointer hover:text-gray-300">
              Home
            </span>
          </ScrollLink>

          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMobileMenu}
          >
            <span className="text-white font-sans uppercase font-bold cursor-pointer hover:text-gray-300">
              About us
            </span>
          </ScrollLink>

          {/* Add similar ScrollLinks for other sections */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
