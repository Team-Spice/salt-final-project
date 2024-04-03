import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import {
  Product,
  SideEffectType,
  // ReportChartDTO,
  ReportTypeAll,
} from "./types";
import { Route, Routes, useNavigate } from "react-router-dom";
import FirstChart from "./components/FirstChart";
import MainChart from "./components/MainChart";
import { useEffect, useState } from "react";
import {
  getAllReportsBySideEffect,
  // getDemographicChartData,
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
  // const [, setChartData] = useState<ReportChartDTO[]>([]);
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [genderSelected, setGenderSelected] = useState<string>("");
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);
  
  const fetchProduct = async () => {
    const newProduct = await getProductList();
    setProductList(newProduct);
  };

  const sendReport = async (selectedProduct: Product, selectedEffect: SideEffectType) => {
    setProduct(selectedProduct);
    
    const count = await getSideEffectCount(selectedProduct.id, selectedEffect.id);
    const postResponse = await postReport(selectedProduct.id, selectedEffect.id);
    const ReportTypeAllResponseBySideEffect = await getAllReportsBySideEffect(
      selectedProduct.id
    );

    setReportId(postResponse);
    setSideEffect(selectedEffect);
    setAffectedCount(count);
    setReportTypeList(ReportTypeAllResponseBySideEffect);

    navigate("/FirstChart");
  }


  const handleAgeAndGenderSubmit = async (age: string, gender: string) => {
    try {
      await updateReport(reportId, age, gender);
      setGenderSelected(gender);
      setSelectedAge(age);
      navigate("/MainChart");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <Nav />
      <main className="">
        <Routes>
          <Route
            path="/"
            element={
              <Home productList={productList} handleOnClick={sendReport} />
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
                chartData={reportTypeList}
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
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
