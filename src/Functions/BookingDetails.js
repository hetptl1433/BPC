import axios from "axios";

export const createBookingDetails = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/create/BookingDetails`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the response data to the caller
  } catch (error) {
    console.error("Error creating booking details:", error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
};

export const createExtraBookingDetails = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/create/ExtraBookingDetails`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the response data to the caller
  } catch (error) {
    console.error("Error creating booking details:", error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
};
