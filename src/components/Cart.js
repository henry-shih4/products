import { useState } from "react";
import { useEffect } from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const { totalPrice, setTotalPrice } = useState(0);
  const { disabled, setDisabled } = useState(false);
  const totalItemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      <div
        id="cart"
        style={{ backgroundColor: "white" }}
        className="min-w-[340px] min-h-full max-h-max shadow-lg"
      >
        <div className="text-lg font-medium text-gray-900">
          <div>
            <div className="underline">Shopping Cart</div>
            {cartItems.length === 0 && <div className="text-center">Empty</div>}
          </div>
          {cartItems.map((item) => (
            <div className="flex flex-row p-2" key={item.id}>
              <div className="mr-2">
                <img
                  className="object-cover w-[150px] h-[150px]"
                  src={item.img}
                ></img>
              </div>
              <div className="text-m">
                <div>{item.name}</div>
                <div>Quantity: {item.qty}</div>
                <div>Price: {item.price * item.qty} </div>
                <div className="flex">
                  <button
                    onClick={() => onAdd(item)}
                    className="add m-1 h-[30px] w-[30px] text-xs bg-gre hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex justify-center"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item)}
                    className="remove  m-1 h-[30px] w-[30px] text-xs bg-gre hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex justify-center"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="font-bold text-center text-lg">
            Total: {totalItemPrice.toFixed(2)}
          </div>
        ) : null}
        <div className=" mt-2 mb-2 w-[full] flex justify-center items-center">
          <button
            className="h-[40px] w-[100px] text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
            disabled={cartItems.length === 0}
            onClick={() => console.log("checkout click")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
