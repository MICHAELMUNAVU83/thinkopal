import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Purpose from "./pages/Purpose";
import Mission from "./pages/Mission";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import FreeResources from "./pages/FreeResources";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/free-resources" element={<FreeResources />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
