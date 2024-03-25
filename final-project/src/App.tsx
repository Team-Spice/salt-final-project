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
      <main>
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
