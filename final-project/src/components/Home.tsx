// import { Link } from "react-router-dom";
import { Product } from "../types";
import { ChangeEvent, useState } from "react";

type HomeProps = {
  productList: Product[];
  handleOnClick: (product: Product) => void;
};

const Home = ({ productList, handleOnClick }: HomeProps) => {
  const [product, setProduct] = useState<Product>();

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedProduct = productList.find((p) => p.name === e.target.value);
    setProduct(selectedProduct);
  };

  return (
    <>
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
          <button onClick={() => handleOnClick(product)}>Confirm</button>
        </div>
      )}
    </>
  );
};

export default Home;
// import { useState } from "react";
// import { BarcodeScanner } from "@thewirv/react-barcode-scanner";
// import { Product, SideEffectType } from "../types";

// type HomeProps = {
//   productList: Product[];
//   handleOnClick: (product: Product) => void;
// };

// const Home = ({ productList }: HomeProps) => {
//   const [scannedProduct, setScannedProduct] = useState<string | null>(null);
//   const [sideEffects, setSideEffects] = useState<string[]>([]);
//   const [doScan, setDoScan] = useState<boolean>(true);

//   const handleScanSuccess = (data: string) => {
//     setScannedProduct(data);
//     const product = productList.find((p) => p.barcode === data);
//     if (product) {
//       const effectNames = product.sideEffectList.map(
//         (effect: SideEffectType) => effect.name
//       );
//       setSideEffects(effectNames);
//     } else {
//       setSideEffects([]);
//     }
//   };

//   const handleScanError = (error?: Error) => {
//     console.error("Barcode scan error:", error);
//   };

//   const handleScanLoad = () => {
//     console.log("Barcode scanner loaded successfully!");
//   };

//   return (
//     <div>
//       <BarcodeScanner
//         doScan={doScan}
//         onSuccess={handleScanSuccess}
//         onError={handleScanError}
//         onLoad={handleScanLoad}
//         containerStyle={{ width: "100%" }}
//       />
//       <p>Scanned Product: {scannedProduct}</p>
//       <div>
//         <h3>Side Effects:</h3>
//         <ul>
//           {sideEffects.map((effect, index) => (
//             <li key={index}>{effect}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;
