import { Home, Mountain, Waves, TreePine, Building2, Palette, Coffee, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Home, label: "Iconic cities", value: "iconic-cities" },
  { icon: Waves, label: "Beachfront", value: "beachfront" },
  { icon: Mountain, label: "Amazing views", value: "amazing-views" },
  { icon: TreePine, label: "Cabins", value: "cabins" },
  { icon: Building2, label: "Luxury", value: "luxury" },
  { icon: Palette, label: "Design", value: "design" },
  { icon: Coffee, label: "Breakfast", value: "breakfast" },
  { icon: Car, label: "Unique stays", value: "unique-stays" },
];

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const Categories = ({ selectedCategory, onSelectCategory }: CategoriesProps) => {
  return (
    <div className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const isActive = selectedCategory === category.value;
            return (
              <Button
                key={category.label}
                variant="ghost"
                onClick={() => onSelectCategory(isActive ? null : category.value)}
                className={`flex-shrink-0 flex flex-col items-center gap-2 p-3 h-auto rounded-lg transition-colors cursor-pointer ${
                  isActive 
                    ? "text-foreground border-b-2 border-primary bg-accent/5" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <category.icon className="h-6 w-6" />
                <span className="text-sm font-medium whitespace-nowrap">{category.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;