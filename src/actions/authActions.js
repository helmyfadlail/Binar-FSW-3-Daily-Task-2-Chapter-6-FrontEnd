import baseApi from "../api/baseApi";

export const LOGGED_IN_SUCCESS = "LOGGED_IN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => {
  return (dispatch) => {
    const payload = { username, password };

    baseApi
      .post("/users/login", payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: LOGGED_IN_SUCCESS,
          payload: {
            user: res.data.user,
            errorMessage: null,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGGED_IN_SUCCESS,
          payload: {
            data: false,
            errorMessage: err.message,
            loading: false,
          },
        });
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
