import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layout/Layout";
import Home from "@/pages/home/Home";
import Categories from "@/pages/categories/Categories";
import CategoryDetail from "@/pages/categories/category-detail/CategoryDetail";
import Shops from "@/pages/shops/Shops";
import ShopDetail from "@/pages/shops/ShopDetail";
import ItemDetail from "@/pages/categories/category-detail/item-detail/ItemDetail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shops",
        element: <Shops />,
      },
      {
        path: "/shops/:shop",
        element: <ShopDetail />
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:category",
        element: <CategoryDetail />,
      },
      {
        path: "/categories/:category/:item",
        element: <ItemDetail />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
