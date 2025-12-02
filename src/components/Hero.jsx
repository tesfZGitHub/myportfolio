const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2.5 rounded-full bg-tech-blue/10 border border-tech-blue/20 mb-10" mt-12>
            <span className="text-tech-blue font-semibold">🚀 Welcome to My Tech World</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Crafting Digital <span className="gradient-text">Experiences</span> That Inspire
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I transform complex challenges into elegant, performant web solutions using cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-tech-blue to-tech-purple text-white hover:shadow-2xl hover:shadow-tech-blue/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#profile" 
              className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-tech-blue/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tech-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;