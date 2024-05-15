import LayoutDefault from "../Layout/LayoutDefault/LayoutDefault";
import Home from "../pages/Home/Home";
import Blog from "../pages/Client/Blog/Blog";
import Contact from "../pages/Contact/Contact";

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