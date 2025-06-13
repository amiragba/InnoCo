import { ExternalLink, Github, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const featuredProjects = [
    {
      title: "EcoTrack",
      description: "AI-powered sustainability tracking platform for campus operations",
      tags: ["AI", "Sustainability", "IoT"],
      team: "4 members",
      status: "Active",
      funding: "$25,000",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "HealthConnect",
      description: "Telemedicine platform connecting students with healthcare providers",
      tags: ["Healthcare", "Web App", "React"],
      team: "6 members",
      status: "Beta",
      funding: "$40,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "SmartLab",
      description: "Laboratory equipment booking and management system",
      tags: ["SaaS", "Python", "Database"],
      team: "3 members",
      status: "Launched",
      funding: "$15,000",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovation Projects
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Discover groundbreaking projects created by our community members and learn
            how you can get involved in shaping the future.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              These projects showcase the innovative spirit of our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Active' ? 'bg-green-500' :
                      project.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">Funding: </span>
                      <span className="ml-1">{project.funding}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 brand-red hover:bg-red-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Categories</h2>
            <p className="text-xl text-gray-600">
              Explore projects across various domains and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Artificial Intelligence</h3>
              <p className="text-gray-600 text-sm mb-4">
                Machine learning, neural networks, and AI-powered solutions.
              </p>
              <span className="text-blue-600 font-semibold">12 Projects</span>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm mb-4">
                Green technology and environmental solutions.
              </p>
              <span className="text-blue-600 font-semibold">8 Projects</span>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm mb-4">
                Medical technology and health-focused applications.
              </p>
              <span className="text-blue-600 font-semibold">15 Projects</span>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fintech</h3>
              <p className="text-gray-600 text-sm mb-4">
                Financial technology and blockchain solutions.
              </p>
              <span className="text-blue-600 font-semibold">6 Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Have a Project Idea?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join our community and turn your innovative ideas into reality with the support
            of mentors, resources, and funding opportunities.
          </p>
          <Button className="brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
            Submit Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
