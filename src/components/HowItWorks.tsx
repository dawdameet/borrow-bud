import { Search, Calendar, Package, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Items",
    description: "Search thousands of items available for rent in your area"
  },
  {
    icon: Calendar,
    title: "Book Your Rental",
    description: "Choose your dates and reserve the items you need"
  },
  {
    icon: Package,
    title: "Pick Up or Deliver",
    description: "Get your items through pickup or convenient delivery"
  },
  {
    icon: Smile,
    title: "Return & Repeat",
    description: "Return when done and rent again whenever you need"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Renting is simple. Just four easy steps to access what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-[var(--shadow-hover)] h-full border border-border">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20 mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
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

export default HowItWorks;
