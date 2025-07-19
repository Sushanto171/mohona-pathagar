import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import Container from "./Container";
import { ModeToggle } from "./MoodToggle";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "All Books", path: "/books" },
    { name: "Add Book", path: "/create-book" },
    { name: "Borrow Summary", path: "/borrow-summary" },
  ];

  return (
    <nav className="bg-muted dark:bg-gray-900 shadow-md">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-28">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            <img className="w-24 md:w-44 " src={logo} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <ModeToggle />
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
