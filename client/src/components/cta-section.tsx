import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Innovating?
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          Join our community of forward-thinking innovators and transform your ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="brand-red hover:bg-red-700 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg h-auto"
            size="lg"
          >
            Join Now - It's Free
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 h-auto bg-transparent"
            size="lg"
          >
            Schedule a Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
