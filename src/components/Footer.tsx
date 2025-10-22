// src/components/Footer.tsx
import { Linkedin, Twitter, Github } from "lucide-react";
import icicle from "../assets/icicle.png";

// Re-use the nav links for the "Quick Links" section
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#service", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

// Define your social media links here
const socialLinks = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: Twitter,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    Icon: Github,
  },
  // Add more as needed
];

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Top section: Logo, Links, and Socials */}
        {/* On mobile: stacks vertically. On medium screens+: side-by-side */}
        <div
          className="
          flex flex-col md:flex-row 
          justify-between gap-10 mb-10
        "
        >
          {/* Column 1: Brand/Logo */}
          <div className="flex-1 max-w-sm">
            <a href="#page-top" className="mb-4 inline-block">
              <img
                src={icicle}
                alt="Icicle Labs Logo"
                className="h-10 w-auto"
              />
            </a>
            <p className="leading-relaxed">
              Driving digital innovation through data-driven insights and
              cutting-edge technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      transition-colors 
                      hover:text-brand-blue hover:underline
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us (Socials) */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    p-2 rounded-full
                    bg-white/10 text-white
                    transition-all
                    hover:bg-brand-blue hover:scale-110
                  "
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div
          className="
          border-t border-gray-700 
          pt-8 text-center text-sm
        "
        >
          <p>
            &copy; {new Date().getFullYear()} Icicle Labs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
