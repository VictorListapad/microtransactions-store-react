function CartListItem(props) {
  const { name, quantity, price } = props;
  return (
    <li className="collection-item">
      <div>
        {name} x {quantity} = {price}
        <span>
          <i className="material-icons">delete</i>
        </span>
      </div>
    </li>
  );
}

export { CartListItem };
