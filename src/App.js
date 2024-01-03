import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs"
import Recognition from "./components/Recognition"
import FingerPrintRecognition from "./components/FingerPrintRecognition"
import FacialScanRecognition from "./components/FacialScanRecognition"
import AdharInfo from "./components/AdharInfo";
import AddAdhar from "./components/AddAdhar";
import UpdateAdhar from "./components/UpdateAdhar"
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="fullPage">
      <Router>
        <Navbar />
        <Login/>
      </Router>
    </div>
  );
}

export default App;
