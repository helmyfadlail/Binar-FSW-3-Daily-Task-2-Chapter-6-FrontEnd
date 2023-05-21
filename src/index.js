// import react dependency
import React from "react";
import ReactDOM from "react-dom/client";

// import component app
import App from "./App";

// import component browser router from react router
import { BrowserRouter } from "react-router-dom";

// depedencies for react redux / redux
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
const store = createStore(reducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
