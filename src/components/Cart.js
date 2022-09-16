export default function Cart(props) {
  const { cartItems, onAdd } = props;
  return (
    <>
      <div
        id="cart"
        style={{ backgroundColor: "white" }}
        className="hidden w-[240px] min-h-full max-h-max absolute top-[64px] right-0 shadow-lg"
      >
        <div className="text-lg font-medium text-gray-900">
          <div>
            <div>Shopping Cart</div>
            {cartItems.length === 0 && <div>Empty</div>}
          </div>
          {cartItems.map((item) => (
            <div className="flex flex-row p-2" key={item.id}>
              <div className="mr-2">
                <img
                  className="object-cover w-[100px] h-[100px]"
                  src={item.img}
                ></img>
              </div>
              <div>
                <div>{item.name}</div>
                <div>Quantity: {item.qty}</div>
                <div>{item.price * item.qty} </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-2 mb-2 w-[full] flex justify-center items-center">
          <button className="h-[40px] w-[100px] text-xs bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
