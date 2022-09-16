export default function Cart(props) {
  return (
    <>
      <div
        id="cart"
        style={{ backgroundColor: "white" }}
        className="hidden w-[240px] h-[100%] absolute top-[64px] right-0 shadow-lg"
      >
        <div className="text-lg font-medium text-gray-900">
          {JSON.stringify(props.productList[0])}
        </div>
      </div>
      {/* <div
        id="cart"
        style={{ backgroundColor: "white" }}
        className="hidden w-[240px] h-[100%] absolute top-[64px] right-0 shadow-lg"
      >
        <div className="text-lg font-medium text-gray-900">Shopping Cart</div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              <li key={props.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={cartList[0].img}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a>{props.name}</a>
                      </h3>
                      <p className="ml-4">{props.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}
