import axios from "axios";

export const serviceData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/list/serviceimage`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching service data:", error);
    throw error;
  }
};
