import { useState, useEffect } from "react";

function Card(props) {
  // function handleCartClick() {
  //   let addProduct = props.productList.filter(
  //     (product, index) => props.id === index + 1
  //   );
  //   this.setCart([...props.cart, addProduct[0]]);
  // }

  return (
    <>
      <div className="m-2 shadow-lg max-w-[300px] min-w-[300px]">
        <img className="object-cover h-[300px]" src={props.img} alt="" />
        <div className="object-cover px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base mb-2">{props.description}</p>
          <div className="flex justify-between items-center">
            <p>Price: {props.price}</p>
            <button
              onClick={props.onCartClick(
                props.productList.filter(
                  ((product, index) => props.id === index + 1)
                )
              )}
              
              className="h-[40px] w-[100px] text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
