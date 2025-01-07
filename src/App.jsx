import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage/Hompage'
import Card from './pages/homepage/Cards/Card'
import MiddleLineLogo from './pages/homepage/Middle-line/MiddleLineLogo'
import BookingUI from './pages/homepage/BookingUI/BookingUI'
import FeatureGrid from './pages/homepage/FourBoxes/FeatureGrid'

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
      <FeatureGrid />
    </>
  )
}

export default App
