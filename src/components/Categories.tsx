import { Wrench, Zap, Tent, PartyPopper, Dumbbell, Camera } from "lucide-react";

const categories = [
  { name: "Tools", icon: Wrench, count: "500+ items", color: "from-primary/20 to-primary/10" },
  { name: "Electronics", icon: Zap, count: "350+ items", color: "from-secondary/20 to-secondary/10" },
  { name: "Camping", icon: Tent, count: "200+ items", color: "from-primary/20 to-primary/10" },
  { name: "Party", icon: PartyPopper, count: "180+ items", color: "from-secondary/20 to-secondary/10" },
  { name: "Sports", icon: Dumbbell, count: "300+ items", color: "from-primary/20 to-primary/10" },
  { name: "Photography", icon: Camera, count: "150+ items", color: "from-secondary/20 to-secondary/10" }
];

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our wide range of categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:scale-105 border border-border`}>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
