import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

// Define product interface
interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  animal: string;
  image: string;
  description: string;
}

// Sample products data
const products: Product[] = [
  {
    id: "1",
    name: "Premium Dog Food",
    price: 39.99,
    rating: 4.8,
    category: "food",
    animal: "dog",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-quality, grain-free dog food made with real meat and vegetables."
  },
  {
    id: "2",
    name: "Plush Cat Bed",
    price: 29.99,
    rating: 4.7,
    category: "bedding",
    animal: "cat",
    image: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Soft, cozy plush bed perfect for cats of all sizes. Machine washable."
  },
  {
    id: "3",
    name: "Interactive Dog Toy",
    price: 14.99,
    rating: 4.5,
    category: "toys",
    animal: "dog",
    image: "https://images.unsplash.com/photo-1576201836106-db1758785473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Durable, interactive toy that keeps your dog engaged and mentally stimulated."
  },
  {
    id: "4",
    name: "Cat Tree Condo",
    price: 79.99,
    rating: 4.9,
    category: "furniture",
    animal: "cat",
    image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Multi-level cat tree with scratching posts, perches, and hideaway condo."
  },
  {
    id: "5",
    name: "Bird Seed Mix",
    price: 12.99,
    rating: 4.6,
    category: "food",
    animal: "bird",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium seed blend for wild and pet birds with added vitamins and minerals."
  },
  {
    id: "6",
    name: "Small Animal Cage",
    price: 45.99,
    rating: 4.4,
    category: "housing",
    animal: "small_pet",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Spacious wire cage for hamsters, gerbils, and other small animals."
  },
  {
    id: "7",
    name: "Dog Collar",
    price: 18.99,
    rating: 4.7,
    category: "accessories",
    animal: "dog",
    image: "https://images.unsplash.com/photo-1576637978143-01fdhcee2c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Adjustable collar made from durable nylon with reflective stitching for visibility."
  },
  {
    id: "8",
    name: "Cat Scratching Post",
    price: 24.99,
    rating: 4.5,
    category: "furniture",
    animal: "cat",
    image: "https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sturdy sisal scratching post with attached toy to keep your cat entertained."
  }
];

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [animalFilter, setAnimalFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const animalMatch = animalFilter === "all" || product.animal === animalFilter;
    const categoryMatch = categoryFilter === "all" || product.category === categoryFilter;
    return animalMatch && categoryMatch;
  }).sort((a, b) => {
    if (sortBy === "price_low") {
      return a.price - b.price;
    } else if (sortBy === "price_high") {
      return b.price - a.price;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    // Default: featured (no specific sort)
    return 0;
  });

  // Animation variants
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const addToCart = (product: Product) => {
    console.log("Added to cart:", product);
    // Here you would implement actual cart functionality
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const animalParam = searchParams.get('animal');
    
    if (animalParam) {
      setAnimalFilter(animalParam);
      const element = document.getElementById('products');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Update effect to handle URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const animalParam = searchParams.get('animal');
    
    if (animalParam) {
      setAnimalFilter(animalParam);
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setAnimalFilter("all"); // Reset when no animal parameter
    }
  }, [location.search]); // Add location.search as dependency

  // Add handler for animal filter changes
  const handleAnimalChange = (value: string) => {
    setAnimalFilter(value);
    if (value === "all") {
      navigate("/shop");
    } else {
      navigate(`/shop?animal=${value}`);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Banner */}
        <motion.section 
          id="shop-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-animal-blue/10 to-animal-green/10 py-16"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Shop Premium Pet Products
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Discover our curated collection of high-quality products for all your pets' needs
            </motion.p>
          </div>
        </motion.section>
        
        {/* Products Section */}
        <section id="products" className="py-12">
          <div className="container mx-auto px-4">
            {/* Filter and Sort Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Tabs 
                value={animalFilter}
                onValueChange={handleAnimalChange}
                className="w-full" 
              >
                <TabsList className="w-full grid grid-cols-5">
                  <TabsTrigger value="all">All Pets</TabsTrigger>
                  <TabsTrigger value="dog">Dogs</TabsTrigger>
                  <TabsTrigger value="cat">Cats</TabsTrigger>
                  <TabsTrigger value="bird">Birds</TabsTrigger>
                  <TabsTrigger value="small_pet">Small Pets</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="toys">Toys</SelectItem>
                  <SelectItem value="bedding">Bedding</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="housing">Housing</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Separator className="my-6" />
            
            {/* Products Grid */}
            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <div className="overflow-hidden aspect-square relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8" 
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingCart className="h-5 w-5 text-animal-blue" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardHeader className="flex-grow">
                      <div className="flex items-center mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                          />
                        ))}
                        <span className="ml-1 text-xs text-gray-500">{product.rating.toFixed(1)}</span>
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-2 text-sm">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardFooter className="flex justify-between">
                      <span className="font-bold text-animal-blue">${product.price.toFixed(2)}</span>
                      <Button 
                        variant="outline" 
                        className="border-animal-green text-animal-green hover:bg-animal-green/10"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Empty state if no products match filters */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No products match your selected filters.</p>
                <Button 
                  className="mt-4 bg-animal-blue hover:bg-animal-blue/90"
                  onClick={() => {
                    setAnimalFilter("all");
                    setCategoryFilter("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Featured Categories */}
        <section id="categories" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-10"
            >
              Shop By Category
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { name: "Food & Treats", image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "food" },
                { name: "Toys & Playtime", image: "https://images.unsplash.com/photo-1576201836106-db1758785473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "toys" },
                { name: "Beds & Furniture", image: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "bedding" },
                { name: "Accessories", image: "https://images.unsplash.com/photo-1576637978143-01fdhcee2c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "accessories" }
              ].map((category, index) => (
                <motion.div 
                  key={category.name}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={() => setCategoryFilter(category.category)}
                >
                  <div className="rounded-xl overflow-hidden shadow-md h-48 md:h-64 relative group">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white font-bold text-lg md:text-xl p-4 w-full text-center">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Special Offer */}
        <motion.section 
          id="special-offers"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gradient-to-r from-animal-blue to-animal-green"
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Get 15% off your first order when you sign up for our newsletter!
            </p>
            <Button variant="secondary" size="lg">
              Shop Now
            </Button>
          </div>
        </motion.section>
        
        <Newsletter />
        <ChatWidget />
      </main>
      
      <Footer />
    </>
  );
};

export default Shop;
