import Card from "./Card.js";
import Cart from "./Cart.js";
import { useState } from "react";

export default function StoreFront() {
  const [cartId, setCartId] = useState('1');

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

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {productList.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              img={product.img}
              cartId={cartId}
            />
          );
        })}
      </div>

      <Cart className="hidden" productList={productList} />

      <button className="absolute top-[64px] right-0" onClick={showCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </>
  );
}

function showCart() {
  let cart = document.getElementById("cart");
  if (cart.classList.contains("hidden")) {
    cart.classList.remove("hidden");
    cart.classList.add("block");
  } else if (cart.classList.contains("block")) {
    cart.classList.add("hidden");
  }
}
