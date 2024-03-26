import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import { Product } from "./types";
import { Route, Routes } from "react-router-dom";
import SideEffect from "./components/SideEffect";
import FirstChart from "./components/FirstChart";
import MainChart from "./components/MainChart";
import { mockedChartData } from "./mockData/mock-product";
import { useEffect, useState } from "react";
import { getProduct } from "./api";

function App() {
  const [product, setProduct] = useState<Product>();

  const fetchProduct = async () => {
    const newProduct = await getProduct();
    console.log(newProduct);
    setProduct(newProduct);
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <>
      <Nav />
      <main className="bg-slate-300 p-3">
        <Routes>
          <Route
            path="/"
            element={
              <Home product={product} handleOnClick={fetchProduct} />
            }
          />
          <Route
            path="/SideEffect"
            element={<SideEffect sideEffects={product?.sideEffects} />}
          />
          <Route
            path="/FirstChart"
            element={<FirstChart product={product} />}
          />
          <Route
            path="/MainChart"
            element={<MainChart chartData={mockedChartData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
