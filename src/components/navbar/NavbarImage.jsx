import CarsImage from "../../assets/images/cars_group3.png";
import CarsText from "../../assets/images/cars_group3_text.png";

const NavbarImage = () => {
  return (
    <div className="relative overflow-hidden max-h-52">
      <img src={CarsText} className="absolute md:max-w-[500px] max-w-[250px] w-full md:w-image top-2 left-2" alt="" />
      <img src={CarsImage} className="h-[138px] bg-center md:h-full" alt="" />
    </div>
  );
};

export default NavbarImage;
