import { Users, Lightbulb, Rocket } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Collaborative Community",
      description: "Join a diverse network of innovators, researchers, and entrepreneurs working together to solve real-world challenges.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Access cutting-edge resources, mentorship, and funding opportunities to bring your ideas to life.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    },
    {
      icon: Rocket,
      title: "Launch Platform",
      description: "Transform your concepts into viable ventures with our comprehensive support system and industry connections.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Join InnovatorConnect?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a community that fosters creativity, collaboration, and cutting-edge
            innovation at Stony Brook University.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="w-12 h-12 brand-red rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
