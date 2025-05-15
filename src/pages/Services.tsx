import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatWidget from "@/components/ChatWidget";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openFaqIndex, setIsOpen] = useState(-1);
  const [activeTab, setActiveTab] = useState('grooming');

  // Enhanced hash navigation effect
  useEffect(() => {
    const handleHash = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        
        // Check if it's a service tab first
        if (['grooming', 'training', 'veterinary', 'adoption', 'boarding'].includes(id)) {
          setActiveTab(id);
          // Scroll to services-overview section
          const servicesSection = document.getElementById('services-overview');
          if (servicesSection) {
            setTimeout(() => {
              servicesSection.scrollIntoView({ behavior: 'smooth' });
              // Activate the corresponding tab
              const tabTrigger = document.querySelector(`[data-state][value="${id}"]`);
              if (tabTrigger) {
                (tabTrigger as HTMLElement).click();
              }
            }, 100);
          }
        }
        // If it's FAQ section
        else if (id === 'faq' && element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHash();
    
    // Handle hash changes without page reload
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [location]);

  // Common handler for all "Book Now" buttons
  const handleBookNow = (service) => {
    toast({
      title: "Booking Requested",
      description: service
        ? `You're booking the ${service} service. We'll contact you shortly.`
        : "Thank you for your booking request. We'll contact you shortly.",
    });
  };

  // Handler for "Learn More" buttons
  const handleLearnMore = (service) => {
    toast({
      title: "More Information",
      description: `We'll send you detailed information about our ${service} service to your email.`,
    });
  };

  // Handler for "Select Plan" buttons
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    toast({
      title: "Plan Selected",
      description: `You've selected the ${plan} plan. Click 'Book Now' to proceed with this plan.`,
    });
  };

  const services = [
    {
      id: "grooming",
      name: "Professional Grooming",
      description: "Our skilled groomers provide bathing, haircuts, nail trimming, ear cleaning, and more to keep your pet looking and feeling their best.",
      features: [
        "Breed-specific styling",
        "Gentle handling techniques",
        "Premium grooming products",
        "De-shedding treatments",
        "Dental care options"
      ],
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3"
    },
    {
      id: "training",
      name: "Pet Training",
      description: "From basic obedience to behavior correction, our certified trainers use positive reinforcement methods to help your pet develop good habits.",
      features: [
        "Puppy socialization classes",
        "Basic obedience training",
        "Advanced command training",
        "Behavior modification",
        "One-on-one sessions available"
      ],
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3"
    },
    {
      id: "veterinary",
      name: "Veterinary Services",
      description: "Our network of qualified veterinarians provides preventative care, checkups, vaccinations, and treatment for common pet health issues.",
      features: [
        "Wellness examinations",
        "Vaccination programs",
        "Microchipping",
        "Nutritional counseling",
        "Minor medical treatments"
      ],
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb9b8f?ixlib=rb-4.0.3"
    },
    {
      id: "adoption",
      name: "Pet Adoption",
      description: "Find your perfect companion through our ethical adoption network that connects loving homes with pets in need.",
      features: [
        "Thorough matching process",
        "Pre-adoption counseling",
        "Post-adoption support",
        "Full medical history provided",
        "Adoption events"
      ],
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3"
    },
    {
      id: "boarding",
      name: "Pet Boarding",
      description: "When you're away, trust our comfortable, safe boarding facilities to provide attentive care and a home-like environment for your pet.",
      features: [
        "Climate-controlled facilities",
        "Daily exercise and playtime",
        "Medication administration",
        "24/7 supervision",
        "Webcam monitoring option"
      ],
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5 
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section id="services-hero" className="py-16 bg-gradient-to-r from-animal-blue/10 to-animal-green/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of professional pet services designed to
              keep your furry, feathered, or scaly friends healthy, happy, and thriving.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services-overview" className="py-16">
          <div className="container mx-auto px-4">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              defaultValue={location.hash ? location.hash.replace('#', '') : 'grooming'} 
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                  {services.map(service => (
                    <TabsTrigger 
                      key={service.id} 
                      value={service.id}
                      className="px-5 py-2"
                    >
                      {service.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {services.map(service => (
                <TabsContent key={service.id} value={service.id}>
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="rounded-2xl shadow-lg w-full h-96 object-cover"
                      />
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-animal-green mr-2">✓</span>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <Button 
                          className="bg-animal-blue hover:bg-animal-blue/90"
                          onClick={() => handleBookNow(service.name)}
                        >
                          Book Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-animal-green text-animal-green hover:bg-animal-green/10"
                          onClick={() => handleLearnMore(service.name)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* How It Works */}
        <section id="how-it-works" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Booking a service with Animals.Id is quick and easy. Follow these simple steps:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Choose a Service",
                  description: "Browse our range of professional pet services and select the one that's right for your pet.",
                  color: "blue"
                },
                {
                  step: "2",
                  title: "Book an Appointment",
                  description: "Select a convenient date and time from our online calendar.",
                  color: "green"
                },
                {
                  step: "3",
                  title: "Complete Profile",
                  description: "Fill in your pet's details to help us provide the best possible care.",
                  color: "coral"
                },
                {
                  step: "4",
                  title: "Service Delivery",
                  description: "Bring your pet in or welcome our mobile service, depending on the option you choose.",
                  color: "yellow"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-animal-${step.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Plans */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-white to-animal-blue/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Next-Level Service Packages</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose the perfect experience for your furry friend — from essentials to VIP luxury. Every package includes love, care, and a tail-wagging guarantee.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  name: "Essentials",
                  price: "$49",
                  tagline: "Everything they need to feel great",
                  features: [
                    "Gentle grooming basics",
                    "Nail trim & ear cleaning",
                    "Vet-approved pet bath",
                    "Friendly 1-on-1 care"
                  ],
                  color: "blue",
                  badge: null
                },
                {
                  name: "Pampered Paws",
                  price: "$99",
                  tagline: "Luxury care your pet will love",
                  features: [
                    "Designer coat styling",
                    "Teeth brushing + spa bath",
                    "Pawdicure & coat conditioning",
                    "Relaxation music therapy",
                    "Free bandana or bowtie"
                  ],
                  color: "green",
                  badge: "Most Loved"
                },
                {
                  name: "Royal Companion",
                  price: "$149",
                  tagline: "The red carpet treatment",
                  features: [
                    "Everything in Pampered Paws",
                    "Vet checkup on-site",
                    "Customized nutrition treats",
                    "Live webcam updates",
                    "Chauffeur pickup (select areas)",
                    "Next-day grooming guarantee"
                  ],
                  color: "coral",
                  badge: "VIP Exclusive"
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`
                    relative bg-white rounded-3xl shadow-xl p-8 border-2 transition-all duration-300 flex flex-col h-full
                    ${selectedPlan === plan.name ? `ring-4 ring-animal-${plan.color}` : 'hover:scale-105'}
                  `}
                >
                  {plan.badge && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-animal-${plan.color} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-animal-gray font-medium mb-6">{plan.tagline}</p>

                  <div className="flex justify-center items-baseline mb-6">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="ml-2 text-gray-500 text-lg">/session</span>
                  </div>

                  <ul className="text-left space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`text-animal-${plan.color} mr-2 mt-1`}>✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full text-white bg-animal-${plan.color} hover:bg-animal-${plan.color}/90 mt-auto`}
                    onClick={() => handleSelectPlan(plan.name)}
                  >
                    {selectedPlan === plan.name ? "Selected ✔" : "Select Plan"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our pet services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6 perspective-1000">
              {[
                {
                  id: "grooming-faq",
                  question: "How often should I groom my pet?",
                  answer: "The frequency of grooming depends on your pet's breed, coat type, and lifestyle. Generally, most dogs benefit from professional grooming every 4-6 weeks, while cats may require less frequent sessions. Our experts can recommend a personalized grooming schedule during your first appointment.",
                  color: "blue"
                },
                {
                  id: "mobile-services-faq",
                  question: "Do you offer mobile services?",
                  answer: "Yes, we offer mobile grooming and basic veterinary services in select areas. This is perfect for pets who experience anxiety in new environments or for owners with busy schedules. Check our service area on the booking page or contact us to inquire about mobile service availability in your location.",
                  color: "green"
                },
                {
                  id: "basic-package-faq",
                  question: "What's included in a basic grooming package?",
                  answer: "Our basic grooming package includes a bath with standard shampoo, blow-dry, brush-out, nail trimming, ear cleaning, and a light trim if needed. Additional services like de-shedding treatments, specialized skin treatments, or creative styling can be added for an extra charge.",
                  color: "coral"
                },
                {
                  id: "first-session-faq",
                  question: "How do I prepare my pet for their first grooming session?",
                  answer: "To prepare your pet for their first grooming session, we recommend getting them comfortable with being touched on their paws, ears, and face. A light brushing routine at home can also help acclimate them to the grooming process. Arrive a few minutes early to complete any necessary paperwork and allow your pet to become familiar with the environment.",
                  color: "yellow"
                },
                {
                  id: "health-services-faq",
                  question: "What health services do you offer?",
                  answer: "Through our partner veterinary network, we offer wellness exams, vaccinations, microchipping, preventative care consultations, and treatment for minor ailments. For more serious medical conditions, we can refer you to specialized veterinary hospitals within our network.",
                  color: "purple"
                }
              ].map((item, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <div 
                    key={index}
                    id={item.id}
                    className={`bg-white rounded-lg shadow-sm overflow-hidden transform-gpu transition-all duration-500 ease-out`}
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: isOpen ? "translateZ(30px) rotateX(2deg)" : "translateZ(0px)",
                      boxShadow: isOpen ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : ""
                    }}
                    onClick={() => setIsOpen(isOpen ? -1 : index)}
                  >
                    <div 
                      className={`p-6 cursor-pointer flex justify-between items-center relative overflow-hidden`}
                      style={{
                        background: isOpen ? `linear-gradient(to right, var(--animal-${item.color})/10, transparent)` : "",
                        borderLeft: isOpen ? `4px solid var(--animal-${item.color})` : ""
                      }}
                    >
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? `text-animal-${item.color}` : "text-gray-800"}`}>
                        {item.question}
                      </h3>
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full ${isOpen ? `bg-animal-${item.color} text-white` : "bg-gray-200"}`}
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      
                      {/* Decorative elements */}
                      {isOpen && (
                        <>
                          <div 
                            className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5"
                            style={{ 
                              background: `var(--animal-${item.color})`,
                              transformOrigin: "top right"
                            }}
                          />
                          <div 
                            className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full opacity-5"
                            style={{ 
                              background: `var(--animal-${item.color})`,
                              transformOrigin: "bottom left"
                            }}
                          />
                        </>
                      )}
                    </div>
                    
                    <div
                      className="overflow-hidden"
                      style={{ 
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0 
                      }}
                    >
                      <div 
                        className="p-6 pt-0 text-gray-600"
                        style={{ 
                          transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                          opacity: isOpen ? 1 : 0 
                        }}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div 
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-animal-blue/5"
            style={{ 
              transform: "translateZ(-50px)"
            }}
          />
          <div 
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-animal-green/5"
            style={{ 
              transform: "translateZ(-70px)"
            }}
          />
        </section>
        
        {/* CTA Section */}
        <section id="book-now" className="py-16 bg-gradient-to-r from-animal-blue to-animal-green">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Book a Service?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Schedule an appointment today and give your pet the professional care they deserve.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => handleBookNow(undefined)}
            >
              Book Now
            </Button>
          </div>
        </section>
        
        <Newsletter />
      </main>
      
      <Footer />
      
      {/* Chat Widget */}
      <ChatWidget />
    </>
  );
};

export default Services;