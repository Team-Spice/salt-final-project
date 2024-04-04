import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import {
  Product,
  SideEffectType,
  ReportTypeAll,
} from "./types";
import { Route, Routes, useNavigate } from "react-router-dom";
import FirstChart from "./components/FirstChart";
import MainChart from "./components/MainChart";
import { useEffect, useState } from "react";
import {
  getAllReportsBySideEffect,
  getProductList,
  getSideEffectCount,
  postReport,
  updateReport,
} from "./api";
import { ageGroup } from "./constants";

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();
  const [sideEffect, setSideEffect] = useState<SideEffectType>();
  const [affectedCount, setAffectedCount] = useState("");

  const [reportId, setReportId] = useState(-1);
  const [reportTypeList, setReportTypeList] = useState<ReportTypeAll[]>([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");
  const [genderSelected, setGenderSelected] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const getAgeGroup = (age: string) => {
    if (age) {
      const ageValue = parseInt(age);
      for (const s of ageGroup) {
        const range = s.split('-');
        const lower = parseInt(range[0]);
        const upper = parseInt(range[1]);
        if (ageValue >= lower && ageValue <= upper) {
          return s;
        }
      }
    }
    return '-';
  }
  
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
      const newAgeGroup = getAgeGroup(age);

      setGenderSelected(gender);
      setSelectedAgeGroup(newAgeGroup);
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
                selectedAgeGroup={selectedAgeGroup}
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
