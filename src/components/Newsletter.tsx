
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send this to your backend
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-animal-blue/20 via-animal-green/20 to-animal-coral/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Pet Care Tips</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive pet care tips, product updates, and special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="bg-animal-coral hover:bg-animal-coral/90">
              Subscribe
            </Button>
          </form>
          
          <div className="mt-6 text-sm text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Animals.Id.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
