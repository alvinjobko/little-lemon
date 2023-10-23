import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Forms from "./Forms";
import Confirmation from "./Confirmation";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Forms />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default Routing;
