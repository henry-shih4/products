import Card from "./Card.js";

export default function StoreFront(props) {
  const { products, onAdd } = props;

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => {
          return <Card key={product.id} product={product} onAdd={onAdd} />;
        })}
      </div>
    </>
  );
}
