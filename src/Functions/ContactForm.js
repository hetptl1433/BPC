import axios from "axios";

export const createContactForm = async (data) => {
   axios.post(`${process.env.REACT_APP_API_URL_BPC}/api/auth/ContactForm`, data, {
     headers: {
       "Content-Type": "application/json",
     },
   });
};
