import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality",
      description: "We never compromise on the quality of our products and services"
    },
    {
      icon: Eye,
      title: "Convenience",
      description: "Making shopping easy and accessible for all our customers"
    },
    {
      icon: Heart,
      title: "Variety",
      description: "Offering a wide range of products to meet diverse needs"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Customer-Focused",
      description: "We put our customers at the heart of everything we do"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Carefully selected products from trusted suppliers"
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Open when you need us most"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        backgroundImage="/images/2025-05-20 (1).webp"
        title="About Inzovu Supermarket"
        subtitle="Quality. Convenience. Variety."
      />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Story
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Inzovu Supermarket was founded with a simple mission: to make shopping 
                  easy and convenient for the local community. Located opposite Saint 
                  Ignatius Primary School on KG 19 Ave in Kigali, we have become a 
                  trusted destination for quality products and exceptional service.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What sets us apart is our commitment to offering imported fruits and 
                  vegetables, premium butchery services, and a carefully curated 
                  selection of groceries, wines, spirits, and everyday essentials.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that shopping should be a pleasant experience, which is 
                  why we've created a clean, organized, and welcoming environment 
                  where customers can find everything they need under one roof.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/2025-05-20 (2).webp" 
                  alt="Fresh produce section" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Mission & Values
          </h2>
          
          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To provide our community with access to quality products, exceptional 
              service, and a convenient shopping experience that makes everyday life easier.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <value.icon size={48} className="text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <feature.icon size={48} className="text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Inzovu Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today and discover why we're the preferred choice for quality shopping
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="mb-4">Opp. Saint Ignatius Primary School, KG 19 Ave, Kigali</p>
            <p className="text-lg font-semibold">📞 0795 303 013</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
