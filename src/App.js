import "./App.css";
import Header from "./components/Header.js";
import StoreFront from "./components/StoreFront.js";
import { useState } from "react";
import Cart from "./components/Cart.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";

const products = [
  {
    id: 1,
    name: "Pokemon Card",
    description:
      "Choose your Pokemon card design, and we'll create a sticker for your credit card!",
    price: "9.99",
    img: "/images/blastoise.jpg",
    stripeID: "price_1Lk7tMFKeOoHeQ131ItcxFR4",
  },
  {
    id: 2,
    name: "Yugi-oh Card",
    description:
      "Choose your Yugi-oh card design, and we'll create a sticker for your credit card!",
    price: "9.99",
    img: "/images/yugioh.jpg",
    stripeID: "price_1Ll1edFKeOoHeQ13uBzMIJ5M",
  },
  {
    id: 3,
    name: "Logo Card",
    description:
      "Choose your Logo card design, and we'll create a sticker for your credit card!",
    price: "10.99",
    img: "/images/cardlogo.jpg",
    stripeID: "price_1Ll1fOFKeOoHeQ133HBD4OKB",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  function onAdd(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  function onRemove(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <div className="App  bg-gradient-to-b from-[#20c4a6] to-[rgb(184,241,184)] h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={
              <>
                <div className="flex justify-between bg-white">
                  <StoreFront onAdd={onAdd} products={products} />
                  <Cart
                    onAdd={onAdd}
                    onRemove={onRemove}
                    cartItems={cartItems}
                  />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
