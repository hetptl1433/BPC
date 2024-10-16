import axios from "axios";

export const createRAS = async (data) => {
  axios.post(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/RAS`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const createRASData= async (data) => {
  axios.post(`${process.env.REACT_APP_API_URL_BPC}/api/auth/RASData`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getRAC = async (_id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/RAS/${_id}`
  );
};
export const getRACData = async (EmailID) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/email/RASData/${EmailID}`
  );
};