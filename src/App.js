import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "../src/Pages/Home/Home";
import Menu from "./Pages/Menu/menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Menu />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
