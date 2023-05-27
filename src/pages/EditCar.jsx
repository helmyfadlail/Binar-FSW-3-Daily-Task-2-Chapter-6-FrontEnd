import React from "react";
import { useParams } from "react-router-dom";

// import components
import Switcher from "../components/dark_mode_switch/Switcher";
import LogoutButton from "../components/custom_button/LogoutButton";
import { SubmitButton } from "../components/custom_button/Button";
import Loading from "../components/loading/Loading";

// import react redux
import { useDispatch, useSelector } from "react-redux";
import { getCarDetail, putCarUpdate } from "../actions/carActions";

const EditCar = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [fileDataURL, setFileDataURL] = React.useState(null);

  const [car, setCar] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [image, setImage] = React.useState("");
  const [date, setDate] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const { getDetailCar } = useSelector((state) => state.CarsReducer);

  React.useEffect(() => {
    dispatch(getCarDetail(params.id));
  }, [dispatch, params.id]);

  React.useEffect(() => {
    if (getDetailCar) {
      setCar(getDetailCar);
    }
  }, [getDetailCar]);

  React.useEffect(() => {
    let fileReader,
      isCancel = false;
    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [image]);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { name_and_type: title, detail, stock, amount, imageUrl: image, date };
    dispatch(putCarUpdate(values, params.id));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 7000);
  };

  const inputType = [
    { label: "Name and Type", type: "text", htmlFor: "name", id: "name", value: car.name_and_type, onchange: (e) => setTitle(e.target.value) },
    { label: "Detail", type: "text", htmlFor: "detail", id: "detail", value: car.detail, onchange: (e) => setDetail(e.target.value) },
    { label: "Stock", type: "number", htmlFor: "stock", id: "stock", value: car.stock, onchange: (e) => setStock(e.target.value) },
    { label: "Amount", type: "number", htmlFor: "amount", id: "amount", value: car.amount, onchange: (e) => setAmount(e.target.value) },
  ];

  const formatDate = (value) => {
    const date = new Date(value);
    const filterDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const filterMonth = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const format = `${date.getFullYear()}-${filterMonth}-${filterDate}`;
    return format;
  };

  return (
    <section className="h-full md:h-screen dark:bg-[#111827] grid place-items-center">
      <Switcher />
      <LogoutButton />
      {loading ? (
        <Loading />
      ) : (
        <div className="h-max max-w-[900px] w-full my-10">
          <div className="flex flex-col justify-center h-full gap-4 mx-4 md:mx-2 lg:mx-0">
            <h1 className="text-2xl font-semibold mb-3 text-center text-[#0B2447] dark:text-[#F8F6F4]">Edit Your Car</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="flex flex-col justify-center w-full gap-0 sm:gap-4 sm:flex-row">
                <div className="w-full max-w-sm mx-auto">
                  {inputType.map((item, index) => {
                    return (
                      <div key={index} className="relative mb-6">
                        <input
                          type={item.type}
                          id={item.id}
                          className="block px-3.5 py-3.5 w-full text-base text-[#0B2447] bg-transparent rounded-lg border border-[#19376D] appearance-none dark:text-[#F8F6F4] dark:border-[#F8F6F4] focus:outline-none focus:ring-0 focus:border-[#576CBC] dark:focus:border-[#576CBC] peer"
                          placeholder=" "
                          defaultValue={item.value}
                          onChange={item.onchange}
                        />
                        <label
                          htmlFor={item.htmlFor}
                          className="absolute rounded-lg text-base text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#111827] px-2.5 peer-focus:px-2 focus:border-[#576CBC] dark:focus:border-[#576CBC] peer-focus:text-[#576CBC] peer-focus:dark:text-[#576CBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
                        >
                          {item.label}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative mb-6">
                    <input
                      type="date"
                      className="bg-gray-50 border border-[#19376D] text-[#0B2447] text-base rounded-lg focus:ring-[#576CBC] focus:border-[#576CBC] block w-full px-2.5 py-[13px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F8F6F4] dark:focus:ring-[#576CBC] dark:focus:border-[#576CBC]"
                      placeholder="Select date"
                      onChange={(e) => setDate(e.target.value)}
                      defaultValue={formatDate(car.date)}
                    />
                  </div>
                  <div className="relative mb-6">
                    <input
                      className="block w-full text-base text-gray-900 border border-[#19376D] rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      onChange={changeHandler}
                    />
                  </div>
                  {fileDataURL ? (
                    <div className="grid h-32 p-2 mb-4 overflow-hidden bg-[#A5D7E8] dark:bg-[#19376D] rounded-lg w-max place-items-center duration-300">
                      <img src={fileDataURL} alt="" width={"150"} className="object-cover" />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-56 m-auto mt-6 text-center md:text-left">
                <SubmitButton className="w-full text-white bg-[#19376D] hover:bg-[#102955] focus:ring-[#102955b3] dark:bg-[#576CBC] dark:hover:bg-[#4255a1] dark:focus:ring-[#576CBCb3]">
                  Submit
                </SubmitButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default EditCar;
