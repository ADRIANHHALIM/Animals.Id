import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/sonner";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const EMAIL_TEMPLATE = `
Subject: Inquiry about Animal Services

Hi Animals.id team,

I'm interested in learning more about your services.

Best regards,
[Your Name]
`;

const WHATSAPP_MESSAGE = `Hi Animals.id team! I would like to know more about your services.`;

const GMAPS_LOCATION = "https://www.google.com/maps?q=Jakarta+Indonesia";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      toast.success("Message sent successfully! We'll be in touch soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "team.animals.id@gmail.com",
      link: `mailto:team.animals.id@gmail.com?subject=Inquiry about Animal Services&body=${encodeURIComponent(EMAIL_TEMPLATE)}`,
    },
    {
      icon: MessageCircle, // Changed from Phone to MessageCircle for WhatsApp
      title: "WhatsApp Us",
      info: "+62 81287928805",
      link: `https://wa.me/6281287928805?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Jakarta, Indonesia",
      link: GMAPS_LOCATION,
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com",
      color: "bg-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com",
      color: "bg-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com",
      color: "bg-sky-500",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Background decorations */}
        <div className="absolute w-full max-w-6xl mx-auto inset-0 -z-10">
          <div className="absolute top-32 left-10 w-72 h-72 bg-animal-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-10 w-72 h-72 bg-animal-green/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help! 
              Fill out the form below or contact us directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us how we can help..." 
                                className="min-h-32" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-animal-blue hover:bg-animal-blue/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-3 rounded-full bg-animal-blue/10 text-animal-blue hover:bg-animal-blue/20"
                    onClick={() => window.open(item.link, '_blank')}
                    title={`${item.title} - Click to open`}
                  >
                    <item.icon size={24} />
                  </Button>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className="text-gray-600">{item.info}</span>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-6">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${social.color} text-white hover:opacity-90 transition-opacity`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-8">
                <Card className="border-0 bg-animal-green/10 overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                    <div className="space-y-2">
                      {[
                        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                        { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                        { day: "Sunday", hours: "Closed" },
                      ].map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{schedule.day}</span>
                          <span>{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65294571607!2d106.75945245!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
