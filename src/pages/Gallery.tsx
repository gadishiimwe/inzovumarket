import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/images/2025-05-20.webp",
      alt: "Inzovu Supermarket Storefront",
      caption: "Our welcoming storefront - your neighborhood supermarket"
    },
    {
      src: "/images/2025-05-20 (1).webp",
      alt: "Interior Shelves with Products",
      caption: "Well-organized aisles with a wide variety of products"
    },
    {
      src: "/images/2025-05-20 (2).webp",
      alt: "Checkout Area",
      caption: "Modern checkout area for quick and efficient service"
    },
    {
      src: "/images/2025-05-20 (3).webp",
      alt: "Fresh Produce Section",
      caption: "Fresh fruits and vegetables section with premium quality products"
    },
    {
      src: "/images/2025-05-20 (4).webp",
      alt: "More Aisles",
      caption: "Aisles stocked with a variety of groceries and essentials"
    },
    {
      src: "/images/2025-05-20 (5).webp",
      alt: "Fruits and Veggies",
      caption: "Colorful and fresh produce on display"
    },
    {
      src: "/images/2025-05-20 (6).webp",
      alt: "Household and Electricals",
      caption: "Household essentials and electricals section"
    },
    {
      src: "/images/2025-05-20 (7).webp",
      alt: "Stationary and Office Supplies",
      caption: "Stationary and office supplies for all your needs"
    },
    {
      src: "/images/2025-05-20 (8).webp",
      alt: "Checkout Counter",
      caption: "Checkout counter with friendly staff"
    },
    {
      src: "/images/2025-05-28.webp",
      alt: "Store Overview",
      caption: "A wide view of the supermarket interior"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        backgroundImage="/images/2025-05-28.webp"
        title="Gallery"
        subtitle="Take a visual tour of our supermarket"
      />

      {/* Gallery Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See Our Store in Action
            </h2>
            <p className="text-lg text-gray-600">
              Take a visual journey through Inzovu Supermarket. From our welcoming 
              storefront to our well-organized aisles, see why customers love shopping with us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">Click to view</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Store Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/2025-05-20 (5).webp" 
                  alt="Fresh Produce" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Produce Section</h3>
              <p className="text-gray-600">
                Our produce section features imported fruits and vegetables, 
                ensuring freshness and quality every day.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/2025-05-20 (4).webp" 
                  alt="Product Aisles" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Well-Organized Aisles</h3>
              <p className="text-gray-600">
                Our spacious aisles are thoughtfully organized to make 
                shopping convenient and efficient.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/images/2025-05-20 (2).webp" 
                  alt="Checkout Area" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Checkout</h3>
              <p className="text-gray-600">
                Quick and efficient checkout process with modern equipment 
                and friendly service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Image" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
