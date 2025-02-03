import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
