const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            WHO ARE WE?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We are a passionate community of Hard Enduro riders, enthusiasts, and industry professionals 
              who live and breathe the sport. Our mission is to create the most authentic and comprehensive 
              platform for everything related to Hard Enduro.
            </p>
            
            <p>
              From the latest gear reviews and race coverage to rider profiles and destination guides, 
              we're here to fuel your passion for adventure and help you discover new challenges 
              in the world of Hard Enduro.
            </p>
            
            <div className="pt-8">
              <div className="inline-flex items-center space-x-2 text-accent font-semibold">
                <span>Join our community of adventurers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;