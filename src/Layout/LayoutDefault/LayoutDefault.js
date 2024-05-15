import Blog from "../../pages/Client/About/About";
import Cart from "../../pages/Client/Cart/Cart";
import Checkout from "../../pages/Client/Checkout/Checkout";
import Contact from "../../pages/Client/Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  return (
    <>
      <Header />

      {/* <div>
        <Outlet />
      </div> */}
      <Checkout/>
      <Contact/>
      <Blog/>
      <Cart />
      <Footer />
      
    </>
  );
}

export default LayoutDefault;
