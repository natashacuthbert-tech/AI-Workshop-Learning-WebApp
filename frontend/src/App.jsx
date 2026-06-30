import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Workshops from "./pages/workshop";
import Speakers from "./pages/speaker";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}


export default App;

