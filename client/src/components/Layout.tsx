import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Stethoscope, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import NewsHeadline from "./NewsHeadline";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Doctor", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Appointment", href: "/appointment" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-purple-600">Madhav Children Hospital</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    item.name === "Appointment" ? "appointment-highlight bg-white rounded px-3 py-1" : ""
                  } ${
                    location === item.href
                      ? "text-purple-600"
                      : "text-gray-900 hover:text-purple-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-medium transition-colors ${
                      item.name === "Appointment" ? "appointment-highlight bg-white rounded px-3 py-1 w-fit" : ""
                    } ${
                      location === item.href
                        ? "text-purple-600"
                        : "text-gray-900 hover:text-purple-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 w-fit">
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* News Headlines */}
      <NewsHeadline />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Madhav Children Hospital</h3>
              <p className="text-gray-300 mb-4">
                Dedicated to providing exceptional pediatric care with compassion and expertise. 
                Your child's health and happiness are our top priorities.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Newborn Care</li>
                <li>Vaccinations</li>
                <li>Pediatric Cardiology</li>
                <li>Growth Monitoring</li>
                <li>Emergency Care</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>dr.rajesh.viradiya@pediatriccare.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Madhav Children Hospital. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              Licensed Medical Practitioner | MCI Reg: 12345
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
