import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const location = useLocation();

  // Enhanced hash navigation effect
  useEffect(() => {
    const handleHash = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [location]);

  const teamMembers = [
    {
      name: "Chaerudin Saputra",
      role: "CEO",
      bio: "Veterinarian with over 15 years of experience and a passion for improving pet care accessibility.",
      image: "/assets/img/team-heru.jpeg"
    },
    {
      name: "Adrian Halim",
      role: "Founder & CTO",
      bio: "Tech innovator focused on creating seamless digital experiences for pet owners worldwide.",
      image: "/assets/img/team-adrian.jpeg"
    },
    {
      name: "Kirana",
      role: "COO",
      bio: "Former pet shop owner with deep knowledge of high-quality pet products and customer needs.",
      image: "/assets/img/team-kirana.jpeg"
    },
  ];

  const veterinarians = [
    {
      name: "Dr. Sarah Martinez",
      role: "Senior Veterinarian",
      speciality: "Small Animals & Exotic Pets",
      experience: "12 years",
      bio: "Specialized in treating both common pets and exotic animals, with expertise in preventive care.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3",
      schedule: "Mon-Fri",
      certifications: ["ACVIM", "ABVP"]
    },
    {
      name: "Dr. James Wilson",
      role: "Veterinary Surgeon",
      speciality: "Surgery & Orthopedics",
      experience: "15 years",
      bio: "Expert in complex surgeries and orthopedic procedures for all pet sizes.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3",
      schedule: "Tue-Sat",
      certifications: ["ACVS", "ACVECC"]
    }
  ];

  const groomers = [
    {
      name: "Emma Thompson",
      role: "Master Groomer",
      speciality: "Show Dog Grooming",
      experience: "8 years",
      bio: "Specialized in show dog grooming and breed-specific styling techniques.",
      image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3",
      schedule: "Wed-Sun",
      specializations: ["Show Preparation", "Breed Standards"]
    },
    {
      name: "Michael Chen",
      role: "Professional Groomer",
      speciality: "Cat Grooming Specialist",
      experience: "6 years",
      bio: "Expert in handling cats and specialized grooming techniques for felines.",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3",
      schedule: "Mon-Fri",
      specializations: ["Feline Specialist", "Anxiety-Free Grooming"]
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Navbar />
        
        <main className="pt-16">
          {/* Hero Section */}
          <motion.section 
            className="py-12 bg-gradient-to-r from-animal-blue/10 to-animal-green/10 overflow-hidden"
            variants={pageVariants}
          >
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  variants={cardVariants}
                >
                  About Animals.Id
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-600"
                  variants={cardVariants}
                >
                  We're on a mission to revolutionize pet care by providing premium products,
                  expert services, and educational resources to pet owners worldwide.
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Update existing sections with new animations */}
          <motion.section 
            id="story"
            className="py-16"
            variants={pageVariants}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div 
                  className="w-full md:w-1/2"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3" 
                    alt="Our Team with Pets" 
                    className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
                  />
                </motion.div>
                
                <motion.div 
                  className="w-full md:w-1/2"
                  variants={cardVariants}
                >
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Animals.Id was born out of a university course, Technology-Based Entrepreneurship. The idea came from a personal story—my uncle, a freelance pet groomer, served many loyal clients, but his business remained limited in reach and scale.
                  </p>
                  <p className="text-gray-600 mb-4">
                    This sparked a simple question:
                    "What if we could connect pet services with technology to reach more people?"

                    That question became the foundation of Animals.Id—a platform that combines pet grooming, training, veterinary care, adoption services, and an online pet store into one seamless experience.
                  </p>
                  <p className="text-gray-600 mb-8">
                    What started as a class project turned into something bigger. With support from mentors and hard work, Animals.Id was selected as one of the top projects and received funding from the university.

                    Now, we're building a digital ecosystem to make pet care easier, more accessible, and more empowering—for both pet owners and professionals.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => {
                        const element = document.getElementById('team');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }} 
                      className="bg-animal-blue hover:bg-animal-blue/90"
                    >
                      Meet Our Team
                    </Button>
                    <Button 
                      onClick={() => {
                        const element = document.getElementById('values');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      variant="outline" 
                      className="border-animal-green text-animal-green hover:bg-animal-green/10"
                    >
                      Our Values
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision Section */}
          <motion.section 
            id="mission"
            className="py-16 bg-gray-50"
            variants={pageVariants}
          >
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Guided by our core values, we strive to make a positive impact in the world of pet care.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div 
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <h3 className="text-2xl font-bold mb-4 text-animal-blue">Our Mission</h3>
                  <p className="text-gray-600">
                    To enhance the bond between pets and their owners by providing accessible, high-quality products and services
                    that support the health, happiness, and well-being of animals everywhere.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <h3 className="text-2xl font-bold mb-4 text-animal-green">Our Vision</h3>
                  <p className="text-gray-600">
                    To create a world where every pet receives the best possible care, and where pet ownership
                    is a rewarding, enriching experience accessible to all who desire the companionship of animals.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
          
          {/* Our Values Section */}
          <motion.section 
            id="values"
            className="py-16"
            variants={pageVariants}
          >
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  These principles guide everything we do at Animals.Id, from product selection to customer service.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Quality",
                    description: "We never compromise on the quality of products and services we offer to your pets.",
                    icon: "⭐",
                    color: "blue"
                  },
                  {
                    title: "Compassion",
                    description: "We believe in treating all animals with kindness, respect, and the highest level of care.",
                    icon: "❤️",
                    color: "coral"
                  },
                  {
                    title: "Education",
                    description: "We're committed to helping pet owners make informed decisions through reliable resources.",
                    icon: "📚",
                    color: "green"
                  },
                  {
                    title: "Innovation",
                    description: "We continuously seek new ways to improve the pet care experience through technology.",
                    icon: "💡",
                    color: "yellow"
                  }
                ].map((value, index) => (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover="hover"
                    className="text-center p-6 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-animal-${value.color}/10 flex items-center justify-center`}>
                      <span className="text-3xl">{value.icon}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 text-animal-${value.color}`}>{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          
          {/* Update Team Section with 3D Card effect */}
          {/* Update Team Section with 3D Card effect */}
<motion.section 
  id="team"
  className="py-16 bg-gray-50"
  variants={pageVariants}
>
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Passionate professionals dedicated to improving the lives of pets and their owners.
      </p>
    </motion.div>
    
    {/* Change this grid to have 3 columns instead of 4, and add mx-auto to center it */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {teamMembers.map((member, index) => (
        <motion.div 
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-lg"
          variants={cardVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
          style={{
            perspective: "1000px"
          }}
        >
          <motion.div
            whileHover={{
              rotateY: 10,
              rotateX: 10,
              transition: { duration: 0.3 }
            }}
            className="relative h-full"
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-animal-blue mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


          {/* Veterinarians Section */}
          <motion.section 
            className="py-16 bg-gray-50"
            variants={pageVariants}
          >
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Our Veterinary Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Expert veterinarians committed to providing the highest quality care for your pets.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {veterinarians.map((vet, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg group"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="relative h-72 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img 
                          src={vet.image} 
                          alt={vet.name} 
                          className="w-full h-full object-cover"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {vet.certifications.map((cert, i) => (
                          <span key={i} className="inline-block px-3 py-1 mr-2 mb-2 bg-animal-blue/80 rounded-full text-sm">
                            {cert}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{vet.name}</h3>
                          <p className="text-animal-blue">{vet.role}</p>
                        </div>
                        <span className="px-3 py-1 bg-animal-green/10 text-animal-green rounded-full text-sm">
                          {vet.schedule}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{vet.bio}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {vet.experience} Experience
                        </span>
                        <Button 
                          variant="outline"
                          className="border-animal-blue text-animal-blue hover:bg-animal-blue/10"
                          onClick={() => {}}
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Groomers Section with Parallax Effect */}
          <motion.section 
            className="py-16 relative overflow-hidden"
            variants={pageVariants}
          >
            <motion.div 
              className="absolute inset-0 opacity-10"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="container mx-auto px-4 relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Professional Groomers</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Expert groomers who understand the unique needs of every pet.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {groomers.map((groomer, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg group"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ translateY: -10 }}
                  >
                    <div className="relative">
                      <div className="relative h-72 overflow-hidden">
                        <motion.img 
                          src={groomer.image} 
                          alt={groomer.name} 
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        {groomer.specializations.map((spec, i) => (
                          <span key={i} className="inline-block px-3 py-1 mr-2 mb-2 bg-animal-coral/80 rounded-full text-sm">
                            {spec}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                    <motion.div 
                      className="p-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{groomer.name}</h3>
                          <p className="text-animal-coral">{groomer.role}</p>
                        </div>
                        <span className="px-3 py-1 bg-animal-green/10 text-animal-green rounded-full text-sm">
                          {groomer.schedule}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{groomer.bio}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {groomer.experience} Experience
                        </span>
                        <Button 
                          variant="outline"
                          className="border-animal-coral text-animal-coral hover:bg-animal-coral/10"
                          onClick={() => {}}
                        >
                          Book Session
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Join Us Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 bg-gradient-to-r from-animal-blue to-animal-green"
          >
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="max-w-2xl mx-auto mb-8">
                We're always looking for passionate people to join our team and help us 
                improve the lives of pets and their owners.
              </p>
              <Button variant="secondary" size="lg">
                View Career Opportunities
              </Button>
            </div>
          </motion.section>
          
          <Newsletter />
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
