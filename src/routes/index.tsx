import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Flags from "../pages/Flags";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<Flags />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
