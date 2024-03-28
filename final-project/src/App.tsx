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
import { getProductList, getSideEffectCount, postReport } from "./api";

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();
  const [sideEffect, setSideEffect] = useState<SideEffectType>();
  const [affectedCount, setAffectedCount] = useState("");
  const [reportId, setReportId] = useState<number>(-1);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const newProduct = await getProductList();
    console.log(newProduct);
    setProductList(newProduct);
  };

  const updateProduct = (selectedProduct: Product) => {
    if (selectedProduct) {
      setProduct(selectedProduct);
      navigate("/SideEffect");
    }
  };

  const updateSideEffect = async (selectedEffect: SideEffectType) => {
    if (!(product && selectedEffect)) {
      return;
    }
    const count = await getSideEffectCount(product?.id, selectedEffect.id);
    const postResponse = await postReport(product.id, selectedEffect?.id);

    setReportId(postResponse);
    setSideEffect(selectedEffect);
    setAffectedCount(count);
    navigate("/FirstChart");
  };

  useEffect(() => {
    fetchProduct();
  }, []);

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
            element={
              <SideEffect
                sideEffects={product?.sideEffectList}
                handleOnClick={updateSideEffect}
              />
            }
          />
          <Route
            path="/FirstChart"
            element={
              <FirstChart
                productName={product?.name}
                sideEffectName={sideEffect?.name}
                count={affectedCount}
                reportId={reportId}
              />
            }
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
