// import css global
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddCar from "./pages/AddCar";
import Detail from "./pages/Detail";
import EditCar from "./pages/EditCar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cars/add" element={<AddCar />} />
        <Route path="/cars/detail" element={<Detail />} />
        <Route path="/cars/edit" element={<EditCar />} />
      </Routes>
    </>
  );
};

export default App;
