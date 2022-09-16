export default function Cart(props) {
  const { cartItems, onAdd } = props;
  return (
    <>
      <div
        id="cart"
        style={{ backgroundColor: "white" }}
        className="hidden w-[240px] h-[100%] absolute top-[64px] right-0 shadow-lg"
      >
        <div className="text-lg font-medium text-gray-900">
          shopping cart is empty{" "}
          {cartItems.map((item) => (
            <div className="flex-row w-full" key={item.id}>
              <div>
                <img className="object-cover h-[100px]" src={item.img}></img>
              </div>
              <div className="flex-row">
                <div>{item.name}</div>
                <div>Quantity: </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
