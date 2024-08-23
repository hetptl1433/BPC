import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-active/ContentContact`;

export const fetchContactPersons = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact person data:", error);
    throw error;
  }
};
