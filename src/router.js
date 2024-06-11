import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

// PAGES
import Home from "./pages/Home";
import Reseption from "./pages/Reseption";
import Reservation from "./pages/Reservation";

AOS.init();

export default function App() {
  
  useEffect(() => {
    axios.get("http://localhost:8000/").then((res) => console.log(res));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reseption" element={<Reseption />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
}
