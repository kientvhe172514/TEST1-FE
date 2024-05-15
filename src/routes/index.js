import LayoutDefault from "../Layout/LayoutDefault/LayoutDefault";
import Home from "../pages/Client/Home/Home";
import Blog from "../pages/Client/Blog/Blog";
import Contact from "../pages/Client/Contact/Contact";
import Cart from "../pages/Client/Cart/Cart";
const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },{
                path: "/cart",
                element: <Cart />,
            }
        ]
    }
];

export default routes;