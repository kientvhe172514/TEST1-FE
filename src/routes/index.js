import LayoutDefault from "../Layout/LayoutDefault/LayoutDefault";
import Home from "../pages/Client/Home/Home";
import Blog from "../pages/Client/Blog/Blog";
import Contact from "../pages/Client/Contact/Contact";
import Cart from "../pages/Client/Cart/Cart";
import ListProduct from "../pages/Client/listProduct/ListProduct";

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
                path: "/blog",
                element: <Blog />,
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
        ]
    }
];

export default routes;