import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, IdCard } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="contact-info-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-6">
              Meet Dr. Rajesh Viradiya
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted pediatric specialist at Madhav Children Hospital with over 15 years of experience in providing 
              exceptional healthcare for children and adolescents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Dr. Rajesh Viradiya with young patients"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-600 mb-6">
                Your Trusted Pediatric Specialist
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Rajesh Viradiya brings over 15 years of dedicated experience in pediatric medicine, 
                combining clinical excellence with a gentle, compassionate approach that puts both 
                children and parents at ease.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                His commitment to staying current with the latest medical advances ensures that your 
                child receives the most effective and up-to-date care available in pediatric medicine.
              </p>
              <p className="text-lg text-gray-700">
                Dr. Viradiya believes in building lasting relationships with families, providing 
                comprehensive care that addresses not just immediate health concerns but also 
                long-term wellness and development.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon w-12 h-12 mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-600">Education</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• MBBS - Gujarat Medical College</li>
                  <li>• MD Pediatrics - AIIMS Delhi</li>
                  <li>• Fellowship in Pediatric Cardiology</li>
                  <li>• Advanced Pediatric Life Support (APLS)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon w-12 h-12 mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-600">Specializations</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• General Pediatrics</li>
                  <li>• Pediatric Cardiology</li>
                  <li>• Neonatal Care</li>
                  <li>• Adolescent Medicine</li>
                  <li>• Developmental Pediatrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon w-12 h-12 mr-4">
                    <IdCard className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600">Certifications</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Indian Academy of Pediatrics</li>
                  <li>• Pediatric Cardiac Society of India</li>
                  <li>• International Pediatric Association</li>
                  <li>• American Academy of Pediatrics</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-8">Our Philosophy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                "Every child deserves the highest quality of medical care delivered with compassion, 
                understanding, and respect. My goal is not just to treat illness, but to promote 
                optimal health and development throughout childhood."
              </p>
              <p className="text-lg text-gray-700 mb-6">
                "I believe in empowering parents with knowledge and working together as a team to 
                ensure the best outcomes for your child. Open communication, evidence-based medicine, 
                and a gentle approach are the cornerstones of my practice."
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-medium italic">
                  "Children are not just small adults - they have unique medical needs that require 
                  specialized knowledge, skills, and a deep understanding of child development. 
                  This is what drives my passion for pediatric medicine."
                </p>
                <p className="text-blue-600 font-semibold mt-2">- Dr. Rajesh Viradiya</p>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">Experience Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
                <p className="text-gray-600">Happy Families</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-gray-600">Emergency Care</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
