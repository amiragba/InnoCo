import { Users, Lightbulb, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with like-minded innovators, industry professionals, and academic leaders.",
      buttonText: "Meet your future collaborators!",
      color: "bg-red-600"
    },
    {
      icon: Lightbulb,
      title: "Resources & Support",
      description: "Access cutting-edge tools, mentorship, and funding opportunities for your innovative ideas.",
      buttonText: "Turn ideas into reality!",
      color: "bg-blue-600"
    },
    {
      icon: Trophy,
      title: "Showcase Opportunities",
      description: "Present your projects to potential investors, partners, and the broader innovation community.",
      buttonText: "Share your brilliance!",
      color: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Join Innovator Connect?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a community that fosters creativity, collaboration, and cutting-edge
            innovation at Stony Brook University.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
              <Button 
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-medium italic"
              >
                {benefit.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}