import './App.css'
import Homepage from './pages/homepage/Hompage'
import Card from './pages/homepage/Cards/Card'
import MiddleLineLogo from './pages/homepage/Middle-line/MiddleLineLogo'
import BookingUI from './pages/homepage/BookingUI/BookingUI'
import FeatureGrid from './pages/homepage/FourBoxes/FeatureGrid'
import FeatureGrid2 from './pages/homepage/FeatureGrid2/FeatureGrid2'

function App() {
  // Dynamically inject Google Fonts
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap';
  link.rel = 'stylesheet';
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

    </>
  )
}

export default App
