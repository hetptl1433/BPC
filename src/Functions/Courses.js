import axios from "axios";

export const listCourses = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-active/CoursesFun`
  );
};
