import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripeLoadedPromise = loadStripe(
  "pk_test_51Lk7oOFKeOoHeQ13IzlX3FoBOY3BxOS4eY3fef0HIgi56tT46n5nGlD0soTm7kHMM4GwvC5VHvBVcXCT9CJ5S9fu00cyIGFv34"
);

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  const [email, setEmail] = useState("");
  const totalItemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalQuantity = cartItems.reduce((a, c) => a + c.qty, 0);

  function handleFormSubmit(e) {
    e.preventDefault();
    const lineItems = cartItems.map((product) => {
      return { price: product.stripeID, quantity: product.qty };
    });
    console.log(lineItems);
    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "https://proleon-stickers.netlify.app/shop",
          cancelUrl: "https://proleon-stickers.netlify.app/shop",
          customerEmail: email,
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  }

  return (
    <>
      <div>
        <div
          id="cart"
          className="p-4 bg-[#F8B6B5] min-w-[340px] min-h-full max-h-max shadow-lg rounded-lg text-white"
        >
          <div className="text-lg font-medium">
            <div>
              <div className="flex underline">Shopping Cart</div>
              {cartItems.length === 0 && (
                <div className="text-center">Empty</div>
              )}
            </div>
            {cartItems.map((item) => (
              <div className="flex flex-row p-2 " key={item.id}>
                <div className="mr-2">
                  <img
                    alt={`${item.name}-product-info`}
                    className="object-cover max-w-[150px] min-h-[150px]"
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
                      className="add m-1 h-[30px] w-[30px] text-xs bg-gre hover:bg-[#20c4a6] text-white font-bold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded flex justify-center"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item)}
                      className="remove  m-1 h-[30px] w-[30px] text-xs bg-gre hover:bg-[#20c4a6] text-white font-bold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded flex justify-center"
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
              Total: {totalItemPrice.toFixed(2)} <br />
              Total Items: {totalQuantity}
            </div>
          ) : null}
          <div className=" mt-2 mb-2 w-[full] flex justify-center items-center">
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={handleFormSubmit}
            >
              <input
                className="border-white border-2 border-solid rounded-md pl-2"
                required
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <button
                className="m-2 h-[40px] w-[100px] text-sm bg-transparent hover:bg-[#20c4a6] text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded "
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
