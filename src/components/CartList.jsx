import { CartListItem } from "./CartListItem";
function CartList(props) {
  const { order, incQuantity, decQuantity, deleteFromCart, toggleCart } = props;
  const calculateTotal = order.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  return (
    <>
      <ul className="collection cart-list">
        <li className="collection-item" style={{ textAlign: "center" }}>
          Cart{" "}
          <span onClick={() => toggleCart()}>
            <i className="material-icons cart-quantity secondary-content">
              close
            </i>
          </span>
        </li>
        {order.length ? (
          order.map((item) => (
            <CartListItem
              key={item.id}
              {...item}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
              deleteFromCart={deleteFromCart}
            />
          ))
        ) : (
          <li className="collection-item" style={{ textAlign: "center" }}>
            Cart is empty
          </li>
        )}
        <li className="collection-item">Total: {calculateTotal} VB</li>
      </ul>
    </>
  );
}

export { CartList };
