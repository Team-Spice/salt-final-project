import { Product, SideEffectType } from "../types";
import { ChangeEvent, useState } from "react";
import SideEffect from "./SideEffect";

type HomeProps = {
  productList: Product[];
  handleOnClick: (product: Product, sideEffect: SideEffectType) => void;
};

const Home = ({ productList, handleOnClick }: HomeProps) => {
  const [product, setProduct] = useState<Product>();
  const [confirmed, setConfirmed] = useState(false);

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedProduct = productList.find((p) => p.name === e.target.value);

    setConfirmed(false);
    setProduct(selectedProduct);
  };

  const handleSideEffectSelect = (sideEffect: SideEffectType) => {
    product && handleOnClick(product, sideEffect);
  }

  return (
    <>
    <h2>Select product</h2>
      <form>
        <select name="product-select" id="product-select" onChange={onSelect}>
          <option value="">-- Select product --</option>
          {productList.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </form>
      {/* <button onClick={handleOnClick}>Camera</button> */}
      {product && (
        <div className="product-container flex-col flex-col justify-between ">
          <p>{product.name}</p>
          <p>Is this the correct medicament?</p>
          <button onClick={() => setConfirmed(true)}>Confirm</button>
        </div>
      )}
      {product && confirmed && <SideEffect sideEffects={product.sideEffectList} handleOnClick={handleSideEffectSelect}/>}
    </>
  );
};

export default Home;
