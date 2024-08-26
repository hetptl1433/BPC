import axios from "axios";

export const fetchBookNow = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/HallBook/${id}`
  );
};



export const fetchExtraBook = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-active/ExtraBooking`
  );
};