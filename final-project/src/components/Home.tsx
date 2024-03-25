import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <button>Camera</button>
      <p>Product Placeholder</p>
      <p>Is this the correct medicament?</p>
      <Link to="/SideEffect">
        <button>Confirm</button>
      </Link>
    </>
  );
};

export default Home;
