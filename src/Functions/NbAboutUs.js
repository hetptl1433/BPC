import axios from "axios";

export const NbAboutUs = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-Active/Content`
      
    );
      return response.data;
  } catch (error) {
    console.error("Error fetching service data:", error);
    throw error;
  }
};

export const Logo = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/list/MediaFiles`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching service data:", error);
    throw error;
  }
};

