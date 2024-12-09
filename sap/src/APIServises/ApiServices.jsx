import axios from 'axios';

const baseurl = process.env.REACT_APP_API_BASE_URL;  // You are storing your base API URL in an environment variable for flexibility.

// Define the functions that will interact with the backend API
function ApiServices() {
  // This function is responsible for getting data (GET request) from an API endpoint
  
  const userDataGetting = async () => {
    try {
      const response = await axios.get(`${baseurl}/userData`);  // Perform GET request
      return response.data;  // Return the fetched data (usually user info or other details)
    } catch (error) {
      console.error('Error fetching user data:', error);  // Log if there's an error
      throw error;  // Rethrow error to be handled elsewhere
    }
  };

  // This function is responsible for sending the registration data (POST request)
  const UserRegisterPostApi = async (postRegister) => {
    try {
      // Perform POST request to backend to register a user with the `postRegister` data
      const response = await axios.post(`${baseurl}/userRegistration`, postRegister);
      return response.data;  // Return the response from the backend (e.g., user info or success message)
    } catch (error) {
      console.error('Error during user registration:', error);  // Log if there's an error
      throw error;  // Rethrow error for handling elsewhere
    }
  };

  // Return the functions to be used in other components (like `UseRegister.jsx`)
  return { userDataGetting, UserRegisterPostApi };
}

export default ApiServices;
