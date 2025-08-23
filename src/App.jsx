import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './sections/Homepage';
import Services from './sections/Services';
import CostCalculator from './components/CostCalculator';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

function App() {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Homepage />
        <Services />
        <CostCalculator setTotalCost={setTotalCost} />
        <Portfolio />
        <About />
        <Blog />
        <Contact totalCost={totalCost} />
      </main>
      <Footer />
    </>
  );
}

export default App;
