import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="py-16 hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
          Subscribe to our newsletter for the latest events, opportunities, and innovation insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-white border-0 text-gray-900 placeholder-gray-500 flex-1"
          />
          <Button className="brand-red hover:bg-red-700 text-white px-8 font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}