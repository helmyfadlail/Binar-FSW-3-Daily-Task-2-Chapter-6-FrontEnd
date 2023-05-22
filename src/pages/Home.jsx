import React from "react";

// components needed for make list cars
import Switcher from "../components/dark_mode_switch/Switcher";
import Button from "../components/custom_button/Button";

// import component
import Modal from "../components/modal/Modal";
import LogoutButton from "../components/custom_button/LogoutButton";
import NavbarImage from "../components/navbar/NavbarImage";
import { useDispatch, useSelector } from "react-redux";
import { getCarsList } from "../actions/carActions";
import ListCars from "../components/list_cars/ListCars";

const Home = () => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [carsData, setCarsData] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  const openUpdateModal = async (id) => {
    setId(id);
    setModal(true);
  };

  const { getCars } = useSelector((state) => state.CarsReducer);

  React.useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  React.useEffect(() => {
    if (getCars) {
      setCarsData(getCars);
    }
  }, [getCars]);

  const [filteredYear, setFilteredYear] = React.useState("All");

  const filteredCar = carsData.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear().toString() === filteredYear;
  });

  return (
    <section className="h-full dark:bg-[#111827]">
      <Switcher />
      <LogoutButton />
      <NavbarImage />
      {modal ? <Modal id={id} setModal={setModal} /> : null}
      <div className="py-6 mx-5 sm:mx-10 md:mx-20">
        <div className="flex justify-between">
          <Button
            href="/cars/add"
            className="text-[#F8F6F4] bg-[#576CBC] hover:bg-[#4255a1] focus:ring-[#576CBCb3] dark:text-[#0B2447] dark:bg-[#A5D7E8] dark:hover:bg-[#77a3b2] dark:focus:ring-[#A5D7E8b3]"
          >
            Add New Car
          </Button>
          <div className="w-full max-w-max">
            <select
              value={filteredCar}
              onChange={(e) => setFilteredYear(e.target.value)}
              className="bg-[#A5D7E8] border border-[#576CBC] text-[#0B2447] font-semibold text-md rounded-lg focus:ring-[#576CBCb3] focus:border-[#576CBCb3] block w-full py-2.5 px-3"
            >
              <option>Filtered Cars</option>
              <option value="All">All</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
        <ListCars items={filteredYear === "All" ? carsData : filteredCar} modal={openUpdateModal} />
      </div>
    </section>
  );
};

export default Home;
