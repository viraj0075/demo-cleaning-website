import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import ContainerLayout from "./ContainerLayout";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
        setIsOpen(false);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + sectionId);
    } else {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  const navLinks = NAV_LINKS;

  return (
    <div
      className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
      ref={headerRef}
    >
      <ContainerLayout className="pointer-events-auto max-w-7xl w-full">
        <nav
          className={`relative transition-all duration-300 rounded-2xl border ${
            scrolled || isOpen
              ? "bg-[#0A1F1C]/95 backdrop-blur-xl border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-4 sm:px-6 py-2.5"
              : "bg-transparent border-transparent shadow-none px-0 py-2.5"
          }`}
        >
          <div className="flex items-center justify-between h-11 sm:h-12">
            {/* Logo */}
            <div
              className="shrink-0 flex items-center cursor-pointer group"
              onClick={() => handleNavClick("home")}
            >
              <div className="p-1.5 rounded-xl text-lime-400 mr-2 shadow-md bg-lime-400/15 border border-lime-400/30 group-hover:scale-105 group-hover:bg-lime-400/25 transition-all">
                <HiSparkles className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400" />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">
                Cleanora <span className="text-lime-400">Cleaners</span>
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-1 sm:space-x-1.5 lg:space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-white/90 hover:text-lime-400 hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-black rounded-full transition-all hover:scale-105 active:scale-95 bg-lime-400 hover:bg-lime-300 text-gray-950 shadow-lg shadow-lime-400/25 hover:shadow-lime-400/40"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className="inline-flex items-center justify-center p-2 rounded-xl focus:outline-none transition-all cursor-pointer text-white hover:text-lime-400 hover:bg-white/10"
              >
                {isOpen ? (
                  <FiX className="h-5 w-5" />
                ) : (
                  <FiMenu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 mt-3 z-50 bg-[#0A1F1C]/95 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl transition-all duration-300 transform ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <div className="p-4 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block w-full text-left text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:text-lime-400 hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 border-t border-white/10 mt-1">
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 px-6 text-xs font-black rounded-full bg-lime-400 hover:bg-lime-300 text-gray-950 shadow-lg shadow-lime-400/20 transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </ContainerLayout>
    </div>
  );
}
