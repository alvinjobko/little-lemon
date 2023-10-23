import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Routing from "./component/Routing";
import Homepage from "./component/Homepage";
import { AlertProvider } from "./component/alertContext";
function App() {
  return (
    <>
      <AlertProvider>
        <Nav></Nav>
        <Routing></Routing>
        <Footer></Footer>
      </AlertProvider>
    </>
  );
}

export default App;
