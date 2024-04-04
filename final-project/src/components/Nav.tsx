import { Link } from "react-router-dom";
// import logo from "../assets/favicon.ico";
import banner from "../assets/banner.png";
import scan from "../assets/scan.jpeg";

const Nav = () => {
  return (
    <nav className="banner-div flex justify-between items-center py-1.5 px-4 sticky mb-2">
      <Link to="/">
        <img className="logo-scan" src={scan} alt="logo" />
      </Link>

      <div className="banner-div-img">
        <img className="banner" src={banner} alt="banner" />
      </div>
      <h2></h2>
    </nav>
  );
};

export default Nav;
