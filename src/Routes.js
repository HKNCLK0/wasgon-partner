import { Dashboard, Login } from "./screens";
import { Comments, Orders, Products } from "./screens/PartnerPages";

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
  {
    path: "/dashboard/orders",
    element: <Orders />,
  },
  {
    path: "/dashboard/comments",
    element: <Comments />,
  },
];
