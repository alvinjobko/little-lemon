import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import About from "./About";

function Routing() {
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<About />} />
  </Routes>;
}

export default Routing;
