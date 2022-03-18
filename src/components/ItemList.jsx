import { ItemCard } from "./ItemCard";

function ItemList(props) {
  const { items = [] } = props;
  return (
    <div className="items">
      {items.length ? (
        items.map((item) => <ItemCard key={item.id} {...item} />)
      ) : (
        <h2 className="not-found">Nothing Found</h2>
      )}
    </div>
  );
}

export { ItemList };
