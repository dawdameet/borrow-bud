import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-rental.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Rent What You Need,
          <br />
          <span className="text-secondary">When You Need It</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Access thousands of items without the commitment of ownership. 
          From tools to tech, we've got you covered.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="What do you need?"
              className="w-full pl-12 pr-4 py-4 rounded-full border-0 bg-background shadow-lg focus:ring-2 focus:ring-ring text-lg"
            />
          </div>
          <Button size="lg" variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg rounded-full shadow-lg">
            Search
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {["Tools", "Electronics", "Camping", "Party Supplies", "Sports"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-background/90 hover:bg-background text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-md"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
