import baseApi from "../api/baseApi";

export const GET_CARS_LIST = "GET_CARS_LIST";
export const GET_CAR_DETAIL = "GET_CAR_DETAIL";
export const POST_CAR_CREATE = "POST_CAR_CREATE";
export const PUT_CAR_EDIT = "PUT_CAR_EDIT";
export const DELETE_CAR = "DELETE_CAR";

export const getCarsList = () => {
  return async (dispatch) => {
    const res = await baseApi.get("/cars");
    try {
      dispatch({
        type: GET_CARS_LIST,
        payload: {
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_CARS_LIST,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const getCarDetail = (id) => {
  return async (dispatch) => {
    const res = await baseApi.get(`/cars/${id}`);
    try {
      dispatch({
        type: GET_CAR_DETAIL,
        payload: {
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_CAR_DETAIL,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const postCarCreate = (data) => {
  return async (dispatch) => {
    const res = await baseApi.post(`/cars`, data);
    try {
      dispatch({
        type: POST_CAR_CREATE,
        payload: {
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: POST_CAR_CREATE,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const putCarUpdate = (data, id) => {
  return async (dispatch) => {
    const res = await baseApi.put(`/cars/${id}`, data);
    try {
      dispatch({
        type: PUT_CAR_EDIT,
        payload: {
          data: res.data,
          errorMessage: false,
        },
      });
    } catch (error) {
      dispatch({
        type: PUT_CAR_EDIT,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};
