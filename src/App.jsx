import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1Container from "./pages/Page1Container";
import Page3Container from "./Page 3/Page3Container";
import Page4Container from "./Page 4/Page4Container";
import ScrollToTop from "./components/ScroolToTop";

function App() {
  // Dynamically inject Google Fonts
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);


  return (

    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Page1Container />} />
        <Route path="/Page3" element={<Page3Container />} />
        <Route path="/Page4" element={<Page4Container />} />
      </Routes>
    </Router>


  );
}

export default App;
