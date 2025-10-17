import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { properties, groupPropertiesByCity } from "@/data/properties";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProperties = selectedCategory
    ? properties.filter((p) => p.category === selectedCategory)
    : properties;
  
  const propertiesByCity = selectedCategory
    ? filteredProperties.reduce((acc, property) => {
        const city = property.location.split(", ").pop() || "";
        if (!acc[city]) {
          acc[city] = [];
        }
        acc[city].push(property);
        return acc;
      }, {} as Record<string, typeof properties>)
    : groupPropertiesByCity();
  
  const cities = Object.keys(propertiesByCity);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      {/* Property Listings */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {selectedCategory && (
          <h2 className="text-3xl font-bold text-foreground mb-8 capitalize">
            {selectedCategory.replace("-", " ")} Properties
          </h2>
        )}
        {cities.length === 0 && selectedCategory && (
          <p className="text-center text-muted-foreground py-12">
            No properties found in this category. Try another category!
          </p>
        )}
        {cities.map((city) => (
          <section 
            key={city} 
            id={city.toLowerCase().replace(/\s+/g, '-')} 
            className="mb-12 scroll-mt-24"
          >
            <Link 
              to={`/city/${encodeURIComponent(city)}`}
              className="block group"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors cursor-pointer">
                Places to stay in {city}
              </h2>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {propertiesByCity[city].map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  rating={property.rating}
                  reviewCount={property.reviewCount}
                  price={property.price}
                  imageUrl={property.imageUrl}
                  isNew={property.isNew}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
