function Card(props) {
  const { product, onAdd } = props;
  return (
    <>
      <div className="m-2 shadow-lg max-w-[300px] min-w-[300px]flex shrink bg-white">
        <img
          className="object-cover max-h-[300px] w-full"
          src={product.img}
          alt=""
        />
        <div className="object-cover px-6 py-4">
          <div class="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base mb-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <p>Price: {product.price}</p>
            <button
              onClick={() => {
                onAdd(product);
              }}
              className="h-[40px] w-[100px] text-xs bg-transparent hover:bg-[#20c4a6] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center"
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
