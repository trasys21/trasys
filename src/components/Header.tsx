"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClasses = `hover:text-gray-500 transition-colors`;
  const mobileNavLinkClasses = `block py-2 px-4 text-sm hover:bg-gray-200 rounded`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        hasScrolled || isMenuOpen
          ? "bg-white/70 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`container mx-auto flex justify-between items-center p-4 transition-colors duration-300 ${
          hasScrolled || isMenuOpen ? "text-black" : "text-white"
        }`}
      >
        <Link href="/">
          <Image
            src={
              hasScrolled || isMenuOpen
                ? "/images/logo.png"
                : "/images/logo_w.png"
            }
            alt="Trasys Logo"
            width={150}
            height={40}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className={navLinkClasses}>
            About Us
          </Link>
          <Link href="/esg-impact" className={navLinkClasses}>
            ESG
          </Link>
          <Link href="/awards" className={navLinkClasses}>
            수상 내역
          </Link>
          <Link href="/business" className={navLinkClasses}>
            사업 소개
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-black px-4 pb-4">
          <Link
            href="/about"
            className={mobileNavLinkClasses}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/esg-impact"
            className={mobileNavLinkClasses}
            onClick={() => setIsMenuOpen(false)}
          >
            ESG Impact
          </Link>
          <Link
            href="/awards"
            className={mobileNavLinkClasses}
            onClick={() => setIsMenuOpen(false)}
          >
            수상 내역
          </Link>
          <Link
            href="/business"
            className={mobileNavLinkClasses}
            onClick={() => setIsMenuOpen(false)}
          >
            사업 소개
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
