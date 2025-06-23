import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Beef, Wine, Zap, ShoppingBasket, Package } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: Apple,
      title: "Imported Fruits & Vegetables",
      description: "Fresh, premium quality fruits and vegetables sourced from around the world. From exotic tropical fruits to everyday essentials, we ensure freshness and quality in every product.",
      features: ["Fresh daily deliveries", "Organic options available", "Seasonal specialties", "Quality guaranteed"],
      image: "/images/2025-05-20 (3).webp"
    },
    {
      icon: Beef,
      title: "Premium Butchery",
      description: "Our butchery section offers the finest cuts of meat and poultry. All our meat products are carefully selected and prepared by experienced butchers to ensure quality and freshness.",
      features: ["Fresh meat daily", "Custom cuts available", "Halal certified options", "Frozen selections"],
      image: "/images/2025-05-20 (4).webp"
    },
    {
      icon: Wine,
      title: "Wines & Spirits",
      description: "A carefully curated selection of wines, spirits, and beverages for every occasion. From local favorites to international brands, we have something for every taste and budget.",
      features: ["Local and imported brands", "Wide price range", "Special occasion selections", "Expert recommendations"],
      image: "/images/2025-05-20 (5).webp"
    },
    {
      icon: Zap,
      title: "Electricals & Stationary",
      description: "Essential electronics and office supplies for your home and work needs. From batteries and cables to notebooks and pens, we have all your technical and stationary requirements.",
      features: ["Electronic accessories", "Office supplies", "School materials", "Home essentials"],
      image: "/images/2025-05-20 (6).webp"
    },
    {
      icon: ShoppingBasket,
      title: "General Groceries",
      description: "Complete range of everyday grocery items including rice, flour, cooking oil, spices, canned goods, and household essentials. Everything you need for your daily cooking and household needs.",
      features: ["Bulk buying options", "Local and imported brands", "Competitive prices", "Quality assurance"],
      image: "/images/2025-05-20 (7).webp"
    },
    {
      icon: Package,
      title: "Household Essentials",
      description: "Cleaning supplies, personal care items, and household necessities. From detergents and soaps to personal hygiene products, we stock all the essentials for modern living.",
      features: ["Cleaning products", "Personal care items", "Laundry supplies", "Hygiene essentials"],
      image: "/images/2025-05-20 (8).webp"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        backgroundImage="/images/2025-05-20 (9).webp"
        title="Products & Services"
        subtitle="Everything you need under one roof"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Shopping Solution
            </h2>
            <p className="text-lg text-gray-600">
              At Inzovu Supermarket, we offer a comprehensive range of products to meet 
              all your shopping needs. From fresh produce to household essentials, 
              we ensure quality and convenience in every aisle.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <category.icon size={48} className="text-red-600 mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBasket className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Bulk Orders</h3>
                <p className="text-gray-600">Special pricing for bulk purchases and wholesale orders</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Special Orders</h3>
                <p className="text-gray-600">Can't find what you need? We can special order items for you</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fresh Guarantee</h3>
                <p className="text-gray-600">100% satisfaction guarantee on all fresh products</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shop?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today and experience our wide selection of quality products
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Visit Our Store
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
