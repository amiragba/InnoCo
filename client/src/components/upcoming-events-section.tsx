import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UpcomingEventsSection() {
  const events = [
    {
      type: "Workshop",
      title: "Design Thinking Workshop",
      description: "Learn the fundamentals of design thinking and how to use it to solve complex problems.",
      date: "15",
      month: "October",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Center, Room 204",
      color: "bg-red-600"
    },
    {
      type: "Hackathon",
      title: "SBU Innovation Hackathon",
      description: "A 24-hour event where teams collaborate to create innovative solutions to real-world problems.",
      date: "22",
      month: "October",
      time: "9:00 AM - Next Day 9:00 AM",
      location: "Computer Science Building",
      color: "bg-blue-600"
    },
    {
      type: "Networking",
      title: "Industry Mixer",
      description: "Connect with industry professionals and explore potential career and collaboration opportunities.",
      date: "5",
      month: "November",
      time: "6:00 PM - 9:00 PM",
      location: "Student Union Ballroom",
      color: "bg-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join us for these exciting opportunities to learn, connect, and innovate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className={`${event.color} text-white text-center py-6 rounded-t-lg relative`}>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="text-4xl font-bold">{event.date}</div>
                  <div className="text-lg font-medium">{event.month}</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Button className={`w-full ${event.color} hover:opacity-90 text-white font-semibold`}>
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-2">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}