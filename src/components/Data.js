import { FiBox } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export const businessBarButtonData = [
  {
    id: 0,
    to: "/dashboard",
    name: "Anasayfa",
    iconName: FiBox,
  },
  {
    id: 1,
    to: "/dashboard/products",
    name: "Ürünler",
    iconName: FiBox,
  },
  {
    id: 2,
    to: "/dashboard/orders",
    name: "Siparişler",
    iconName: MdOutlineShoppingCart,
  },
  {
    id: 3,
    to: "/dashboard/comments",
    name: "Değerlendirmeler",
    iconName: FaRegComment,
  },
];
