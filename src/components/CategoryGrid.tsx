import { ArrowRight } from "lucide-react";
import ridersImage from "@/assets/FE-250.jpg";
import bikesImage from "@/assets/husky.jpg";
import racesImage from "@/assets/riders-g.jpg";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const CategoryCard = ({ title, subtitle, image, href }: CategoryCardProps) => {
  return (
    <a 
      href={href}
      className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-dramatic transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 gradient-overlay opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="text-white">
          <h3 className="text-2xl font-black mb-2">{title}</h3>
          <div className="flex items-center space-x-2 text-white/90 group-hover:text-accent transition-colors duration-200">
            <span className="text-sm font-medium tracking-wide">{subtitle}</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </a>
  );
};

const CategoryGrid = () => {
  const categories = [
    {
      title: "TOP RIDERS",
      subtitle: "EXPLORE TOP HARD ENDURO RIDERS",
      image: ridersImage,
      href: "#riders"
    },
    {
      title: "TOP BIKES",
      subtitle: "EXPLORE TOP HARD ENDURO BIKES",
      image: bikesImage,
      href: "#bikes"
    },
    {
      title: "TOP RACES",
      subtitle: "EXPLORE TOP HARD ENDURO RACES", 
      image: racesImage,
      href: "#races"
    },
    {
      title: "TOP DESTINATIONS",
      subtitle: "EXPLORE TOP HARD ENDURO DESTINATIONS",
      image: ridersImage, // Reusing for now
      href: "#destinations"
    },
    {
      title: "TOP BRANDS",
      subtitle: "EXPLORE TOP HARD ENDURO BRANDS",
      image: bikesImage, // Reusing for now
      href: "#brands"
    },
    {
      title: "TOP TOURS",
      subtitle: "EXPLORE TOP HARD ENDURO TOURS",
      image: racesImage, // Reusing for now
      href: "#tours"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-wider uppercase mb-4">
            START YOUR ADVENTURE
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            EXPLORE ENDURO IN COSTA RICA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Content hand selected by enduro enthusiasts ensuring that it is relevant and valuable to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              subtitle={category.subtitle}
              image={category.image}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
