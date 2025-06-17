import { useState, useEffect } from "react";
import { AlertCircle, Clock, Calendar, Info } from "lucide-react";

export default function NewsHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const headlines = [
    {
      icon: AlertCircle,
      text: "Dr. Rajesh Viradiya will be available for emergency consultations only today (Jan 11, 2025)",
      type: "alert" as const,
    },
    {
      icon: Clock,
      text: "Extended hours today: Clinic open until 9:00 PM for your convenience",
      type: "info" as const,
    },
    {
      icon: Calendar,
      text: "Free vaccination camp for children aged 2-5 years on Saturday, January 13th",
      type: "success" as const,
    },
    {
      icon: Info,
      text: "New online appointment booking system is now live - Book your appointments 24/7",
      type: "info" as const,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 4000); // Change headline every 4 seconds

    return () => clearInterval(interval);
  }, [headlines.length]);

  const currentHeadline = headlines[currentIndex];
  const IconComponent = currentHeadline.icon;

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "alert":
        return "bg-red-50 border-red-200 text-red-800";
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      case "info":
      default:
        return "bg-blue-50 border-blue-200 text-blue-800";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "alert":
        return "text-red-600";
      case "success":
        return "text-green-600";
      case "info":
      default:
        return "text-blue-600";
    }
  };

  return (
    <div className={`border-b transition-all duration-500 sticky top-16 z-40 ${getBackgroundColor(currentHeadline.type)}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center space-x-3">
            <IconComponent className={`h-5 w-5 ${getIconColor(currentHeadline.type)} flex-shrink-0`} />
            <p className="text-sm font-medium text-center">
              {currentHeadline.text}
            </p>
          </div>
          
          {/* Dots indicator */}
          <div className="flex space-x-1 ml-6">
            {headlines.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? getIconColor(currentHeadline.type).replace('text-', 'bg-')
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to headline ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}