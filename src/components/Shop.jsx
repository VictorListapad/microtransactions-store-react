import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { ItemList } from "./ItemList";
import { Preloader } from "./Preloader";
function Shop() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setItems([...data.featured, ...data.daily]));
  }, []);

  function addToTheCart(item) {
    const foundIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (foundIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === foundIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  }

  function toggleCart() {
    setShowCart(!showCart);
  }
  return (
    <main>
      <Cart order={order} toggleCart={toggleCart} />
      {items.length ? (
        <ItemList items={items} addToTheCart={addToTheCart} />
      ) : (
        <Preloader />
      )}
      {showCart && <CartList order={order} />}
    </main>
  );
}

export { Shop };
