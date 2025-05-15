import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Premium Pet Products",
    description: "High-quality food, toys, and accessories carefully selected for your pet's health and happiness.",
    icon: "🛍️",
    color: "blue"
  },
  {
    title: "Professional Grooming",
    description: "Expert grooming services that keep your pets looking and feeling their best.",
    icon: "✂️",
    color: "green"
  },
  {
    title: "Veterinary Services",
    description: "Regular check-ups and health services to ensure your pet stays in optimal condition.",
    icon: "🩺",
    color: "coral"
  },
  {
    title: "Training Programs",
    description: "Personalized training sessions to help your pet develop good habits and behaviors.",
    icon: "🏆",
    color: "yellow"
  },
  {
    title: "Pet Adoption",
    description: "Find your perfect companion through our ethical adoption network.",
    icon: "❤️",
    color: "purple"
  },
  {
    title: "Home Delivery",
    description: "Fast and reliable delivery of pet essentials right to your doorstep.",
    icon: "🚚",
    color: "blue"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Services & Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the wide range of services we offer to help you provide the best care for your beloved pets.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                z: 10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="perspective-1000"
            >
              <Card 
                className="border-none shadow-md overflow-hidden h-full transform-gpu transition-all duration-300 bg-white group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div 
                  className="w-full transform-gpu transition-all duration-500"
                  style={{ 
                    height: "2px", // Using 2px instead of h-2 class to ensure consistent rendering
                    backgroundColor: 
                      feature.color === "blue" ? "var(--animal-blue)" :
                      feature.color === "green" ? "var(--animal-green)" :
                      feature.color === "coral" ? "var(--animal-coral)" :
                      feature.color === "yellow" ? "var(--animal-yellow)" :
                      feature.color === "purple" ? "var(--animal-purple)" : "var(--animal-blue)"
                  }}
                ></div>
                <CardContent className="p-6 relative z-10">
                  <div 
                    className="mb-6 flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 transform-gpu"
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: "translateZ(20px)",
                      backgroundColor: 
                        feature.color === "blue" ? "rgba(var(--animal-blue-rgb), 0.1)" :
                        feature.color === "green" ? "rgba(var(--animal-green-rgb), 0.1)" :
                        feature.color === "coral" ? "rgba(var(--animal-coral-rgb), 0.1)" :
                        feature.color === "yellow" ? "rgba(var(--animal-yellow-rgb), 0.1)" :
                        feature.color === "purple" ? "rgba(var(--animal-purple-rgb), 0.1)" : "rgba(var(--animal-blue-rgb), 0.1)"
                    }}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300"
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: "translateZ(15px)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: "translateZ(10px)"
                    }}
                  >
                    {feature.description}
                  </p>
                  
                  <div 
                    className="absolute bottom-0 right-0 w-24 h-24 -mb-8 -mr-8 rounded-full z-0 transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: "translateZ(5px)",
                      backgroundColor: 
                      feature.color === "blue" ? "rgba(var(--animal-blue-rgb), 0.05)" :
                      feature.color === "green" ? "rgba(var(--animal-green-rgb), 0.05)" :
                      feature.color === "coral" ? "rgba(var(--animal-coral-rgb), 0.05)" :
                      feature.color === "yellow" ? "rgba(var(--animal-yellow-rgb), 0.05)" :
                      feature.color === "purple" ? "rgba(var(--animal-purple-rgb), 0.05)" : "rgba(var(--animal-blue-rgb), 0.05)"
                    }}
                  ></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
