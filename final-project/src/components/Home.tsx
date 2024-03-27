// import { Link } from "react-router-dom";
import { Product } from "../types";
import { ChangeEvent, useState } from "react";

type HomeProps = {
  productList: Product[];
  handleOnClick: (product: Product) => void;
  
}

const Home = ({ productList, handleOnClick }: HomeProps) => {
  const [product, setProduct] = useState<Product>()

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedProduct = productList.find(p => p.name === e.target.value);
    setProduct(selectedProduct);
  }

  return (
    <>
      <form >
        <select name="product-select" id="product-select" onChange={onSelect}>
          <option value="">-- Select product --</option>
          {productList.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
        </select>
      </form>
      {/* <button onClick={handleOnClick}>Camera</button> */}
      {product && <div className="product-container">
        <p>{product.name}</p>
        <p>Is this the correct medicament?</p>
        {/* <Link to="/SideEffect"> */}
          <button onClick={() => handleOnClick(product)}>Confirm</button>
        {/* </Link> */}
      </div>}
    </>
  );
};

export default Home;
