import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { AboutPage } from "./screens/aboutPage";
import { TopNavbar } from "./components/headers/TopNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css"
import "../css/common.css"
import MyPage from "./screens/myPage";
import AuthPage from "./components/auth";

export default function App() {
  const location = useLocation(); // Detect current route
  const authMember = true;

  return (
    <>
      <TopNavbar/>
      {location.pathname === "/" && <HomeNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/*" element={<ProductsPage />} />
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
