import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Slideshow from './Components/Slider/Slideshow';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.jpg'
import women_banner from './Components/Assets/banner_women.jpg'
import kid_banner from './Components/Assets/banner_kids.jpg'
import AboutUs from'./Components/AboutUs/AboutUs';
import ContactForm from './Components/ContactForm/ContactForm';
import Shippingpage from './Extra_pages/Shippingpage/ShippingForm';
import Thankyoupage from './Extra_pages/Thankyoupage/Thankyou';
import Errorpage from './Extra_pages/Errorpage/Error';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactform' element={<ContactForm/>}/>
        <Route path='/slideshow' element={<Slideshow/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/shippingpage" element={<Shippingpage />} />
        <Route path="/thankyoupage" element={<Thankyoupage />} />
        <Route path="/errorpage" element={<Errorpage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
