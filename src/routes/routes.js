import Login from "containers/Login"
import LayoutRoute from "./router/layout_route"

const routes = [
    {
        "route_type": "public",
        "path": "/login",
        "component": <Login />,
        "is_exact": true,
    },
    
    ...LayoutRoute,
    
    {
        "route_type": "redirect",
        "path": "/login",
        "component": {},
    },

]

export default routes