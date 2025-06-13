import { Check } from "lucide-react";

export default function InnovationShowcase() {
  const benefits = [
    {
      title: "Weekly Innovation Sessions",
      description: "Collaborative workshops where ideas transform into actionable projects."
    },
    {
      title: "Mentor Network",
      description: "Connect with industry leaders and successful entrepreneurs."
    },
    {
      title: "Funding Opportunities",
      description: "Access to grants, competitions, and investor networks."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Breakthrough Ideas<br />
              <span className="text-blue-600">Start Here</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From AI research to sustainable technology, our community has launched dozens
              of successful startups and research initiatives that are making a global impact.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Innovation brainstorming session"
              className="rounded-xl shadow-lg col-span-2"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="University team collaboration"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Modern innovative workspace"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
