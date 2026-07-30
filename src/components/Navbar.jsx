import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import ContainerLayout from "./ContainerLayout";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN -> Hide navbar
        setVisible(false);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> Reveal navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
  const isHomePage = location.pathname === "/";
  const isLightNav = !isHomePage || scrolled || isOpen;

  return (
    <div
      className={`fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 transform ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}
      ref={headerRef}
    >
      <ContainerLayout className="pointer-events-auto max-w-7xl w-full">
        <nav
          className={`relative transition-all duration-300 rounded-2xl border ${
            isLightNav
              ? "bg-white/95 backdrop-blur-xl border-gray-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.18)] px-5 sm:px-8 py-3"
              : "bg-transparent border-transparent shadow-none px-0 py-3"
          }`}
        >
          <div className="flex items-center justify-between h-11 sm:h-12">
            {/* Logo */}
            <div
              className="shrink-0 flex items-center cursor-pointer group"
              onClick={() => handleNavClick("home")}
            >
              <div
                className={`p-1.5 rounded-xl mr-2 shadow-md transition-all group-hover:scale-105 ${
                  isLightNav
                    ? "bg-[#0A1F1C] text-lime-400 border border-[#0A1F1C]/20"
                    : "bg-lime-400/15 text-lime-400 border border-lime-400/30 group-hover:bg-lime-400/25"
                }`}
              >
                <HiSparkles className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400" />
              </div>
              <span
                className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight ${
                  isLightNav ? "text-gray-950" : "text-white"
                }`}
              >
                Cleanora{" "}
                <span
                  className={isLightNav ? "text-[#0A1F1C]" : "text-lime-400"}
                >
                  Cleaners
                </span>
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 md:px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl text-xs md:text-sm lg:text-base xl:text-lg font-bold lg:font-extrabold transition-all cursor-pointer ${
                    isLightNav
                      ? "text-gray-700 hover:text-gray-950 hover:bg-gray-100/80"
                      : "text-white/90 hover:text-lime-400 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/quote"
                className={`inline-flex items-center justify-center px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-black rounded-full transition-all hover:scale-105 active:scale-95 ${
                  isLightNav
                    ? "bg-[#0A1F1C] hover:bg-black text-lime-400 shadow-md shadow-[#0A1F1C]/20"
                    : "bg-lime-400 hover:bg-lime-300 text-gray-950 shadow-lg shadow-lime-400/25 hover:shadow-lime-400/40"
                }`}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className={`inline-flex items-center justify-center p-2 rounded-xl focus:outline-none transition-all cursor-pointer ${
                  isLightNav
                    ? "text-gray-900 hover:text-black hover:bg-gray-100/80"
                    : "text-white hover:text-lime-400 hover:bg-white/10"
                }`}
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
            className={`md:hidden absolute top-full left-0 right-0 mt-3 z-50 rounded-2xl border shadow-2xl transition-all duration-300 transform ${
              isLightNav
                ? "bg-white/95 backdrop-blur-2xl border-gray-200/90 text-gray-900"
                : "bg-[#0A1F1C]/95 backdrop-blur-2xl border-white/20 text-white"
            } ${
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
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isLightNav
                      ? "text-gray-800 hover:text-black hover:bg-gray-100/80"
                      : "text-white hover:text-lime-400 hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div
                className={`pt-3 border-t mt-1 ${
                  isLightNav ? "border-gray-100" : "border-white/10"
                }`}
              >
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-center py-3 px-6 text-xs font-black rounded-full transition-all ${
                    isLightNav
                      ? "bg-[#0A1F1C] hover:bg-black text-lime-400 shadow-lg"
                      : "bg-lime-400 hover:bg-lime-300 text-gray-950 shadow-lg shadow-lime-400/20"
                  }`}
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
