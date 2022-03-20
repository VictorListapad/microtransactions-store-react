function Cart(props) {
  const { order, toggleCart } = props;
  return (
    <div className="cart purple darken-4 white-text" onClick={toggleCart}>
      <i className="material-icons">shopping_cart</i>
      <span>{order.length}</span>
    </div>
  );
}

export { Cart };
