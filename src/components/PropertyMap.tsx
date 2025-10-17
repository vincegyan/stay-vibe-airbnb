import React, { useState } from 'react';
import { Property } from '@/data/properties';
import { MapPin, Star } from 'lucide-react';

interface PropertyMapProps {
  properties: Property[];
  city: string;
  onPropertyHover?: (propertyId: string | null) => void;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ properties, city }) => {
  const [hoveredProperty, setHoveredProperty] = useState<Property | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handlePinClick = (property: Property) => {
    setSelectedProperty(selectedProperty?.id === property.id ? null : property);
  };

  const handlePinHover = (property: Property | null) => {
    if (!selectedProperty) {
      setHoveredProperty(property);
    }
  };

  const displayedProperty = selectedProperty || hoveredProperty;

  return (
    <div className="h-full relative bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 dark:from-blue-950 dark:via-green-950 dark:to-blue-900 rounded-2xl overflow-hidden shadow-lg">
      {/* Map Info Overlay */}
      <div className="absolute top-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg z-10">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-semibold text-foreground">{properties.length} properties in {city}</span>
        </div>
      </div>

      {/* Property Pins */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[90%] h-[90%]">
          {properties.map((property, index) => {
            const angle = (index / properties.length) * 2 * Math.PI;
            const radius = 35; // percentage
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            
            const isActive = displayedProperty?.id === property.id;

            return (
              <div
                key={property.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  zIndex: isActive ? 30 : 20,
                }}
                onClick={() => handlePinClick(property)}
                onMouseEnter={() => handlePinHover(property)}
                onMouseLeave={() => handlePinHover(null)}
              >
                {/* Pin Marker */}
                <div className={`
                  relative bg-white dark:bg-gray-800 rounded-full px-3 py-2 shadow-lg
                  border-2 transition-all duration-300 hover:scale-110
                  ${isActive ? 'border-primary scale-110' : 'border-blue-400 dark:border-blue-600'}
                `}>
                  <div className="text-xs font-bold text-foreground whitespace-nowrap">
                    ${property.price}
                  </div>
                  <div className={`
                    absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                    w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent
                    transition-all duration-300
                    ${isActive ? 'border-t-primary' : 'border-t-blue-400 dark:border-t-blue-600'}
                  `} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Property Thumbnail Card */}
      {displayedProperty && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[380px] z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative h-48">
              <img
                src={displayedProperty.imageUrl}
                alt={displayedProperty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <div className="text-sm font-bold text-foreground">${displayedProperty.price}</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground text-base mb-2 line-clamp-1">
                {displayedProperty.title}
              </h3>
              <div className="flex items-center text-muted-foreground mb-3">
                <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                <span className="text-sm line-clamp-1">{displayedProperty.location}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground text-sm">{displayedProperty.rating}</span>
                  <span className="text-sm text-muted-foreground">({displayedProperty.reviewCount} reviews)</span>
                </div>
                <span className="text-xs text-muted-foreground">per night</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyMap;
