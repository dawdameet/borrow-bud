import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Professional Camera Kit",
    category: "Electronics",
    price: 45,
    rating: 4.9,
    reviews: 127,
    location: "Downtown",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Camping Tent (4-Person)",
    category: "Camping",
    price: 35,
    rating: 4.8,
    reviews: 89,
    location: "West Side",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Power Drill Set",
    category: "Tools",
    price: 25,
    rating: 4.7,
    reviews: 156,
    location: "East End",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Party Sound System",
    category: "Party Supplies",
    price: 55,
    rating: 5.0,
    reviews: 73,
    location: "City Center",
    image: "https://images.unsplash.com/photo-1558584673-c834fb0373e5?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Mountain Bike",
    category: "Sports",
    price: 40,
    rating: 4.9,
    reviews: 94,
    location: "North Park",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Projector & Screen",
    category: "Electronics",
    price: 50,
    rating: 4.8,
    reviews: 112,
    location: "South Bay",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop"
  }
];

const FeaturedItems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Items
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Popular items trusted by our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                  {item.category}
                </Badge>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="font-semibold text-card-foreground">{item.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({item.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{item.location}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">${item.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">/day</span>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
