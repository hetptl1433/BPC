import axios from 'axios';

export const listImages = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/list/galleryimg`
  );
};
