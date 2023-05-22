import React from "react";

// import image from assets
import CarsImage from "../assets/images/Mercedes_Benz.png";

// import components
import Switcher from "../components/dark_mode_switch/Switcher";
import LogoutButton from "../components/custom_button/LogoutButton";
import { SubmitButton } from "../components/custom_button/Button";
import { useDispatch } from "react-redux";
import { postCarCreate } from "../actions/carActions";
import Loading from "../components/loading/Loading";

const AddCar = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [date, setDate] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { name_and_type: title, detail, stock, amount, imageUrl: image, date };
    dispatch(postCarCreate(values));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 7000);
  };

  const inputType = [
    { label: "Name and Type", type: "text", htmlFor: "name", id: "name", onchange: (e) => setTitle(e.target.value) },
    { label: "Detail", type: "text", htmlFor: "detail", id: "detail", onchange: (e) => setDetail(e.target.value) },
    { label: "Stock", type: "number", htmlFor: "stock", id: "stock", onchange: (e) => setStock(e.target.value) },
    { label: "Amount", type: "text", htmlFor: "amount", id: "amount", onchange: (e) => setAmount(e.target.value) },
  ];
  return (
    <section className="h-full md:h-screen dark:bg-[#111827] grid place-items-center">
      <Switcher />
      <LogoutButton />
      {loading ? (
        <Loading />
      ) : (
        <div className="h-max max-w-[900px] w-full my-8">
          <div className="flex flex-col md:flex-row justify-center h-full gap-4 lg:justify-between mx-4 md:mx-2 lg:mx-0">
            <div className="mx-auto rounded-lg max-w-[350px] p-5 bg-[#C4DFDF] hover:bg-[#C4DFDFb3] border border-gray-200 dark:bg-[#19376D] dark:border-gray-700 dark:hover:bg-[#19376Db3] duration-300">
              <img src={CarsImage} className="mb-4" alt="" />
              <p className="text-lg dark:text-[#F8F6F4]">Welcome to a new way of buying, selling and servicing your car.</p>
            </div>
            <div className="flex flex-col gap-4 mt-6 mb-10">
              <h1 className="text-2xl font-semibold mb-3 text-center text-[#0B2447] dark:text-[#F8F6F4]">Add New Car</h1>
              <form onSubmit={handleSubmit} className="flex justify-center w-full gap-0 sm:gap-4 flex-col sm:flex-row" encType="multipart/form-data">
                <div className="max-w-[290px] mx-auto w-full">
                  {inputType.map((item, index) => {
                    return (
                      <div key={index} className="relative mb-4">
                        <input
                          type={item.type}
                          id={item.id}
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#0B2447] bg-transparent rounded-lg border border-[#19376D] appearance-none dark:text-[#F8F6F4] dark:border-[#F8F6F4] focus:outline-none focus:ring-0 focus:border-[#576CBC] dark:focus:border-[#576CBC] peer"
                          placeholder=" "
                          onChange={item.onchange}
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
                <div className="max-w-[290px] mx-auto w-full">
                  <div className="relative mb-4">
                    <input
                      className="block w-full text-sm text-gray-900 border border-[#19376D] rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="date"
                      className="bg-gray-50 border border-[#19376D] text-[#0B2447] text-sm rounded-lg focus:ring-[#576CBC] focus:border-[#576CBC] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F8F6F4] dark:focus:ring-[#576CBC] dark:focus:border-[#576CBC]"
                      placeholder="Select date"
                      onChange={(e) => setDate(e.target.value)}
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
      )}
    </section>
  );
};

export default AddCar;
