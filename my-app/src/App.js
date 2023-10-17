import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
