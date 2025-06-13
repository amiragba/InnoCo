import { Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About InnovatorsConnect
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Building the future through collaborative innovation at Stony Brook University.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a thriving ecosystem where innovative ideas flourish through
                collaboration, mentorship, and community support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Community</h3>
              <p className="text-gray-600 leading-relaxed">
                A diverse network of students, faculty, researchers, and industry professionals
                united by a passion for innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 500 successful startups launched, $100M+ in funding raised, and hundreds of
                partnerships formed within our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              InnovatorConnect was founded in 2025 with a simple yet powerful vision: to bridge
              the gap between brilliant ideas and successful implementation. What started as a
              small group of passionate students and faculty has grown into a thriving community
              of over 1,000 members.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Located at the heart of Stony Brook University, we provide a collaborative space
              where innovation knows no boundaries. Our members come from diverse backgrounds
              - engineering, business, design, science, and beyond - all united by their drive
              to create meaningful change.
            </p>
            <p className="text-xl leading-relaxed">
              Today, we continue to evolve and adapt, always staying true to our core mission
              of fostering innovation through community collaboration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
