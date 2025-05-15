import { Button } from "@/components/ui/button";
import Pet3DModel from "./Pet3DModel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentPet, setCurrentPet] = useState<"cat" | "dog">("cat");
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPet(prev => prev === "cat" ? "dog" : "cat");
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const handleShopProducts = () => {
    navigate('/shop');
  };

  const handleExploreServices = () => {
    navigate('/services');
  };

  return (
    <section className="relative pt-24 pb-10 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-96 h-96 bg-animal-blue/10 rounded-full -top-20 -left-20 blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute w-96 h-96 bg-animal-green/10 rounded-full -bottom-20 -right-20 blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Find Your Pet's <span className="gradient-text">Perfect Match</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover premium products, expert care services, and everything your furry friend needs to thrive, all in one place.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button 
                size="lg" 
                className="bg-animal-blue hover:bg-animal-blue/90 text-white transition-all duration-300 hover:scale-105"
                onClick={handleShopProducts}
              >
                Shop Products
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-animal-green text-animal-green hover:bg-animal-green/10 transition-all duration-300 hover:scale-105"
                onClick={handleExploreServices}
              >
                Explore Services
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex items-center justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className={`w-full h-full bg-animal-${i === 1 ? 'blue' : i === 2 ? 'green' : i === 3 ? 'coral' : 'yellow'} flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">
                        {i === 1 ? '🐶' : i === 2 ? '🐱' : i === 3 ? '🐰' : '🐦'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold">Happy Pet Owners</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-animal-blue/20 to-animal-green/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 z-10">
                  <Pet3DModel pet={currentPet} scale={currentPet === "cat" ? 0.9 : 0.7} />
                </div>
              </div>
            </div>
            
            {/* Floating icons */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-10 left-10 animate-bounce-subtle"
            >
              <div className="bg-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">🦴</span>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 right-10 animate-float"
            >
              <div className="bg-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">🐾</span>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 right-20 animate-bounce-subtle delay-300"
            >
              <div className="bg-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">🐟</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
