import React from "react";
import { SubmitButton } from "../custom_button/Button";
import baseApi from "../../api/baseApi";

const Modal = (props) => {
  const token = localStorage.getItem("token");
  const handleDelete = async () => {
    const res = await baseApi.delete(`/products/${props.id}`, { headers: { authorization: `Bearer ${token}` } });
    if (res.status !== 200) {
      alert(res.data.message);
      return;
    }
    console.log(res.data);
    alert(res.data.message);
    window.location.reload();
  };
  // console.log(props.id);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#19376D] dark:bg-[#C4DFDF] outline-none focus:outline-none">
            <button
              type="button"
              onClick={() => props.setModal(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-[#F8F6F4] dark:text-[#0B2447]">Are you sure you want to delete this product?</h3>
              <div className="flex gap-4 justify-center">
                <SubmitButton onClick={handleDelete} className="text-[#F8F6F4] bg-red-600 hover:bg-red-700 focus:ring-red-300">
                  Yes, I'm sure
                </SubmitButton>
                <SubmitButton
                  type="button"
                  onClick={() => props.setModal(false)}
                  className="text-gray-500 bg-[#F8F6F4] hover:bg-gray-100  focus:ring-gray-200 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-[#F8F6F4] dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
