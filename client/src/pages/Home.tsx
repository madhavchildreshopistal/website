import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, Syringe, Heart, Stethoscope, TrendingUp, Cross } from "lucide-react";
import heroImage from "@assets/image_1750154095587.png";

export default function Home() {
  const services = [
    {
      icon: Baby,
      title: "Newborn Care",
      description: "Comprehensive care for newborns including health checkups, vaccinations, and growth monitoring.",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Complete immunization schedule following WHO and IAP guidelines for optimal protection.",
    },
    {
      icon: Heart,
      title: "Pediatric Cardiology",
      description: "Specialized care for heart conditions in children with advanced diagnostic capabilities.",
    },
    {
      icon: Stethoscope,
      title: "Respiratory Care",
      description: "Treatment for asthma, allergies, and other respiratory conditions in children.",
    },
    {
      icon: TrendingUp,
      title: "Growth Monitoring",
      description: "Regular assessment of physical and developmental milestones to ensure healthy growth.",
    },
    {
      icon: Cross,
      title: "Emergency Care",
      description: "24/7 emergency pediatric care for urgent medical situations and acute illnesses.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Caring for Your Child's Health & Happiness
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Expert pediatric care with a gentle touch. Dr. Rajesh Viradiya provides comprehensive 
                healthcare for children from infancy through adolescence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/appointment">
                  <Button className="btn-pediatric text-lg px-8 py-3">Book Appointment</Button>
                </Link>
                <Link href="/services">
                  <Button className="btn-pediatric-outline text-lg px-8 py-3">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <img
                src={heroImage}
                alt="Pediatric doctor examining baby patient"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
              Our Pediatric Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed specifically for children from birth through adolescence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-none shadow-lg">
                <CardContent className="text-center p-6">
                  <div className="service-icon mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="btn-pediatric text-lg px-8 py-3">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="section-padding contact-info-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Dr. Rajesh Viradiya with young patients"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-6">
                Meet Dr. Rajesh Viradiya
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                With over 15 years of experience in pediatric medicine, Dr. Rajesh Viradiya at 
                Madhav Children Hospital is dedicated to providing exceptional healthcare for children and adolescents.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• General Pediatrics</li>
                    <li>• Pediatric Cardiology</li>
                    <li>• Neonatal Care</li>
                    <li>• Adolescent Medicine</li>
                  </ul>
                </div>
              </div>
              <Link href="/about">
                <Button className="btn-pediatric">Learn More About Dr. Viradiya</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-6">
            Ready to Schedule Your Child's Visit?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book an appointment today and give your child the expert care they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <Button className="btn-pediatric text-lg px-8 py-3">Book Appointment</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-3">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
