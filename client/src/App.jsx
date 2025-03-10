import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterCom from "./components/FooterCom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute"
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashBoard />}/>
          </Route>

          <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost />}/>
          <Route path="/update-post/:postId"  element={<UpdatePost />}/>
          </Route> 
            
          <Route path="/projects" element={<Projects />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </>
  );
}

export default App;
