import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import {
  Product,
  SideEffectType,
  ReportChartDTO,
  ReportTypeAll,
} from "./types";
import { Route, Routes, useNavigate } from "react-router-dom";
import SideEffect from "./components/SideEffect";
import FirstChart from "./components/FirstChart";
import MainChart from "./components/MainChart";
import { useEffect, useState } from "react";
import {
  getAllReportsBySideEffect,
  getDemographicChartData,
  getProductList,
  getSideEffectCount,
  postReport,
  updateReport,
} from "./api";

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();
  const [sideEffect, setSideEffect] = useState<SideEffectType>();
  const [affectedCount, setAffectedCount] = useState("");
  const [reportId, setReportId] = useState<number>(-1);
  const [reportTypeList, setReportTypeList] = useState<ReportTypeAll[]>([]);
  const [, setChartData] = useState<ReportChartDTO[]>([]);
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [genderSelected, setGenderSelected] = useState<string>("");

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
    const ReportTypeAllResponseBySideEffect = await getAllReportsBySideEffect(
      product.id
    );

    setReportId(postResponse);
    setSideEffect(selectedEffect);
    setAffectedCount(count);
    setReportTypeList(ReportTypeAllResponseBySideEffect);

    navigate("/FirstChart");
  };

  const handleAgeAndGenderSubmit = async (age: string, gender: string) => {
    try {
      await updateReport(reportId, age, gender);
      setSelectedAge(age);
      setGenderSelected(gender);
      const responseChartData = await getDemographicChartData(
        product?.id ?? 0,
        parseInt(selectedAge),
        genderSelected
      );
      setChartData(responseChartData);
      navigate("/MainChart");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Nav />
      <main className="bg-slate-300 p-3 ">
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
                totalReport={reportTypeList}
                onAgeAndGenderSelected={handleAgeAndGenderSubmit}
              />
            }
          />
          <Route
            path="/MainChart"
            element={
              <MainChart
                productId={product?.id ?? 0}
                selectedAgeFromApp={selectedAge ?? ""}
                selectedGenderFromApp={genderSelected ?? ""}
              />
              // <MainChart chartData={chartData.length > 0 ? chartData : []} />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
