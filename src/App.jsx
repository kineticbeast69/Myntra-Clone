import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
// components section
import Header from "./components/header";
import Footer from "./components/footer";
import Homeitems from "./components/homeitems";
function App() {
  const item = {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
