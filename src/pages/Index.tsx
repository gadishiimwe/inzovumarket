import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Apple, Beef, Wine, Zap, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const productCategories = [
    {
      icon: Apple,
      title: "Imported Fruits & Vegetables",
      description: "Fresh, quality produce from around the world",
      color: "text-green-600"
    },
    {
      icon: Beef,
      title: "Quality Butchery",
      description: "Premium cuts of fresh meat and poultry",
      color: "text-red-600"
    },
    {
      icon: Wine,
      title: "Wines & Spirits",
      description: "Carefully selected alcoholic beverages",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Electricals & Stationary",
      description: "Electronics and office supplies",
      color: "text-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mukamana",
      text: "The best supermarket in the area! Fresh products and friendly service.",
      rating: 5
    },
    {
      name: "Jean Baptiste",
      text: "Great selection of imported fruits. Very convenient location.",
      rating: 5
    },
    {
      name: "Marie Claire",
      text: "Quality products at affordable prices. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/2025-05-20.webp"
        title="Welcome to Inzovu Supermarket"
        subtitle="We Make Shopping Easy"
        height="lg"
      >
        <Link to="/products">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore Our Products
          </Button>
        </Link>
      </Hero>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Local Supermarket
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Inzovu Supermarket, we pride ourselves on offering the finest selection 
              of products to meet all your daily needs. From fresh imported fruits to 
              quality meats and everything in between, we make shopping easy and convenient.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                <p className="text-gray-600">Carefully selected items for your satisfaction</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Convenience</h3>
                <p className="text-gray-600">Easy shopping experience every time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Variety</h3>
                <p className="text-gray-600">Wide selection to meet all your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <category.icon size={48} className={`${category.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
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
            Visit Our Store Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the convenience of shopping at Inzovu Supermarket
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
                Get Directions
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
