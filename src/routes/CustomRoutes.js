import { useRoutes } from "react-router-dom";
import Editor from "views/pages/Editor/Editor";
import Dashboard from "views/pages/Dashboard/Dashboard";
import Home from "views/pages/Home/home";

function CustomRoutes() {
    let element = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/editor",
            element: <Editor />,
        },
        {
            path: "/preview{id:}",
            element: "",
        }
    ]);

    return element;
}

export default CustomRoutes;