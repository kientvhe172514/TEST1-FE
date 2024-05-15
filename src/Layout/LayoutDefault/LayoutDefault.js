import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Cart from "../../pages/Client/Cart/Cart";
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />

      <Cart  />
    </>
  );
}

export default LayoutDefault;
