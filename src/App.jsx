import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mirror from "./components/Mirror";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mirror" element={<Mirror />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
