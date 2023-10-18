import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;
