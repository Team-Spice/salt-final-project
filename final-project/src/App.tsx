import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import { Product, SideEffectType } from "./types";
import { Route, Routes, useNavigate } from "react-router-dom";
import SideEffect from "./components/SideEffect";
import FirstChart from "./components/FirstChart";
import MainChart from "./components/MainChart";
import { mockedChartData } from "./mockData/mock-product";
import { useEffect, useState } from "react";
import { getProductList } from "./api";

function App() {
  const [productList, setProductList] = useState<Product[]>([])
  const [product, setProduct] = useState<Product>();
  const [sideEffect, setSideEffect] = useState<SideEffectType>();

  const navigate = useNavigate()

  const fetchProduct = async () => {
    const newProduct = await getProductList();
    console.log(newProduct);
    setProductList(newProduct);
  }

  const updateProduct = (selectedProduct: Product) => {
    if (selectedProduct) {
      setProduct(selectedProduct);
      navigate('/SideEffect');
    }
  }

  const updateSideEffect = (selectedEffect: SideEffectType) => {
    if (selectedEffect) {
      setSideEffect(selectedEffect);
      navigate("/FirstChart")
    }
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
              <Home productList={productList} handleOnClick={updateProduct} />
            }
          />
          <Route
            path="/SideEffect"
            element={<SideEffect sideEffects={product?.sideEffectList} handleOnClick={updateSideEffect} />}
          />
          <Route
            path="/FirstChart"
            element={<FirstChart productName={product?.name} sideEffectName={sideEffect?.name} />}
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
