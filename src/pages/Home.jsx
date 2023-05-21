import { Link } from "react-router-dom";
import React from "react";

// import image from assets
import CarsSample from "../assets/images/Mercedes_Benz.png";

// components needed for make list cars
import Switcher from "../components/dark_mode_switch/Switcher";
import Button, { SubmitButton } from "../components/custom_button/Button";

// import icons gi from react icons
import { GiPriceTag, GiCalendar, GiBoxUnpacking } from "react-icons/gi";

// import component
import Modal from "../components/modal/Modal";
import LogoutButton from "../components/custom_button/LogoutButton";
import NavbarImage from "../components/navbar/NavbarImage";

const Home = () => {
  const [modal, setModal] = React.useState(false);
  const openUpdateModal = (nim) => {
    setModal(true);
  };

  return (
    <section className="h-full dark:bg-[#111827]">
      <Switcher />
      <LogoutButton />
      <NavbarImage />
      {modal ? <Modal id setModal={setModal} /> : null}
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
              defaultValue="all"
              className="bg-[#A5D7E8] border border-[#576CBC] text-[#0B2447] font-semibold text-md rounded-lg focus:ring-[#576CBCb3] focus:border-[#576CBCb3] block w-full py-2.5 px-3"
            >
              <option>Filtered Cars</option>
              <option value="all">All</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
        <div className="grid h-full gap-8 my-12 grid-cols-cards place-items-center">
          <div className="max-w-xs duration-200 transition-colors bg-[#C4DFDF] border border-gray-200 rounded-md shadow dark:bg-[#19376D] dark:border-gray-700">
            <Link to="/cars/detail">
              <img className="p-2 rounded-t-lg" src={CarsSample} alt="" />
            </Link>
            <div className="px-8 pb-5">
              <Link to="/cars/detail">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0B2447] dark:text-[#F8F6F4] text-center">Car Title</h5>
              </Link>
              <p className="mb-4 font-normal text-[#0B2447] dark:text-[#F8F6F4] text-center">Description Cars</p>
              <div className="flex flex-col gap-3">
                <p className="flex items-center gap-3 text-lg text-[#0B2447] dark:text-[#F8F6F4]">
                  <GiPriceTag /> Amount
                </p>
                <p className="flex items-center gap-3 text-lg text-[#0B2447] dark:text-[#F8F6F4]">
                  <GiCalendar /> Date
                </p>
                <p className="flex items-center gap-3 text-lg text-[#0B2447] dark:text-[#F8F6F4]">
                  <GiBoxUnpacking /> Stock
                </p>
              </div>
              <div className="flex gap-3 mt-3">
                <Button
                  href="/cars/edit/"
                  className="w-full text-center text-[#F8F6F4] bg-[#19376D] hover:bg-[#102955] focus:ring-[#102955b3] dark:bg-[#576CBC] dark:hover:bg-[#4255a1] dark:focus:ring-[#576CBCb3]"
                >
                  Edit
                </Button>
                <SubmitButton
                  onClick={() => openUpdateModal()}
                  className="w-full text-center text-[#F8F6F4] bg-red-600 hover:bg-red-700 focus:ring-red-300"
                >
                  Delete
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
