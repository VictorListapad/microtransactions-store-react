import { CartListItem } from "./CartListItem";
function CartList(props) {
  const { order } = props;
  return (
    <>
      <ul className="collection cart-list">
        <li className="collection-item" style={{ textAlign: "center" }}>
          Cart
        </li>
        {order.length ? (
          order.map((item) => <CartListItem key={item.id} {...item} />)
        ) : (
          <li className="collection-item" style={{ textAlign: "center" }}>
            Cart is empty
          </li>
        )}
      </ul>
    </>
  );
}

export { CartList };
