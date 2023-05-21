import React from "react";

// import image from assets
import CarsImage from "../assets/images/Mercedes_Benz.png";

// import components
import Switcher from "../components/dark_mode_switch/Switcher";
import LogoutButton from "../components/custom_button/LogoutButton";
import { SubmitButton } from "../components/custom_button/Button";

const inputType = [
  {
    label: "Name and Type",
    type: "text",
    htmlFor: "name",
    id: "name",
  },
  {
    label: "Detail",
    type: "text",
    htmlFor: "detail",
    id: "detail",
  },
  {
    label: "Stock",
    type: "number",
    htmlFor: "stock",
    id: "stock",
  },
  {
    label: "Amount",
    type: "number",
    htmlFor: "amount",
    id: "amount",
  },
];

const EditCar = () => {
  return (
    <section className="h-full md:h-screen dark:bg-[#111827] grid place-items-center">
      <Switcher />
      <LogoutButton />
      <div className="h-max max-w-[900px] w-full">
        <div className="flex flex-wrap justify-center h-full gap-4 mx-4 lg:justify-between md:mx-0">
          <div className="h-full rounded-lg max-w-[350px] p-5 bg-[#C4DFDF] hover:bg-[#C4DFDFb3] border border-gray-200 dark:bg-[#19376D] dark:border-gray-700 dark:hover:bg-[#19376Db3] duration-300">
            <img src={CarsImage} className="mb-4" alt="" />
            <p className="text-lg dark:text-[#F8F6F4]">Welcome to a new way of buying, selling and servicing your car.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold mb-3 text-center text-[#0B2447] dark:text-[#F8F6F4]">Edit Your Car</h1>
            <form className="flex justify-center w-full gap-4">
              <div className="max-w-[280px] w-full">
                {inputType.map((item, index) => {
                  return (
                    <div key={index} className="relative mb-4">
                      <input
                        type={item.type}
                        id={item.id}
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#0B2447] bg-transparent rounded-lg border border-[#19376D] appearance-none dark:text-[#F8F6F4] dark:border-[#F8F6F4] focus:outline-none focus:ring-0 focus:border-[#576CBC] dark:focus:border-[#576CBC] peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor={item.htmlFor}
                        className="absolute rounded-sm text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#111827] px-2 peer-focus:px-2 focus:border-[#576CBC] dark:focus:border-[#576CBC] peer-focus:text-[#576CBC] peer-focus:dark:text-[#576CBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        {item.label}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="max-w-[280px] w-full">
                <div className="relative mb-4">
                  <input
                    className="block w-full text-sm text-gray-900 border border-[#19376D] rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type="date"
                    className="bg-gray-50 border border-[#19376D] text-[#0B2447] text-sm rounded-lg focus:ring-[#576CBC] focus:border-[#576CBC] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F8F6F4] dark:focus:ring-[#576CBC] dark:focus:border-[#576CBC]"
                    placeholder="Select date"
                  />
                </div>
                <div className="text-center md:text-left">
                  <SubmitButton className="w-full text-white bg-[#19376D] hover:bg-[#102955] focus:ring-[#102955b3] dark:bg-[#576CBC] dark:hover:bg-[#4255a1] dark:focus:ring-[#576CBCb3]">
                    Submit
                  </SubmitButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditCar;
