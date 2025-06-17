import { storage } from "../../server/storage";
import { insertAppointmentSchema } from "../../shared/schema";
import { z } from "zod";

export const handler = async (event: any, context: any) => {
  const { httpMethod, path, body } = event;
  
  // Handle CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Content-Type": "application/json",
  };

  if (httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    // Extract appointment ID from path if present
    const pathSegments = path.split('/');
    const appointmentId = pathSegments[pathSegments.length - 1];
    
    switch (httpMethod) {
      case "GET":
        if (appointmentId && !isNaN(Number(appointmentId))) {
          // Get single appointment
          const appointment = await storage.getAppointment(parseInt(appointmentId));
          if (appointment) {
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify(appointment),
            };
          } else {
            return {
              statusCode: 404,
              headers,
              body: JSON.stringify({ message: "Appointment not found" }),
            };
          }
        } else {
          // Get all appointments
          const appointments = await storage.getAppointments();
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(appointments),
          };
        }

      case "POST":
        const appointmentData = insertAppointmentSchema.parse(JSON.parse(body || "{}"));
        const appointment = await storage.createAppointment(appointmentData);
        return {
          statusCode: 201,
          headers,
          body: JSON.stringify(appointment),
        };

      default:
        return {
          statusCode: 405,
          headers,
          body: JSON.stringify({ message: "Method not allowed" }),
        };
    }
  } catch (error) {
    console.error("Error in appointments function:", error);
    
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          message: "Invalid appointment data", 
          errors: error.errors 
        }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
}; 