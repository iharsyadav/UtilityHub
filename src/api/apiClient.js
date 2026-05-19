// Getting the base URL from environment variables
// Example: https://api.example.com
const BASE_URL = import.meta.env.VITE_BASE_URL;
// Reusable API function
// endpoint -> API route like "/users"
// options -> extra fetch options (method, body, headers, etc.)
export const apiClient = async (endpoint, options = {}) => {
  try {
    // Sending API request using fetch()
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      // Default headers
      headers: {
        "Content-Type": "application/json",
      },
      // Spread operator merges custom options
      // Example: method, body, custom headers
      ...options,
    });
    
    const data = await response.json();

    // If request fails (status code not 200-299)
    if (!response.ok) {
      // Throwing custom error
      throw new Error("Something went wrong");
    }

    // Converting response into JSON
    // and returning data
    return  data;
  } catch (error) {
    // Printing error in console
    console.log(error);

    // Re-throwing error so it can be handled outside
    throw error;
  }
};
