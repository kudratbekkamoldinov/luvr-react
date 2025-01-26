import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { TopNavbar } from "./components/headers/TopNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css"
import "../css/common.css"
import MyPage from "./screens/myPage";
import AuthPage from "./components/auth";
import { useState } from "react";
import { Messages } from "../libs/config";
import { sweetTopSuccessAlert, sweetErrorHandling } from "../libs/sweetAlert";
import { useGlobals } from "./hooks/useGlobals";

import MemberService from "./services/MemberService";
import ProductsPage from "./screens/productsPage/Products";
import { AboutPage } from "./screens/aboutPage";
import useBasket from "./hooks/useBasket";
import HomePage from "./screens/homePage";


export default function App() {
  const location = useLocation(); // Detect current route
  const authMember = true;
  console.log("location", location);

  const {onAdd} = useBasket();

  const { setAuthMember } = useGlobals();

  // const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchoEl, setAnchoEl] = useState<HTMLElement | null>(null);

  /* Handlers */

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);
  const handlerLogoutClick = (e: React.MouseEvent<HTMLElement>) =>
    setAnchoEl(e.currentTarget);
  const handlerCloseLogout = () => setAnchoEl(null);

  const handlerLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();
      await sweetTopSuccessAlert("success", 700);
      setAuthMember(null);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1).then();
    }
  };

  return (
    <>
      <TopNavbar/>
      {location.pathname === "/" && <HomeNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/*" element={<ProductsPage onAdd={onAdd} />} />
        <Route
          path="/mypage"
          element={authMember ? <MyPage /> : <Navigate to="/login" replace/>}
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}
