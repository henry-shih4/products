import Card from "./Card.js";

export default function StoreFront(props) {
  const { products, onAdd } = props;

  return (
    <>
        <div className="display flex flex-col bg-[#20c4a6]">
          <div className="ml-5 text-white text-3xl p-4">Our Products</div>
          <div>
            <div className="mx-3 flex flex-wrap justify-start">
              {products.map((product) => {
                return (
                  <Card key={product.id} product={product} onAdd={onAdd} />
                );
              })}
            </div>
          </div>
        </div>
    </>
  );
}
