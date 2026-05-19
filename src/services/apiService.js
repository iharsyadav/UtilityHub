// using axios ---------
// import api from "../api/axios";
// export const getData = async (endpoint, params = {}) => {
//   try {
//     const response = await api.get(endpoint, {
//       params,
//     });

//     return response.data;
//   } catch (error) {
//     console.log(error);

//     throw error;
//   }
// };

//--------------using /////







import { apiClient } from "../api/apiClient.js";
import { ENDPOINTS } from "../api/endpoints.js";


// Fetch users
export const getUsers = async () => {
  return await apiClient(ENDPOINTS.USERS);
};


// Fetch posts
export const getPosts = async () => {
  return await apiClient(ENDPOINTS.POSTS);
};


// Fetch products
export const getProducts = async () => {
  return await apiClient(ENDPOINTS.PRODUCTS);
};


