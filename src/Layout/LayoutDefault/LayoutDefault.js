import Cart from "../../pages/Client/Cart/Cart";
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

      <Cart />

      <Footer />
    </>
  );
}

export default LayoutDefault;
