import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 brand-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">InnovatorConnect</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fostering innovation and collaboration at Stony Brook University.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-700 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-900">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="/events" className="hover:text-blue-600 transition-colors">Events</a></li>
              <li><a href="/projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-900">Programs</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Startup Incubator</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Innovation Challenges</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Workshops & Training</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Funding Opportunities</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-900">Contact Us</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-red-600" />
                <div>
                  <div>100 Nicolls Rd, Stony Brook, NY</div>
                  <div>11794</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-red-600" />
                innovate@stonybrook.edu
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-red-600" />
                (631) 555-1234
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2023 Innovator Connect at Stony Brook University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
