import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Contact from './pages/Contact/Contact.jsx';
import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'
import Shop from './pages/Shop/Shop.jsx';
import ProductDetails from './pages/Shop/ProductDetails.jsx';
import Groceries from './pages/Groceries/Groceries.jsx';
import Juice from './pages/Juice/Juice.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path='/product/:name' element={<ProductDetails/>}/>
          <Route path='/groceries' element={<Groceries/>}/>
          <Route path='/juice' element={<Juice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
