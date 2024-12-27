"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-evenly items-center px-6 py-4 bg-transparent text-white h-24">

        {/* Centered Links */}
        <div className="flex-1 flex justify-center space-x-20 font-montserrat">
          {[
            { href: "/", label: "About" },
            { href: "/service", label: "Service" },
            { href: "/portfolio", label: "Portfolio" },
            // { href: "/blogs", label: "Blogs" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 md:block hidden ${pathname === link.href ? "text-lime-custom font-bold" : "text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="flex-none mr-20">
          <a href="/contact">
            <button className="hidden md:block px-4 py-3 bg-lime-custom text-black rounded-xl font-montserrat text-xs font-bold shadow-[0px_0px_30px_5px_rgba(208,216,91,0.73)]">
              Contact Us
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-lime-custom"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {[
              { href: "/", label: "Home" },
              { href: "/service", label: "Service" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/blogs", label: "Blogs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 ${pathname === link.href ? "text-lime-custom" : "text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="/contact">
              <button className="px-4 py-2 bg-lime-custom text-black rounded-md">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
