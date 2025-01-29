import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { TopNavbar } from "./components/headers/TopNavbar";
import Footer from "./components/footer";
import MyPage from "./screens/myPage";
import { useGlobals } from "./hooks/useGlobals";
import ProductsPage from "./screens/productsPage/Products";
import { AboutPage } from "./screens/aboutPage";
import useBasket from "./hooks/useBasket";
import HomePage from "./screens/homePage";
import ChosenProduct from "./screens/productsPage/ChosenProduct";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css";
import "../css/common.css";
import AuthenticationModal from "./components/auth";
import { useState } from "react";

export default function App() {
  const location = useLocation();
  const {authMember} = useGlobals();
  const {onAdd, onRemove, onDelete, onDeleteAll, cartItems} = useBasket();
  
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

  
  return (
    <>
    <TopNavbar 
      cartItems={cartItems} 
      onAdd={onAdd} 
      onRemove={onRemove} 
      onDelete={onDelete} 
      onDeleteAll={onDeleteAll} 
      setSignupOpen={setSignupOpen} 
      setLoginOpen={setLoginOpen} 
      anchoEl={anchorEl} 
    />
      {location.pathname === "/" && <HomeNavbar setSignupOpen={setSignupOpen} />}

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products/*" element={<ProductsPage onAdd={onAdd} />} />
        <Route
          path="/product/:productId"
          element={<ChosenProduct onAdd={onAdd} />}
        />
        <Route
          path="/mypage"
          element={authMember ? <MyPage /> : null}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      <Footer />
      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleSignupClose={handleSignupClose}
        handleLoginClose={handleLoginClose}
      />


    </>
  );
}
