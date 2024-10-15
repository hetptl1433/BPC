import axios from "axios";

export const fetchBookNow = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/HallBook/${id}`
  );
};

export const fetchDataByTitles = async (title) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/HallBookTitle/${title}`
  );
};



export const fetchExtraBook = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-active/ExtraBooking`
  );
};

export const fetchExtraBookImage = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/HalleboardByID-details/${id}`
  );
};