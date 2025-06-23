import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        backgroundImage="/images/2025-05-20.webp"
        title="Contact Us"
        subtitle="We're here to help and answer any questions"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Phone className="text-red-600 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">0795 303 013</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <MapPin className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  Opp. Saint Ignatius Primary School, KG 19 Ave, Kigali
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Mail className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">info@inzovu.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <MessageCircle className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600">Message us directly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?"
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Store Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Store Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-red-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">
                          Opposite Saint Ignatius Primary School<br />
                          KG 19 Ave, Kigali, Rwanda
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="text-green-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Opening Hours</h4>
                        <div className="text-gray-600">
                          <p>Monday - Saturday: 7:00 AM - 9:00 PM</p>
                          <p>Sunday: 8:00 AM - 8:00 PM</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="text-blue-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Contact</h4>
                        <p className="text-gray-600">0795 303 013</p>
                        <p className="text-gray-600">info@inzovu.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      title="Saint Ignatius Primary School Map"
                      src="https://www.google.com/maps?q=Saint+Ignatius+Primary+School,+KG+19+Ave,+Kigali,+Rwanda&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white"
                      asChild
                    >
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Saint+Ignatius+Primary+School,+KG+19+Ave,+Kigali,+Rwanda"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Come experience the convenience of shopping at Inzovu Supermarket
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Call Now: 0795 303 013
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
