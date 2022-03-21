function CartListItem(props) {
  const {
    id,
    name,
    quantity,
    price,
    incQuantity,
    decQuantity,
    deleteFromCart,
  } = props;
  return (
    <li className="collection-item">
      <div>
        {name} {price} x{" "}
        <span onClick={() => decQuantity(id)}>
          <i className="material-icons cart-quantity">remove</i>
        </span>{" "}
        {quantity}{" "}
        <span onClick={() => incQuantity(id)}>
          <i className="material-icons cart-quantity">add</i>
        </span>{" "}
        = {price * quantity}
        <span onClick={() => deleteFromCart(id)} className="secondary-content">
          <i className="material-icons cart-quantity delete">delete</i>
        </span>
      </div>
    </li>
  );
}

export { CartListItem };
