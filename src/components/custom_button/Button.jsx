// use react router link
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      to={props.href}
      className={`${props.className} whitespace-nowrap focus:ring-4 duration-300 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none`}
    >
      {props.children}
    </Link>
  );
};

export default Button;

export const SubmitButton = (props) => {
  return (
    <button
      type="submit"
      onClick={props.onClick ? () => props.onClick() : null}
      className={`${props.className} whitespace-nowrap focus:ring-4 duration-300 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none`}
    >
      {props.children}
    </button>
  );
};
