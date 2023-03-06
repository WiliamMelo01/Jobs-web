import { Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Detail />} />
    </Routes>
  );
}
