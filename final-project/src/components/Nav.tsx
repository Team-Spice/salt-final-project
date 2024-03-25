import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const Nav = () => {
  return (
    <nav className="bg-white flex justify-between items-center p-1.5 sticky mb-2">
      <Link to="/">
        <img src={reactLogo} alt="logo" />
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </nav>
  );
};

export default Nav;
