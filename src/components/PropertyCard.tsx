import { Heart, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  imageUrl: string;
  isNew?: boolean;
  isPopular?: boolean;
  isVerified?: boolean;
}

const PropertyCard = ({ 
  id,
  title, 
  location, 
  rating, 
  reviewCount, 
  price, 
  imageUrl, 
  isNew = false,
  isPopular = false,
  isVerified = false
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/property/${id}`} className="block">
      <Card className="group cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 flex flex-col rounded-2xl border-2 border-transparent bg-gradient-to-r from-[hsl(var(--primary-blue))]/30 to-[hsl(var(--primary-purple))]/30 bg-clip-padding">
        <div className="relative overflow-hidden rounded-t-2xl h-[240px] w-full">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/95 dark:bg-gray-800/95 hover:bg-white dark:hover:bg-gray-800 text-foreground rounded-full h-8 w-8 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart 
              className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
            />
          </Button>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && (
              <Badge className="bg-primary text-white shadow-md px-2.5 py-0.5 text-xs font-semibold rounded-full">
                New
              </Badge>
            )}
            {isPopular && (
              <Badge className="bg-orange-500 text-white shadow-md px-2.5 py-0.5 text-xs font-semibold rounded-full">
                Popular
              </Badge>
            )}
            {isVerified && (
              <Badge className="bg-green-500 text-white shadow-md px-2.5 py-0.5 text-xs font-semibold rounded-full flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          
          <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{location}</p>
          
          <div className="flex items-center justify-between pt-3 border-t border-border/50 mt-auto">
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-foreground">{rating}</span>
              {reviewCount > 0 && (
                <span className="text-xs text-muted-foreground">({reviewCount})</span>
              )}
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-foreground">${price}</div>
              <div className="text-[10px] text-muted-foreground">per night</div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PropertyCard;