import Axios from "axios";

const UNiVERSITY_API_BASE_URL = "http://universities.hipolabs.com";

export const getHongKongUniversity = () => 
  Axios.get(`${UNiVERSITY_API_BASE_URL}/search?country=Hong+Kong`);
  
