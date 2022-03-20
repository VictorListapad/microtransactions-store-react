function ItemCard(props) {
  const { id, name, description, price, full_background, addToTheCart } = props;
  return (
    <div className="item-card">
      <div className="item-image-container">
        <img src={full_background} alt={name} />
      </div>
      <div className="item-description">
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="btn-container">
          <button
            className="btn add-btn"
            onClick={() => addToTheCart({ id, name, price })}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export { ItemCard };
