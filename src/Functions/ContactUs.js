import axios from "axios";

export const ContactData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/list/ContactDataimage`
    );
    console.log("data yo", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching ContactData data:", error);
    throw error;
  }
};
