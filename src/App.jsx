import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Purpose from "./pages/Purpose";
import Mission from "./pages/Mission";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
