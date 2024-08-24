import axios from "axios";

export const createContactForm = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/create/ContactForm`,
    values
  );
};
