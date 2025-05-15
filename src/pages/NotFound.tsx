
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen py-32 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <span className="text-9xl font-bold gradient-text">404</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            
            <p className="text-gray-600 mb-8">
              Oops! It looks like the page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-animal-blue hover:bg-animal-blue/90">
                <Link to="/">Return Home</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-animal-green text-animal-green hover:bg-animal-green/10">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-400 text-sm">
                Try searching for what you're looking for or explore our popular categories below:
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["Dogs", "Cats", "Services", "Shop", "About"].map((category) => (
                  <Link
                    key={category}
                    to={`/${category.toLowerCase()}`}
                    className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-animal-blue/10 hover:text-animal-blue transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
