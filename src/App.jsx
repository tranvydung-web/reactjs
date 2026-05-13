import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import GioiThieu from "./pages/Gioithieu";
import Index from "./pages/Home";
import Tranggioithieu from "./components/Tranggioithieu";
import Tinntuc from "./components/Tinntuc";
import Detail from "./pages/Detail";
import Sanpham from "./pages/Sanpham";

export default function App() {
  
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route exact path="*" element={<Index />} />
        <Route exact path="/index" element={<Index />} />
        <Route path="/gioithieu" element={<Tranggioithieu />} />
        <Route path="/lienhe" element={<h1>Contact</h1>} />
        <Route path="/sanpham" element={<Sanpham />} />
        <Route path="/tintuc" element={<Tinntuc />} />
        <Route path="/detail/:id" element={<Detail />} />

      </Routes>

      <Footer />
    </Router>
  );
}