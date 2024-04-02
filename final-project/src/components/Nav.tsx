import { Link } from "react-router-dom";
import logo from "../assets/favicon.ico";

const Nav = () => {
  return (
    <nav className="bg-white flex justify-between items-center py-1.5 px-4 sticky mb-2">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </nav>
  );
};

export default Nav;
