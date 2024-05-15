import Blog from "../../pages/Client/Blog/Blog";
import Cart from "../../pages/Client/Cart/Cart";
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
      <Contact/>
      <Blog/>
      <Cart />
      <Footer />
      
    </>
  );
}

export default LayoutDefault;
