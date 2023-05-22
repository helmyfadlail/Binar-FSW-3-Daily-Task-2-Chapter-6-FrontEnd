import React from "react";
import { Link } from "react-router-dom";

// import components needed for make list cars
import Button, { SubmitButton } from "../custom_button/Button";

// import icons gi from react icons
import { GiPriceTag, GiCalendar, GiBoxUnpacking } from "react-icons/gi";

const ListCars = (props) => {
  const formatRupiah = (value) => {
    return Intl.NumberFormat("id-ID", {
      currency: "IDR",
      style: "currency",
    }).format(value);
  };
  const formatDate = (value) => {
    const date = new Date(value);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const filterDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const format = `${filterDate} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    return format;
  };

  return (
    <div className="grid h-full gap-8 my-12 grid-cols-cards place-items-center">
      {props.items?.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-xs duration-200 flex-grow transition-colors bg-[#C4DFDF] border border-gray-200 rounded-md shadow dark:bg-[#19376D] dark:border-gray-700"
          >
            <Link to={`/cars/detail/${item.id}`} className="h-[215px]">
              <img src={item.imageUrl} className="w-full h-full max-w-[318px] max-h-[210px] object-cover" alt="" />
            </Link>
            <div className="px-8 pb-5">
              <Link to={`/cars/detail/${item.id}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-[#0B2447] dark:text-[#F8F6F4] text-center">{item.name_and_type}</h5>
              </Link>
              <p className="mb-4 font-normal text-[#0B2447] dark:text-[#F8F6F4] text-center">{item.detail}</p>
              <div className="flex flex-col gap-3">
                <p className="flex items-center gap-3 text-lg text-[#0B2447] dark:text-[#F8F6F4]">
                  <GiPriceTag /> {formatRupiah(item.amount)}
                </p>
                <p className="flex items-center gap-3 text-lg text-[#0B2447] dark:text-[#F8F6F4]">
                  <GiCalendar /> {formatDate(item.date)}
                </p>
                <p className="flex items-center gap-3 text-lg text-[#0B2447] dark:text-[#F8F6F4]">
                  <GiBoxUnpacking /> {item.stock}
                </p>
              </div>
              <div className="flex gap-3 mt-3">
                <Button
                  href={`/cars/edit/${item.id}`}
                  className="w-full text-center text-[#F8F6F4] bg-[#19376D] hover:bg-[#102955] focus:ring-[#102955b3] dark:bg-[#576CBC] dark:hover:bg-[#4255a1] dark:focus:ring-[#576CBCb3]"
                >
                  Edit
                </Button>
                <SubmitButton
                  onClick={() => props.modal(item.id)}
                  className="w-full text-center text-[#F8F6F4] bg-red-600 hover:bg-red-700 focus:ring-red-300"
                >
                  Delete
                </SubmitButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListCars;
