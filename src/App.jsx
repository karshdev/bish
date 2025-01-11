import "./App.css";
import Homepage from "./pages/Hompage";
import Card from "./pages/Cards/Card";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiddleLineLogo from "./pages/Middle-line/MiddleLineLogo";
import BookingUI from "./pages/BookingUI/BookingUI";
import FeatureGrid from "./pages/FourBoxes/FeatureGrid";
import FeatureGrid2 from "./pages/FeatureGrid2/FeatureGrid2";
import CheckPrice from "./pages/CheckPrice/CheckPrice";
import Yellowbox from "./pages/YellowBox/Yellowbox";
import Faq from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";
import Page1Container from "./pages/Page1Container";
import Page3Contaier from "./Page 3/Page3Container";
import Page4Container from "./Page 4/Page4Container";

function App() {
  // Dynamically inject Google Fonts
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Page1Container />} />
        <Route path="/Page3" element={<Page3Contaier />} />
        <Route path="/Page4" element={<Page4Container />} />
      </Routes>
    </Router>


  );
}

export default App;
