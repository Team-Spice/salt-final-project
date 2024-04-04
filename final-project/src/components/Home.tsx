import { Product, SideEffectType } from "../types";
import { ChangeEvent, useState } from "react";
import SideEffect from "./SideEffect";
import BarcodeScanner from "./BarcodeScanner";
import { getProduct } from "../api";
import Button from "./Button";

type HomeProps = {
  productList: Product[];
  handleOnClick: (product: Product, sideEffect: SideEffectType) => void;
};

const Home = ({ productList, handleOnClick }: HomeProps) => {
  const [product, setProduct] = useState<Product>();
  const [confirmed, setConfirmed] = useState(false);
  const [scannerOpen, setScannerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    setErrorMessage("");
    
    const { error, data } = await getProduct(result);

    if (error) {
      setErrorMessage(error);
    } else if (data) {
      setProduct(data);
    }
    setIsLoading(false);
    setScannerOpen(false);
  };

  return (
    <>
      <form className="form-home">
        <label className="label-product" htmlFor="product-select">
          Select a product
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
        <h1 className="h1-barcode-text">Scan Barcode</h1>
        <Button text="Camera" onClick={() => setScannerOpen(!scannerOpen)}/>
        {errorMessage && !isLoading && <p className="p-error">{errorMessage}</p>}
        {scannerOpen && <BarcodeScanner onScan={handleScan} loading={isLoading}/>}
      </div>
      {product && !isLoading && !errorMessage && (
        <div className="product-container flex flex-col mb-2 gap-16">
          <div className="container-name-description flex flex-col items-center">
            <img className="h-full w-60" src={`/src/assets/${product.image}`} alt="alvedon" />
            <p className="product-name-home">
              <span className="bolded-black">Product name:</span> {product.name}
            </p>
            <br />
            <p className="prodcut-description-home">
              <span className="bolded-black">Description:</span>{" "}
              {product.description}{" "}
            </p>
          </div>
          <div className="container-confirmation-home flex flex-col">
            {!confirmed && (
              <>
                <p className="product-confirmation mt-6">
                  Is this the correct medicament?
                </p>
                <Button text="Confirm" onClick={() => setConfirmed(true)}/>
              </>
            )}
          </div>
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
