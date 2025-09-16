import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-enduro.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            BY THE ENDURO COMMUNITY,
            <br />
            <span className="adventure-orange">FOR THE ENDURO COMMUNITY</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Enduro Adventure CR brings together riders with an authentic, community-driven platform celebrating all things enduro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm px-8"
            >
              WHAT IS ENDURO
            </Button>
            <Button 
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 px-8"
            >
              RIDE ENDURO
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm tracking-wider">START YOUR ADVENTURE</span>
          <div className="w-px h-12 bg-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;