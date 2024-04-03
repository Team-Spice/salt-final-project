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
  const [errorMessage, setErrorMessage] = useState("");

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
    const { error, data } = await getProduct(result);

    if (error) {
      setErrorMessage(error);
    } else if (data) {
      setProduct(data);
      setErrorMessage("");
    }
    setScannerOpen(false);
  };

  return (
    <>
      <form className="form-home">
        <label className="label-product" htmlFor="product-select">
          Select a product:{" "}
        </label>
        <select
          name="product-select w-full"
          id="product-select"
          onChange={onSelect}
        >
          <option value=""></option>
          {productList.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </form>
      <div className="div-camera">
        <h1 className="h1-barcode-text">Scan Barcode:</h1>
        <button
          className="camera-button button--primary"
          onClick={() => setScannerOpen(!scannerOpen)}
        >
          Camera
        </button>
        {errorMessage && <p className="p-error">{errorMessage}</p>}
        {scannerOpen && <BarcodeScanner onScan={handleScan} />}
      </div>
      {product && !errorMessage && (
        <div className="product-container flex flex-col mb-8">
          <p className="product-name-home">{product.name}</p>
          {!confirmed && (
            <>
              <p className="product-confirmation mt-8">
                Is this the correct medicament?
              </p>
              <button
                className="button button--primary w-fit self-center"
                onClick={() => setConfirmed(true)}
              >
                Confirm
              </button>{" "}
            </>
          )}
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
