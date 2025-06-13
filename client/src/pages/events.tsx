import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Innovation Pitch Night",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Student Activities Center",
      description: "Present your innovative ideas to a panel of judges and fellow innovators.",
      type: "Competition"
    },
    {
      title: "Startup Mentorship Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      description: "Learn from successful entrepreneurs and get personalized feedback on your startup ideas.",
      type: "Workshop"
    },
    {
      title: "Tech Talk: AI in Healthcare",
      date: "March 29, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Engineering Building",
      description: "Explore the latest developments in AI applications for healthcare innovation.",
      type: "Lecture"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & Programs
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Join our community events, workshops, and networking opportunities designed to
            accelerate your innovative journey.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Don't miss these exciting opportunities to connect and innovate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <Button className="w-full brand-red hover:bg-red-700 text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Events</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Workshops</h3>
              <p className="text-gray-600 text-sm">
                Hands-on learning experiences covering various aspects of innovation and entrepreneurship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600 text-sm">
                Connect with like-minded individuals, mentors, and potential collaborators.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitions</h3>
              <p className="text-gray-600 text-sm">
                Pitch competitions and challenges to showcase your innovations and win prizes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Talks</h3>
              <p className="text-gray-600 text-sm">
                Learn from industry experts about the latest trends and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
