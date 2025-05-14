import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import FloatingSocials from "./components/FloatingSocials";
import FooterCom from "./components/FooterCom";
import Header from "./components/Header";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UpdatePost from "./pages/UpdatePost";
import Search from "./pages/Search";
// Wrapper component to handle location-based rendering
const SocialIconsWrapper = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.includes("/dashboard");

  return !isDashboardRoute ? <FloatingSocials /> : null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <SocialIconsWrapper />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>

          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:postId" element={<UpdatePost />} />
          </Route>

          <Route path="/projects" element={<Projects />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />

          <Route path="/post/:postSlug" element={<PostPage />} />
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </>
  );
}

export default App;
