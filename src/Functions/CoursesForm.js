import axios from "axios";

export const createCourseForm = async (data) => {
   axios.post(`${process.env.REACT_APP_API_URL_BPC}/api/auth/CourseForm`, data, {
     headers: {
       "Content-Type": "application/json",
     },
   });
};
