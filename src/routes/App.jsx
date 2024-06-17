import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
// components section
import Header from "../components/header";
import Footer from "../components/footer";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
