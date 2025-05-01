import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-blue-600">FinBaMa</div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#Homepage"  className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#AboutUs" className="hover:text-blue-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#Blog" className="hover:text-blue-600 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#ContactUs" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-2 lg:space-x-4">
            <Link
              to="/login-form"
              className="px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-3 py-1.5 lg:px-4 lg:py-2 border border-blue-600 text-blue-600 text-sm rounded-full hover:bg-blue-50 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t mt-4"
          >
            <div className="container mx-auto py-4 px-4">
              {/* Mobile Auth Buttons */}
              <div className="flex space-x-3">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1"
                >
                  <Link
                    to="/login-form"
                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex-1"
                >
                  <Link
                    to="/signup"
                    className="block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
