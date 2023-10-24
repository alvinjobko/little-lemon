import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Forms from "./Forms";
import Confirmation from "./Confirmation";
import Ordernow from "./Ordernow";
import Login from "./Login";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Forms />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/order" element={<Ordernow />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Routing;
