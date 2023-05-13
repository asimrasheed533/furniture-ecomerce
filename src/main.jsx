import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Route, Switch } from "wouter";

// import Contact from "./screens/Contact";
// import TabelProducts from "./screens/TabelProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import Products from "./screens/Products";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import axios from "./utils/axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig
    value={{
      fetcher: (url) => axios.get(url).then((res) => res.data),
    }}
  >
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      {/* <Route path="/contact" component={Contact} /> */}
      {/* <Route path="/details" component={TabelProducts} /> */}
      <Route>
        <div className="not__found">404 Page Not Found</div>
      </Route>
    </Switch>
    <Footer />
  </SWRConfig>
);
