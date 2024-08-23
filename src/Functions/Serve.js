import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL_BPC}/api/auth/list/ServeFiles`;

export const fetchServeFiles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching serve files data:", error);
    throw error;
  }
};
