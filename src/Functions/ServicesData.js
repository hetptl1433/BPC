// src/Functions/ServicesData.js

import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL_BPC;

export const serviceData = async (id) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/auth/get/serviceimage/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching service data:", error);
    throw error;
  }
};
