import { Card, CardContent } from "@/components/ui/card";
import { Baby, Syringe, Heart, HeartPulse, TrendingUp, Cross, Brain, Stethoscope, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Baby,
      title: "Newborn Care",
      description: "Comprehensive care for newborns including initial health assessments, feeding guidance, and early development monitoring.",
      details: [
        "Birth to 28 days specialized care",
        "Feeding and nutrition guidance",
        "Early development assessment",
        "Parent education and support"
      ]
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Complete immunization schedule following WHO and IAP guidelines for optimal protection against preventable diseases.",
      details: [
        "WHO & IAP recommended vaccines",
        "Age-appropriate immunization schedule",
        "Travel vaccination consultation",
        "Vaccine safety monitoring"
      ]
    },
    {
      icon: Heart,
      title: "Pediatric Cardiology",
      description: "Specialized care for heart conditions in children with advanced diagnostic capabilities and treatment options.",
      details: [
        "Congenital heart defect screening",
        "Heart murmur evaluation",
        "Chest pain assessment",
        "Exercise tolerance testing"
      ]
    },
    {
      icon: HeartPulse,
      title: "Respiratory Care",
      description: "Comprehensive treatment for asthma, allergies, and other respiratory conditions affecting children.",
      details: [
        "Asthma management and education",
        "Allergy testing and treatment",
        "Respiratory infection care",
        "Breathing disorder evaluation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Monitoring",
      description: "Regular assessment of physical and developmental milestones to ensure healthy growth patterns.",
      details: [
        "Height and weight tracking",
        "Developmental milestone assessment",
        "Growth disorder evaluation",
        "Nutritional counseling"
      ]
    },
    {
      icon: Cross,
      title: "Emergency Care",
      description: "24/7 emergency pediatric care for urgent medical situations and acute illnesses requiring immediate attention.",
      details: [
        "24/7 emergency availability",
        "Acute illness management",
        "Injury assessment and care",
        "Critical care coordination"
      ]
    },
    {
      icon: Brain,
      title: "Developmental Assessment",
      description: "Comprehensive evaluation of cognitive, motor, and social development to identify and address any concerns early.",
      details: [
        "Cognitive development screening",
        "Motor skills assessment",
        "Behavioral evaluation",
        "Early intervention referrals"
      ]
    },
    {
      icon: Stethoscope,
      title: "Routine Checkups",
      description: "Regular wellness visits to monitor health, prevent illness, and ensure optimal development throughout childhood.",
      details: [
        "Age-appropriate health screenings",
        "Preventive care planning",
        "Health education for families",
        "Risk factor assessment"
      ]
    },
    {
      icon: Shield,
      title: "Adolescent Medicine",
      description: "Specialized care addressing the unique physical, emotional, and social needs of teenagers.",
      details: [
        "Puberty and growth guidance",
        "Mental health screening",
        "Sports medicine consultation",
        "Confidential adolescent care"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Pediatric Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            At Madhav Children Hospital, we provide complete healthcare services 
            designed specifically for children at every stage of development.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-none shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="service-icon mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-center flex-grow">{service.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-blue-600 mb-2">What we offer:</h4>
                    <ul className="space-y-1">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-600">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding contact-info-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities designed to provide the best possible care in a 
              child-friendly environment
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Advanced pediatric medical equipment"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Advanced Medical Equipment</h3>
              <p className="text-gray-600">Latest diagnostic and treatment equipment specifically designed for pediatric care</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Child-friendly examination room"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Child-Friendly Environment</h3>
              <p className="text-gray-600">Colorful, welcoming spaces designed to reduce anxiety and create a positive experience</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Comfortable hospital waiting area"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Comfortable Waiting Areas</h3>
              <p className="text-gray-600">Spacious and comfortable areas for families with entertainment for children</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="emergency-contact p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Emergency Care Available</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide 24/7 emergency pediatric care for urgent medical situations. 
              Don't hesitate to contact us when your child needs immediate medical attention.
            </p>
            <div className="text-2xl font-bold text-red-600 mb-2">Emergency Hotline</div>
            <div className="text-3xl font-bold text-gray-900">+91 98765 43211</div>
          </div>
        </div>
      </section>
    </div>
  );
}
