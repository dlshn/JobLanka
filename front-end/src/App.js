import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AddJob from "./Pages/AddJob";
import Login from "./Pages/Login";
import ScrollToTop from "./Components/ScrollToTop"; 
import { AuthProvider } from "./Components/context/AuthContext"; // ✅ Import this


function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
  );
}

export default App;
