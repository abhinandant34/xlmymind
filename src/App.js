import ReactDOM from "react-dom";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./Pages/components/FontawesomeIcons/index"
import Homepage from './Pages/Homepage/Homepage'
import Login from './Pages/Loginpage/Loginpage'
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                    <Route path="/"
                        element={<Homepage />} />
                    <Route path="/login" 
                        element={<Login />} />
                    <Route path="/register" 
                        element={<RegisterPage />} />
                    <Route path="/about" 
                        element={<AboutUs />} />
                    <Route path="/products" 
                        element={<ProductsPage />} />
                    <Route path="/cart" 
                        element={<Cart />} />
                </Routes>
            </Router>

    </div>
  );
}

export default App;
