import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import { isUserAnAdmin } from "./service/user";
import { useAdminNavbarLinks, useUserNavbarLinks } from "./utils/navbar_utils";
import AboutUsPage from "./pages/AboutUs";
import MyAccountPage from "./pages/MyAccount";
import LogOutPage from "./pages/LogOut";
import SignUpPage from "./pages/Signup";

const App = () => {
  // const isLoggedIn = localStorage.getItem("token") !== null;
  const isLoggedIn = true;

  const RouterContent = () => {
    const adminLinks = useAdminNavbarLinks();
    const userLinks = useUserNavbarLinks();
    const location = useLocation();

    const isLoginOrSignUp = ~["/login", "/signup"].indexOf(location.pathname);

    if (!isLoggedIn && !isLoginOrSignUp) {
      return <Navigate to="/login" />;
    }
    if (isLoggedIn && isLoginOrSignUp) {
      return <Navigate to="/" />;
    }

    return (
      <Page>
        {!isLoginOrSignUp && (
          <NavBar buttons={isUserAnAdmin() ? adminLinks : userLinks} />
        )}
        <RoutesWrapper>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/account" element={<MyAccountPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/logout" element={<LogOutPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </RoutesWrapper>
      </Page>
    );
  };

  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
};

const Page = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const RoutesWrapper = styled.div`
  margin-top: -8em;
  min-height: 100%;

  @media (max-width: 928px) {
    margin-top: unset;
  }
`;

export default App;
