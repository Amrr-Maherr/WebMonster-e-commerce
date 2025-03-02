import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Favorites from './Pages/Favorites';
import Checkout from './Pages/Checkout';
import ThankYou from './Pages/ThankYou';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/product-details' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/favorite' element={<Favorites/>}/>
            <Route path='/check-out' element={<Checkout/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
