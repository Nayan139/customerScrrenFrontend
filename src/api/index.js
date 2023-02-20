import axios from "axios";

const baseURL = "http://localhost:8000";
export const API = async (url, option = {}) => {
  try {
    const newOption = {
      method: "GET",
      ...option,
    };
    const response = await axios(`${baseURL}${url}`, newOption);

    return response.data;
  } catch (error) {
    return error.response;
  }
};
