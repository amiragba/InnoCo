import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Hero Content */}
          <div className="text-white space-y-8 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where Innovation<br />
              <span className="text-blue-200">Meets Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
              Connect with fellow innovators, share ideas, and transform concepts
              into reality at Stony Brook University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg h-auto"
                size="lg"
              >
                Join the Network
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 h-auto bg-transparent"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Visual Element - Positioned for alignment */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* White tilted card background */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl shadow-2xl transform rotate-12 flex items-center justify-center">
                {/* Red circle with text */}
                <div className="w-48 h-48 lg:w-60 lg:h-60 brand-red rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center text-white">
                    <div className="text-2xl lg:text-3xl font-bold mb-2 italic">Innovate</div>
                    <div className="text-2xl lg:text-3xl font-bold mb-2 italic">Connect</div>
                    <div className="text-2xl lg:text-3xl font-bold italic">Create</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
