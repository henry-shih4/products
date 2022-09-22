import Card from "./Card.js";

export default function StoreFront(props) {
  const { products, onAdd } = props;

  return (
    <>
      <div className="bg-white">
        <div className="mx-3 flex flex-wrap justify-start">
          {products.map((product) => {
            return <Card key={product.id} product={product} onAdd={onAdd} />;
          })}
        </div>
      </div>
    </>
  );
}
