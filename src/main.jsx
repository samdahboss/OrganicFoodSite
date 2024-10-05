import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
