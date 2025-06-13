export default function SuccessStoriesSection() {
  const stories = [
    {
      company: "EcoSense Technologies",
      description: "A student-led startup that developed affordable environmental sensors for developing countries.",
      quote: "Innovator Connect provided us with the mentorship and resources we needed to take our idea from concept to market.",
      author: "Sarah Chen, Founder & CEO",
      color: "bg-blue-600"
    },
    {
      company: "MediConnect",
      description: "An AI-powered platform that connects patients with clinical trials, now used by major hospitals nationwide.",
      quote: "The connections we made through Innovator Connect were instrumental in securing our first round of funding.",
      author: "Marcus Johnson, Co-founder",
      color: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how Innovator Connect has helped transform ideas into successful ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 ${story.color} rounded-full flex-shrink-0`}></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.company}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                  <blockquote className="italic text-blue-600 mb-3 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  <p className="text-gray-500 text-sm">- {story.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}