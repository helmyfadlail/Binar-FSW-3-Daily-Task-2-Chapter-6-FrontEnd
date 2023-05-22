import React from "react";

// import component
import Switcher from "../components/dark_mode_switch/Switcher";
import { SubmitButton } from "../components/custom_button/Button";

// import react router use navigate
import { useNavigate } from "react-router-dom";

// import api
import baseApi from "../api/baseApi";
import Loading from "../components/loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = { username, password };

    baseApi
      .post("/users/login", payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.user);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        alert("Your username or password is wrong");
      });
  };

  return (
    <section className="h-screen dark:bg-[#111827] grid place-items-center">
      <Switcher />
      {loading ? (
        <Loading />
      ) : (
        <div className="h-max max-w-[800px] w-full m-auto px-4 md:px-0">
          <h1 className="text-4xl font-semibold mb-8 text-center text-[#0B2447] dark:text-[#F8F6F4]">Login form cars</h1>
          <div className="flex flex-wrap items-center justify-center h-full gap-4 lg:justify-between">
            <div className="grow-0 basis-auto">
              <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-[350px] mb-10" alt="" />
            </div>

            <div className="mb-6 md:mb-0 max-w-[350px] w-full">
              <form onSubmit={handleLogin}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    id="email"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#0B2447] bg-gray-100 dark:bg-[#19376db3] border-0 border-b-2 border-gray-300 appearance-none dark:text-[#F8F6F4] dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#576CBC] peer"
                    placeholder=" "
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#576CBC] peer-focus:dark:text-[#576CBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Username
                  </label>
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    id="password"
                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#0B2447] bg-gray-100 dark:bg-[#19376db3] border-0 border-b-2 border-gray-300 appearance-none dark:text-[#F8F6F4] dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-[#576CBC] peer"
                    placeholder=" "
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#576CBC] peer-focus:dark:text-[#576CBC] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Password
                  </label>
                </div>

                <div className="text-center md:text-left">
                  <SubmitButton className="w-full md:w-max text-white bg-[#19376D] hover:bg-[#102955] focus:ring-[#102955b3] dark:bg-[#576CBC] dark:hover:bg-[#4255a1] dark:focus:ring-[#576CBCb3]">
                    Login
                  </SubmitButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
