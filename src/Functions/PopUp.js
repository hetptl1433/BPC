import axios from "axios";

export const PopUpData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-active/PopUpFile`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching service data:", error);
    throw error;
  }
};
