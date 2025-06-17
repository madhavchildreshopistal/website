import { storage } from "../../server/storage";
import { insertContactSchema } from "../../shared/schema";
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
    // Extract contact ID from path if present
    const pathSegments = path.split('/');
    const contactId = pathSegments[pathSegments.length - 1];
    
    switch (httpMethod) {
      case "GET":
        if (contactId && !isNaN(Number(contactId))) {
          // Get single contact
          const contact = await storage.getContact(parseInt(contactId));
          if (contact) {
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify(contact),
            };
          } else {
            return {
              statusCode: 404,
              headers,
              body: JSON.stringify({ message: "Contact not found" }),
            };
          }
        } else {
          // Get all contacts
          const contacts = await storage.getContacts();
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(contacts),
          };
        }

      case "POST":
        const contactData = insertContactSchema.parse(JSON.parse(body || "{}"));
        const contact = await storage.createContact(contactData);
        return {
          statusCode: 201,
          headers,
          body: JSON.stringify(contact),
        };

      default:
        return {
          statusCode: 405,
          headers,
          body: JSON.stringify({ message: "Method not allowed" }),
        };
    }
  } catch (error) {
    console.error("Error in contacts function:", error);
    
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          message: "Invalid contact data", 
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