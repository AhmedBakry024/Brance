import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import LandingScreen from "./pages/Landing-Screen/LandingScreen"
import  ShopContextProvider from './context/shop-context';

function App() {

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar></Navbar>
          <div className='Main'>
            <Routes>
              <Route path="/" element={<LandingScreen></LandingScreen>} />
              <Route path="/main" element={<Main/> } />
              <Route path="/cart" element={<Cart></Cart>} />
            </Routes>
          </div>

        </Router>
        <Footer/>
      </ShopContextProvider>
    </>
  )
}

export default App
