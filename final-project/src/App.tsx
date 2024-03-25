import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SideEffect from "./components/SideEffect";
import FirstChart from "./components/FirstChart";
import MainChart from "./components/MainChart";

function App() {
  return (
    <>
      <Nav />
      <main className="bg-slate-300 p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SideEffect" element={<SideEffect />} />
          <Route path="/FirstChart" element={<FirstChart />} />
          <Route path="/MainChart" element={<MainChart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
