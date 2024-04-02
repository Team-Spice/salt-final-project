import { Product, SideEffectType } from "../types";
import { ChangeEvent, useState } from "react";
import SideEffect from "./SideEffect";
import BarcodeScanner from "./BarcodeScanner";
import { getProduct } from "../api";

type HomeProps = {
  productList: Product[];
  handleOnClick: (product: Product, sideEffect: SideEffectType) => void;
};

const Home = ({ productList, handleOnClick }: HomeProps) => {
  const [product, setProduct] = useState<Product>();
  const [confirmed, setConfirmed] = useState(false);
  const [scannerOpen, setScannerOpen] = useState(false);

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedProduct = productList.find((p) => p.name === e.target.value);

    setConfirmed(false);
    setProduct(selectedProduct);
  };

  const handleSideEffectSelect = (sideEffect: SideEffectType) => {
    product && handleOnClick(product, sideEffect);
  };

  const handleScan = async (result: string) => {
    console.log(result);
    const newProduct = await getProduct(result);

    setScannerOpen(false);
    setProduct(newProduct);
  }

  return (
    <>
      <h2>Select product</h2>
      <form>
        <select name="product-select" id="product-select" onChange={onSelect}>
          <option value=""></option>
          {productList.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </form>
      <button onClick={() => setScannerOpen(true)}>Camera</button>
      {scannerOpen && <BarcodeScanner onScan={handleScan} />}
      {product && (
        <div className="product-container flex-col flex-col justify-between ">
          <p>{product.name}</p>
          <p>Is this the correct medicament?</p>
          <button
            className="button button--primary"
            onClick={() => setConfirmed(true)}
          >
            Confirm
          </button>
        </div>
      )}
      {product && confirmed && (
        <SideEffect
          sideEffects={product.sideEffectList}
          handleOnClick={handleSideEffectSelect}
        />
      )}
    </>
  );
};

export default Home;
