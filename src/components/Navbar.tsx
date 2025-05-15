import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true when page is scrolled more than 20px
      setScrolled(window.scrollY > 20);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"}
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/assets/img/animals-logo-favicon.png" 
            alt="Animals.Id Logo" 
            className={`transition-all duration-300 ${scrolled ? "h-10" : "h-14"} w-auto`}
          />
          {/* Text logo that appears when scrolled */}
          {scrolled && (
            <span className="font-bold text-xl text-animal-coral transition-opacity duration-300">
              Animals.Id
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks layout="horizontal" scrolled={scrolled} />
          <Link to="/shop">
            <Button 
              className={`
                transition-all duration-300
                ${scrolled 
                  ? "bg-animal-coral hover:bg-animal-coral/90 text-white" 
                  : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"}
              `}
            >
              Shop Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`
            md:hidden focus:outline-none transition-colors duration-300
            ${scrolled ? "text-gray-700" : "text-white"}
          `}
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 absolute w-full">
          <NavLinks layout="vertical" scrolled={true} />
          <Link to="/shop" className="block w-full mt-4">
            <Button className="w-full bg-animal-coral hover:bg-animal-coral/90 text-white">
              Shop Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  layout: "horizontal" | "vertical";
  scrolled: boolean;
}

const NavLinks = ({ layout, scrolled }: NavLinksProps) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul 
      className={`
        ${layout === "horizontal" ? "flex space-x-6" : "flex flex-col space-y-4"}
      `}
    >
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className={`
              font-medium transition duration-200
              ${scrolled 
                ? "text-gray-700 hover:text-animal-blue" 
                : "text-white hover:text-white/80"}
            `}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
