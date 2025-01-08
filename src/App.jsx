import "./App.css";
import Homepage from "./pages/Hompage";
import Card from "./pages/Cards/Card";
import MiddleLineLogo from "./pages/Middle-line/MiddleLineLogo";
import BookingUI from "./pages/BookingUI/BookingUI";
import FeatureGrid from "./pages/FourBoxes/FeatureGrid";
import FeatureGrid2 from "./pages/FeatureGrid2/FeatureGrid2";
import CheckPrice from "./pages/CheckPrice/CheckPrice";
import Yellowbox from "./pages/YellowBox/Yellowbox";
import Faq from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";

function App() {
  // Dynamically inject Google Fonts
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  return (
    <>
      <Homepage />
      <Card />
      <MiddleLineLogo />
      <BookingUI />
      <MiddleLineLogo />
      <FeatureGrid />
      <MiddleLineLogo />
      <FeatureGrid2 />
      <CheckPrice />
      <Yellowbox />
      <Faq/>
      <Footer />
    </>
  );
}

export default App;
