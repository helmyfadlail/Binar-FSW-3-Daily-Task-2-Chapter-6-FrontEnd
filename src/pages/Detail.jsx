import React from "react";
import Switcher from "../components/dark_mode_switch/Switcher";
import LogoutButton from "../components/custom_button/LogoutButton";
import NavbarImage from "../components/navbar/NavbarImage";

// import image from assets
import CarsSample from "../assets/images/Mercedes_Benz.png";

// import icons gi from react icons
import { GiPriceTag, GiCalendar, GiBoxUnpacking } from "react-icons/gi";

const Detail = () => {
  return (
    <section className="h-full md:h-screen dark:bg-[#111827]">
      <Switcher />
      <LogoutButton />
      <NavbarImage />
      <div className="mx-5 sm:mx-10 md:mx-20 py-6 flex flex-col-reverse md:flex-row justify-center gap-8">
        <div className="max-w-[350px] w-full h-max p-4 duration-200 transition-colors bg-[#C4DFDF] border border-gray-200 rounded-md shadow dark:bg-[#19376D] dark:border-gray-700">
          <h1 className="text-2xl underline underline-offset-4 mb-8 text-center text-[#0B2447] dark:text-[#F8F6F4] font-medium">Detail Car</h1>
          <div className="px-8 pb-5 text-center">
            <div className="mb-4">
              <h5 className="text-2xl font-bold tracking-tight text-[#0B2447] dark:text-[#F8F6F4]">Car Title</h5>
              <p className="font-normal text-[#0B2447] dark:text-[#F8F6F4]">Description Cars</p>
            </div>
            <div className="flex flex-col gap-1 px-0 sm:px-12">
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
          </div>
        </div>
        <div className="">
          <img src={CarsSample} alt="" width={"400"} />
        </div>
      </div>
    </section>
  );
};

export default Detail;
