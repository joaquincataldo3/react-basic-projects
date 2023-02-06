import React from "react";
import Home from './Comps/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Comps/Stripe/Stripe'
import ColorGenerator from './Comps/ColorGenerator/ColorGenerator'
import LoremIpsumGenerator from './Comps/LoremIpsumGenerator/LoremIpsumGenerator'
import Slider from './Comps/Slider/Slider'
import Tab from './Comps/Tab/TabContainer'
import Menu from './Comps/Menu/MenuContainer'
import Accordion from './Comps/Accordion/Accordion'
import NotFound from './Comps/NotFound/NotFound'


function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/navbar" element={<Navbar />} />

        <Route path="/color-generator" element={<ColorGenerator />} />

        <Route path="/lorem-ipsum-generator" element={<LoremIpsumGenerator />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/slider" element={<Slider />} />

        <Route path="/tabs" element={<Tab />} />

        <Route path="/accordion" element={<Accordion />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
