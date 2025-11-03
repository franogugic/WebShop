import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";
import Cart from "./pages/Cart.tsx";
import Layout from "./layout/Layout.tsx";

function App() {
  return (
          <Routes >
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="cart" element={<Cart />} />
              </Route>
          </Routes>
  );
}

export default App
