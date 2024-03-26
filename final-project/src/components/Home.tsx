import { Link } from "react-router-dom";
import { Product } from "../types";

type HomeProps = {
  product: Product | undefined;
  handleOnClick: () => void;
  
}

const Home = ({ product, handleOnClick }: HomeProps) => {

  return (
    <>
      <button onClick={handleOnClick}>Camera</button>
      {product && <div className="product-container">
        <p>{product.name}</p>
        <p>Is this the correct medicament?</p>
        <Link to="/SideEffect">
          <button>Confirm</button>
        </Link>
      </div>}
    </>
  );
};

export default Home;
