import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

import Cart from "./screens/Cart";
import Details from "./screens/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import Products from "./screens/Products";
import axios from "./utils/axios";

export function App({}) {
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    axios.get(`products`).then((res) => {
      setProducts(res.data.filter((product) => product.isActive === true));
    });
  }, []);

  return (
    <BrowserRouter>
      <Header products={products} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/details/:id" element={<Details />} />
    
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={<div className="not__found">Page Not Found</div>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
