import { useParams, Link } from "react-router-dom";
import { ArrowLeft, SlidersHorizontal, DollarSign, MapPin, Star } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import PropertyMap from "@/components/PropertyMap";
import Footer from "@/components/Footer";
import { groupPropertiesByCity } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const CityProperties = () => {
  const { city } = useParams<{ city: string }>();
  const propertiesByCity = groupPropertiesByCity();
  const cityProperties = city ? propertiesByCity[city] : [];
  
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState<string>("all");
  const [hoveredPropertyId, setHoveredPropertyId] = useState<string | null>(null);

  // Filter properties based on selected filters
  const filteredProperties = cityProperties.filter(property => {
    let matchesPrice = true;
    let matchesRating = true;

    if (priceFilter !== "all") {
      if (priceFilter === "low") matchesPrice = property.price < 150;
      else if (priceFilter === "medium") matchesPrice = property.price >= 150 && property.price <= 300;
      else if (priceFilter === "high") matchesPrice = property.price > 300;
    }

    if (ratingFilter !== "all") {
      matchesRating = property.rating >= parseFloat(ratingFilter);
    }

    return matchesPrice && matchesRating;
  });

  if (!city || !cityProperties.length) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground mb-4">
              No properties found for this location
            </h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6 shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Places to stay in {city}
              </h1>
              <p className="text-lg text-muted-foreground">
                Over {cityProperties.length} homes available
              </p>
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              Prices include all fees
            </Badge>
          </div>

          {/* Filters */}
          <Card className="p-6 shadow-md mb-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <SlidersHorizontal className="h-5 w-5" />
                Filters:
              </div>
              
              <div className="flex items-center gap-2 flex-1">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All prices</SelectItem>
                    <SelectItem value="low">Under $150</SelectItem>
                    <SelectItem value="medium">$150 - $300</SelectItem>
                    <SelectItem value="high">Over $300</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-muted-foreground" />
                <Select value={ratingFilter} onValueChange={setRatingFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All ratings</SelectItem>
                    <SelectItem value="4.5">4.5+ stars</SelectItem>
                    <SelectItem value="4.0">4.0+ stars</SelectItem>
                    <SelectItem value="3.5">3.5+ stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-sm text-muted-foreground ml-auto">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              </div>
            </div>
          </Card>
        </div>
        
        <div className="flex gap-6 h-[calc(100vh-340px)]">
          {/* Properties Grid - Two Columns */}
          <div className="w-1/2 overflow-y-auto pr-4 scrollbar-hide">
            <div className="grid grid-cols-2 gap-5">
              {filteredProperties.map((property, index) => (
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
                  isPopular={index % 3 === 0}
                  isVerified={property.rating >= 4.8}
                />
              ))}
            </div>
          </div>
          
          {/* Map */}
          <div className="w-1/2 sticky top-8 h-full">
            <PropertyMap 
              properties={filteredProperties} 
              city={city} 
              onPropertyHover={setHoveredPropertyId}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CityProperties;