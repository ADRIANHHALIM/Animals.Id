import { useState } from "react";
import { Button } from "@/components/ui/button";
import Pet3DModel from "./Pet3DModel";
import { motion } from "framer-motion";

const categories = [
  {
    id: "dogs",
    name: "Dogs",
    description: "Everything your canine companion needs, from premium food to stylish accessories.",
    image: "dog",
    color: "blue"
  },
  {
    id: "cats",
    name: "Cats",
    description: "Toys, treats, and essentials designed specifically for your feline friend's unique needs.",
    image: "cat",
    color: "green"
  },
  {
    id: "small-pets",
    name: "Small Pets",
    description: "Specialized products for rabbits, hamsters, guinea pigs, and other small companions.",
    image: "cat",
    color: "coral"
  },
  {
    id: "birds",
    name: "Birds",
    description: "High-quality cages, food, and toys to keep your feathered friends happy and healthy.",
    image: "dog",
    color: "yellow"
  },
  {
    id: "fish",
    name: "Fish",
    description: "Everything from aquariums and filters to food and decorations for your aquatic pets.",
    image: "cat",
    color: "purple"
  }
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const modelVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Shop By Pet Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of products categorized by pet type to find exactly what your pet needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="perspective-1000"
            >
              <Button
                variant={activeCategory === index ? "default" : "outline"}
                className={`
                  relative overflow-hidden transition-all duration-300 ease-out
                  ${activeCategory === index 
                    ? `bg-animal-${category.color} text-white shadow-md` 
                    : `border-animal-${category.color} text-animal-${category.color} hover:bg-animal-${category.color}/10`
                  }
                  ${category.id === "birds" || category.id === "fish" ? "font-medium px-6" : ""}
                `}
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: activeCategory === index ? "translateZ(5px)" : "translateZ(0px)"
                }}
                onClick={() => setActiveCategory(index)}
              >
                <span className="relative z-10">
                  {category.name}
                </span>
                {activeCategory === index && (
                  <motion.span 
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg transform-gpu"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          <div className="flex flex-col md:flex-row min-h-[400px]">
            <motion.div 
              className="w-full md:w-1/2 h-96 md:h-auto relative bg-gradient-to-br from-animal-blue/5 to-animal-green/5"
              variants={modelVariants}
              initial="hidden"
              animate="visible"
              key={categories[activeCategory].id}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full transform-gpu transition-all duration-500"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: "rotateY(10deg) translateZ(20px)"
                  }}
                >
                  <motion.div
                    initial={{ rotateY: -20 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className="w-full h-full max-w-[400px] max-h-[400px]">
                      <Pet3DModel 
                        pet={categories[activeCategory].image === "cat" ? "cat" : "dog"} 
                        scale={1.5}
                        autoRotate={true}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-10 left-10 w-16 h-16 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ 
                  background: `var(--animal-${categories[activeCategory].color})`
                }}
              />
              <motion.div 
                className="absolute bottom-10 right-10 w-24 h-24 rounded-full opacity-10"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{ 
                  background: `var(--animal-${categories[activeCategory].color})`
                }}
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 p-8 flex flex-col justify-center"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              key={`content-${categories[activeCategory].id}`}
            >
              <motion.h3 
                className={`text-2xl font-bold mb-4 text-animal-${categories[activeCategory].color}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {categories[activeCategory].name}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {categories[activeCategory].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className={`
                    relative overflow-hidden bg-animal-${categories[activeCategory].color} 
                    hover:bg-animal-${categories[activeCategory].color}/90 text-white self-start
                    transform transition-all duration-300 ease-out
                    before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:skew-x-[-15deg]
                    before:transition-transform before:duration-500 before:ease-out
                    hover:before:translate-x-[100%] hover:shadow-md
                  `}
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: "translateZ(0)"
                  }}
                >
                  <span className="relative z-10">Explore {categories[activeCategory].name} Products</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
