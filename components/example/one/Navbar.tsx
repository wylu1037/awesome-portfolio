"use client";

import { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-scroll";

const logo: string = "/assets/example/one/logo.png";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="bg-background sticky top-0 z-10">
        <nav className=" max-w-screen-xl mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <img
              src={logo}
              className="h-11 w-auto object-contain rounded"
            ></img>
            <ul className="hidden md:flex md:gap-14">
              <li>
                <Link to="hero" smooth spy offset={-80} className="menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="our-work"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
            <button className="hidden h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">
              Contact Us
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(true);
              }}
              className="w-11 h-11 bg-blue-100 text-2xl text-primary flex justify-center items-center rounded md:hidden z-50"
            >
              {isMenuOpen ? <RiCloseLine /> : <RiMenu4Line />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
