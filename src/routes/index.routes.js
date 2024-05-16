import LayoutDefault from "../Layout/LayoutDefault/LayoutDefault";
import Home from "../pages/Client/Home/Home";
import About from "../pages/Client/About/About";
import Contact from "../pages/Client/Contact/Contact";
import Cart from "../pages/Client/Cart/Cart";
import ListProduct from "../pages/Client/listProduct/ListProduct";
import ProductDetail from "../pages/Client/ProductDetail/ProductDetail";
import LayoutDefaultAdmin from "../Layout/LayoutDefaultAdmin/LayoutDefaultAdmin";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";

const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/listProduct",
        element: <ListProduct />,
      },
      {
        path: "/productDetail",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutDefaultAdmin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default routes;
