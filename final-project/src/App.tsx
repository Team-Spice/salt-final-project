import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import { Product } from './types';
import { Route, Routes } from "react-router-dom";
import SideEffect from "./components/SideEffect";
import FirstChart from "./components/FirstChart";
import MainChart from "./components/MainChart";
import { mockedProduct } from "./mockData/mock-product";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState<Product>();

  const handleSetProduct = () => {
    setProduct(mockedProduct);
  }

  return (
    <>
      <Nav />
      <main className="bg-slate-300 p-3">
        <Routes>
          <Route path="/" element={<Home product={product} handleOnClick={handleSetProduct} />} />
          <Route path="/SideEffect" element={<SideEffect />} />
          <Route path="/FirstChart" element={<FirstChart />} />
          <Route path="/MainChart" element={<MainChart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
