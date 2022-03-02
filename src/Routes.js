import { Dashboard, Login } from "./screens";
import { Products } from "./screens/PartnerPages";

export const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  //Partner Pages
  {
    path: "/dashboard/products",
    element: <Products />,
  },
];
