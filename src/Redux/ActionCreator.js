import axios from "axios";
import { GET_ALL_DATA } from "./Actions";

const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: GET_ALL_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_DATA,
        payload: error.response ? error.response.data : "An error occurred",
      });
    }
  };
};

export default fetchData;
