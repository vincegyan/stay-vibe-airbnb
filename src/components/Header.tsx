import { Search, Menu, User, Globe, Calendar, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

const Header = () => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0, pets: 0 });

  const totalGuests = guests.adults + guests.children;
  const guestsText = totalGuests === 1 ? "1 guest" : `${totalGuests} guests`;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-coral bg-clip-text text-transparent">
            Airbnb
          </h1>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center bg-card border border-border rounded-full shadow-md hover:shadow-lg transition-shadow">
          <div className="px-4 py-2 border-r border-border">
            <div className="text-sm font-medium text-foreground">Where</div>
            <div className="text-sm text-muted-foreground">Search destinations</div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="px-4 py-2 border-r border-border cursor-pointer hover:bg-accent/50 transition-colors">
                <div className="text-sm font-medium text-foreground">Check in</div>
                <div className="text-sm text-muted-foreground">
                  {checkInDate ? format(checkInDate, "MMM dd") : "Add dates"}
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <div className="px-4 py-2 border-r border-border cursor-pointer hover:bg-accent/50 transition-colors">
                <div className="text-sm font-medium text-foreground">Check out</div>
                <div className="text-sm text-muted-foreground">
                  {checkOutDate ? format(checkOutDate, "MMM dd") : "Add dates"}
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={(date) => date < new Date() || (checkInDate && date <= checkInDate)}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <div className="px-4 py-2 pr-2 cursor-pointer hover:bg-accent/50 transition-colors">
                <div className="text-sm font-medium text-foreground">Who</div>
                <div className="text-sm text-muted-foreground">{guestsText}</div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-6" align="start">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Adults</div>
                    <div className="text-sm text-muted-foreground">Ages 13 or above</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                      disabled={guests.adults <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{guests.adults}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, adults: prev.adults + 1 }))}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Children</div>
                    <div className="text-sm text-muted-foreground">Ages 2–12</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                      disabled={guests.children <= 0}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{guests.children}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, children: prev.children + 1 }))}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Infants</div>
                    <div className="text-sm text-muted-foreground">Under 2</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, infants: Math.max(0, prev.infants - 1) }))}
                      disabled={guests.infants <= 0}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{guests.infants}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, infants: prev.infants + 1 }))}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Pets</div>
                    <div className="text-sm text-muted-foreground">Bringing a service animal?</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, pets: Math.max(0, prev.pets - 1) }))}
                      disabled={guests.pets <= 0}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{guests.pets}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(prev => ({ ...prev, pets: prev.pets + 1 }))}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 m-1">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Airbnb your home
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full p-1 h-auto border-border">
            <div className="flex items-center gap-2">
              <Menu className="h-4 w-4 ml-2" />
              <div className="bg-gray-500 text-white rounded-full p-1">
                <User className="h-4 w-4" />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;