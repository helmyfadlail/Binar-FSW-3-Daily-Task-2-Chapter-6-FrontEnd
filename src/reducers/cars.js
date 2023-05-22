import { GET_CARS_LIST, GET_CAR_DETAIL, POST_CAR_CREATE, PUT_CAR_EDIT } from "../actions/carActions";

let initialState = {
  getCars: false,
  errorCars: false,
  getDetailCar: false,
  errorDetailCar: false,
  getResponDataCar: false,
  errorResponDataCar: false,
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_LIST:
      return {
        ...state,
        getCars: action.payload.data,
        errorCars: action.payload.errorMessage,
      };
    case GET_CAR_DETAIL:
      return {
        ...state,
        getDetailCar: action.payload.data,
        errorCarDetail: action.payload.errorMessage,
      };

    case POST_CAR_CREATE:
      return {
        ...state,
        getResponDataCar: action.payload.data,
        errorResponDataCar: action.payload.errorMessage,
      };

    case PUT_CAR_EDIT:
      return {
        ...state,
        getResponDataCar: action.payload.data,
        errorResponDataCar: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default cars;
