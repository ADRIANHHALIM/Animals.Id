import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Index = () => {
  // For SEO purposes - updating document title and meta description
  useEffect(() => {
    document.title = "Animals.Id | Premium Pet Products & Services";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Animals.Id - Your one-stop destination for premium pet products, professional services, and expert advice to ensure your pets live their best lives.");
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Promo Banner */}
        <section className="py-10 bg-animal-coral/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-white shadow-md">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">First-Time Customer Special</h2>
                <p className="text-gray-600">
                  Get 15% off your first order with code <span className="font-bold">WELCOME15</span>
                </p>
              </div>
              <Button className="bg-animal-coral hover:bg-animal-coral/90">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
        
        <Categories />
        
        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most popular pet products, handpicked for quality and value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  id: "1",
                  name: "Premium Dog Food",
                  price: 49.99,
                  rating: 4.8,
                  category: "Dog Food",
                  image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  color: "blue"
                },
                {
                  id: "2",
                  name: "Interactive Cat Toy",
                  price: 24.99,
                  rating: 4.7,
                  category: "Cat Toys",
                  image: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  color: "green"
                },
                {
                  id: "3",
                  name: "Cozy Pet Bed",
                  price: 39.99,
                  rating: 4.6,
                  category: "Bedding",
                  image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  color: "coral"
                },
                {
                  id: "4",
                  name: "Adjustable Harness",
                  price: 29.99,
                  rating: 4.9,
                  category: "Accessories",
                  image: "https://images.unsplash.com/photo-1567612529009-ded21eb4458c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  color: "yellow"
                }
              ].map((product, index) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group"
                  style={{ 
                    transform: "translateY(0)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease" 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image || "https://via.placeholder.com/300"} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 bg-white rounded-full shadow-md hover:bg-animal-blue/10"
                        onClick={() => console.log(`Quick add to cart: ${product.name}`)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-animal-blue">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill={i < Math.floor(product.rating) ? "#FFB800" : "none"} 
                          stroke={i < Math.floor(product.rating) ? "#FFB800" : "#E2E8F0"} 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{product.rating.toFixed(1)}</span>
                    </div>
                    
                    <span className={`text-sm text-animal-${product.color} mb-1 block`}>
                      {product.category}
                    </span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-animal-blue transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`border-animal-${product.color} text-animal-${product.color} hover:bg-animal-${product.color}/10 transition-all duration-300 hover:scale-105`}
                        onClick={() => console.log(`Added to cart: ${product.name}`)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-animal-blue text-animal-blue hover:bg-animal-blue/10 transition-all duration-300 hover:scale-105 hover:shadow-md"
                onClick={() => window.location.href = '/shop'}
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>

        
        <Testimonials />
        
        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-animal-blue/5 to-animal-green/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Pet Parents Choose Animals.Id</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied pet owners who trust us with their beloved companions' needs. Here's why Animals.Id stands out from the crowd:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Veterinarian-Approved Selection",
                  description: "Every product in our catalog undergoes rigorous evaluation by our team of certified veterinarians and pet care specialists.",
                  icon: "👨‍⚕️",
                  color: "blue"
                },
                {
                  title: "Happiness Guarantee",
                  description: "If you or your pet aren't completely satisfied, we offer hassle-free returns and a 100% money-back guarantee on all purchases.",
                  icon: "🏆",
                  color: "green"
                },
                {
                  title: "Same-Day Delivery",
                  description: "Emergency pet supplies? Our premium delivery service ensures your essentials arrive when you need them most.",
                  icon: "🚚",
                  color: "coral"
                },
                {
                  title: "24/7 Pet Expert Access",
                  description: "Our dedicated team of pet care specialists is available around the clock to answer questions and provide tailored recommendations.",
                  icon: "💬",
                  color: "yellow"
                },
                {
                  title: "Sustainable & Ethical Standards",
                  description: "We partner exclusively with brands that meet our strict criteria for animal welfare, ingredient sourcing, and environmental impact.",
                  icon: "🌱",
                  color: "purple"
                },
                {
                  title: "Paws-itive Impact Program",
                  description: "With every purchase, 5% goes directly to our network of animal shelters and rescue organizations, helping pets in need find forever homes.",
                  icon: "❤️",
                  color: "blue"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`mr-4 flex-shrink-0 w-12 h-12 rounded-full bg-animal-${item.color}/10 flex items-center justify-center`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 text-animal-${item.color}`}>{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-animal-blue hover:bg-animal-blue/90">
                Join Our Community
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pet Care Tips & Articles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay informed with the latest pet care advice, tips, and trending topics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Learn the Benefits of Pets for the Environment",
                  excerpt: "EYou can learn to be responsible or eliminate loneliness. In fact, pets are also very good for children's development to learn about emotional and social skills.",
                  category: "Pet Care",
                  image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3",
                  color: "blue",
                  url: "https://www.halodoc.com/artikel/ketahui-manfaat-hewan-peliharaan-bagi-lingkungan?srsltid=AfmBOoqMhP6TnB60c9eFAsh28iRLA2BlTinNH_ol4OfYBnVWZ94p4JZB"
                },
                {
                  title: "Know Your Cat's Mood From Its Tail Movement",
                  excerpt: "Cats often communicate their feelings, from joy, curiosity, to fear or anger, through their tail movements.",
                  category: "Cat Behavior",
                  image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3",
                  color: "green",
                  url: "https://www.ruparupa.com/ms/artikel-ketahui-mood-kucing"
                },
                {
                  title: "5 Considerations Before Adopting a Dog",
                  excerpt: "Having a pet will certainly provide its own pleasure at home. One of the animals that is suitable to be a friend and a house guard is a dog.",
                  category: "Dog Adoption",
                  image: "https://images.unsplash.com/photo-1541599468348-e96984315921?ixlib=rb-4.0.3",
                  color: "coral",
                  url: "https://www.ruparupa.com/blog/pertimbangan-sebelum-adopsi-anjing/"
                }
              ].map((post, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-md group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-2">
                      <span className={`text-sm font-medium text-animal-${post.color} px-2.5 py-0.5 rounded-full bg-animal-${post.color}/10`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">
                        {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3 group-hover:text-animal-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto pt-4">
                      <Button 
                        variant="outline" 
                        className={`border-animal-${post.color} text-animal-${post.color} hover:bg-animal-${post.color}/10 transition-all duration-300 hover:scale-105`}
                        onClick={() => window.open(post.url, '_blank')}
                      >
                        Read Full Article
                      </Button>
                      
                      <div className={`w-8 h-8 rounded-full bg-animal-${post.color}/10 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110`}
                          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(post.url)}&text=${encodeURIComponent(post.title)}`, '_blank', 'width=550,height=420')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-animal-${post.color}`}>
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-animal-blue text-animal-blue hover:bg-animal-blue/10 transition-all duration-300 hover:scale-105 hover:shadow-md"
                onClick={() => window.open('https://www.petmd.com/dog/care/evr_dg_tips_for_taking_care_of_your_pet', '_blank')}
              >
                Visit Our Blog
              </Button>
            </div>
          </div>
        </section>


        
        <Newsletter />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
