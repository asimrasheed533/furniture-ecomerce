import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style.scss";
// import About from "./screens/About";
// import Cart from "./screens/Cart";
import Home from "./screens/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import CategoryDetails from "./screens/CategoryDetails";
import ProductDetails from "./screens/ProductDetails";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listing",
        element: <CategoryDetails />,
      },
      {
        path: "/product",
        element: <ProductDetails />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
    ],
  },
  {
    path: "*",
    element: <div className="not__found">chal ohy si sa url likh</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
