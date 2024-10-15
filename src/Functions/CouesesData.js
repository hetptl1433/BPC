import axios from "axios";

export const listCoursedata = async (Name) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/CoursesFunByName/${Name}`
  );
};
