import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8000/getproducts", {
      headers: {
        "Content-Type": "application/json"
      }
    });

    dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};



