import "./App.css";
import Header from "./components/Header.js";
import StoreFront from "./components/StoreFront.js";
import { useState, useEffect } from "react";

const productList = [
  {
    id: 1,
    name: "Pokemon Card",
    description:
      "Choose your Pokemon card design, and we'll create a sticker for your credit card!",
    price: "9.99",
    img: "/images/blastoise.jpg",
  },
  {
    id: 2,
    name: "Yugi-oh Card",
    description:
      "Choose your Yugi-oh card design, and we'll create a sticker for your credit card!",
    price: "9.99",
    img: "/images/yugioh.jpg",
  },
  {
    id: 3,
    name: "Logo Card",
    description:
      "Choose your Logo card design, and we'll create a sticker for your credit card!",
    price: "10.99",
    img: "/images/cardlogo.jpg",
  },
];

function App() {

  return (
    <div className="App ">
      <Header />
      <StoreFront />


    </div>
  );
}


export default App;
