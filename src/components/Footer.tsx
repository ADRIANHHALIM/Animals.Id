import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Custom Link component that handles hash navigation
const HashLink = ({ to, children, className }) => {
  const location = useLocation();
  
  useEffect(() => {
    if (to.includes('#')) {
      const id = to.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.pathname, location.hash, to]);

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", url: "/shop" },
        { name: "Dogs", url: "/shop?animal=dog" },
        { name: "Cats", url: "/shop?animal=cat" },
        { name: "Birds", url: "/shop?animal=bird" },
        { name: "Small Pets", url: "/shop?animal=small_pet" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "All Services", url: "/services" },
        { name: "Grooming", url: "/services#grooming" },
        { name: "Training", url: "/services#training" },
        { name: "Veterinary Care", url: "/services#veterinary" },
        { name: "Pet Adoption", url: "/services#adoption" },
        { name: "Pet Boarding", url: "/services#boarding" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", url: "/about#story" },
        { name: "Our Team", url: "/about#team" },
        { name: "Our Mission", url: "/about#mission" },
        { name: "Contact Us", url: "/contact" }
      ]
    },
    {
      title: "Help",
      links: [
        { name: "FAQs", url: "/services#faq" },
        { name: "Shipping", url: "#" },
        { name: "Returns", url: "#" },
        { name: "Track Order", url: "#" },
        { name: "Privacy Policy", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-animal-blue to-animal-green flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-extrabold gradient-text">Animals.Id</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Your one-stop destination for premium pet products, professional services, and expert advice to ensure your pets live their best lives.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map(platform => (
                <a 
                  key={platform} 
                  href={`https://${platform}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-animal-blue hover:text-white transition-colors"
                  aria-label={`Visit our ${platform} page`}
                >
                  <span className="sr-only">{platform}</span>
                  {/* Simple placeholder for social icons */}
                  <div className="w-5 h-5 flex items-center justify-center">
                    {platform[0].toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    {link.url.includes('#') ? (
                      <HashLink 
                        to={link.url}
                        className="text-gray-600 hover:text-animal-blue transition-colors"
                      >
                        {link.name}
                      </HashLink>
                    ) : (
                      <Link 
                        to={link.url}
                        className="text-gray-600 hover:text-animal-blue transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {currentYear} Animals.Id. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-600 hover:text-animal-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-600 hover:text-animal-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-animal-blue transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
