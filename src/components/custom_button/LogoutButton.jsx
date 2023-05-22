import React from "react";
import { Spin as Hamburger } from "hamburger-react";
import { SubmitButton } from "./Button";

const LogoutButton = () => {
  const [logoutBtn, setLogoutBtn] = React.useState("opacity-0 hidden");
  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  };
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 text-[#0B2447] dark:text-[#F8F6F4]">
        <div className={`${logoutBtn} duration-300 transition-all m-5`}>
          <SubmitButton onClick={handleLogout} className="text-[#F8F6F4] bg-red-600 hover:bg-red-700 focus:ring-red-300">
            Logout
          </SubmitButton>
        </div>
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              setLogoutBtn("opacity-100 block");
            } else {
              setLogoutBtn("opacity-0 hidden");
            }
          }}
        />
      </div>
    </>
  );
};

export default LogoutButton;
