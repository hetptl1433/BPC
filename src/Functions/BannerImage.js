import axios from "axios";

export const listBanner = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-active/banner-images1`
  );
};
