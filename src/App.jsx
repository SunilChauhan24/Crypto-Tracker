import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Coin from './Pages/Coin/Coin.jsx'
import Footer from './Component/Footer/Footer.jsx'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
