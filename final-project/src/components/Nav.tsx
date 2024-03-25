import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const Nav = () => {
  return (
    <nav className="navbar">
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
