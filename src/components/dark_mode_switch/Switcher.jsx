import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const useDarkSide = () => {
  const [theme, setTheme] = React.useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = React.useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="fixed p-2 top-0 right-0 z-50 bg-[#576CBC] dark:bg-[#111827] rounded-es-xl">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </div>
  );
};

export default Switcher;
