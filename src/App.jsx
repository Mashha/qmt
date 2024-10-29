import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Innovations from "./pages/Innovations/Innovations";
import Contact from "./pages/Contact/Contact";
import Innovation from "./pages/Innovation/Innovation";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/innovations' element={<Innovations />} />
        <Route path='/innovations/:id' element={<Innovation />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
