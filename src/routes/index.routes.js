import LayoutDefault from "../Layout/LayoutDefault/LayoutDefault";
import Home from "../pages/Client/Home/Home";
import Contact from "../pages/Client/Contact/Contact";
import Cart from "../pages/Client/Cart/Cart";
import About from "../pages/Client/About/About";
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
                element: <About />,
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