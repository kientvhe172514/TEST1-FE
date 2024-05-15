import LayoutDefault from "../Layout/LayoutDefault/LayoutDefault";
import Home from "../pages/Client/Home/Home";
import Blog from "../pages/Client/Blog/Blog";
import Contact from "../pages/Client/Contact/Contact";

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
        ]
    }
];

export default routes;