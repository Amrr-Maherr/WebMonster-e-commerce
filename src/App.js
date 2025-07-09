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
import AllProducts from './Component/AllProducts';
import { Toaster } from 'react-hot-toast';
import ForgetPassword from './Pages/Authentication/ForgetPassword';
import ResetPassword from './Pages/Authentication/ResetPassword';
import CategoryPage from './Pages/CategoryPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/check-out" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/Forget-Password" element={<ForgetPassword />} />
            <Route path="/Reset-Password" element={<ResetPassword />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
