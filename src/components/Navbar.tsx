// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // We import the icons
import icicle from "../assets/icicle.png"


// Store nav links as an array of objects for easy mapping
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#service", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  // --- STATE ---
  // Tracks if the page has been scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  // Tracks if the navbar should be visible (for hide-on-scroll)
  const [isVisible, setIsVisible] = useState(true);

  // Stores the last scroll position to determine scroll direction
  const [lastScrollY, setLastScrollY] = useState(0);

  // Tracks the state of the mobile menu (open or closed)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- EFFECT ---
  // This hook adds a scroll event listener to the window
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Show/Hide navbar based on scroll direction
      // We add a buffer (currentScrollY > 150) to prevent hiding at the top
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Scrolling Down
      } else {
        setIsVisible(true); // Scrolling Up
      }
      setLastScrollY(currentScrollY);

      // 2. Change background color based on scroll position
      setIsScrolled(currentScrollY > 10);

      // 3. Close mobile menu on scroll
      setIsMobileMenuOpen(false);
    };

    // Add the listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove the listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // --- RENDER ---
  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${
          isScrolled || isMobileMenuOpen
            ? "bg-brand-dark shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4">
        {/* h-20 is 5rem or 80px. A good, modern navbar height */}
        <div className="flex h-20 items-center justify-between">
          {/* 1. Logo */}
          <a href="#page-top" className="flex-shrink-0">
            {/* We'll set a standard height for the logo */}
            <img
              src={icicle}
              alt="Icicle Labs Logo"
              className="h-10 w-auto" // h-10 is 2.5rem or 40px
            />
          </a>

          {/* 2. Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white transition-colors hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Modern touch: We can make the last link a "button"
              This makes "Contact" a clear Call to Action (CTA)
            */}
            <a
              href="#contact"
              className="
                rounded-md bg-brand-blue px-4 py-2 text-white
                transition-transform hover:scale-105
              "
            >
              Contact Us
            </a>
          </div>

          {/* 3. Mobile Menu Toggler (Hamburger Icon) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu (Dropdown) */}
      {/* This section is only visible on mobile (lg:hidden) and
        is toggled by the 'isMobileMenuOpen' state.
      */}
      <div
        className={`
          lg:hidden transition-all duration-300
          ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          overflow-hidden
          absolute top-20 left-0 right-0 bg-brand-dark
        `}
      >
        <ul className="flex flex-col items-center p-4">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className="block w-full py-3 text-center text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Mobile CTA Button */}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="
              mt-4 w-full max-w-xs rounded-md bg-brand-blue 
              py-2 text-center text-white
            "
          >
            Contact Us
          </a>
        </ul>
      </div>
    </nav>
  );
}
