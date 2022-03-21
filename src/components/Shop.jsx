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

  function incQuantity(itemId) {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  }

  function decQuantity(itemId) {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        if (item.quantity === 0) {
          return item;
        } else {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
          };
        }
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  }

  function deleteFromCart(itemId) {
    const filteredOrder = order.filter((item) => item.id !== itemId);
    setOrder(filteredOrder);
  }

  return (
    <main>
      <Cart order={order} toggleCart={toggleCart} />
      {items.length ? (
        <ItemList items={items} addToTheCart={addToTheCart} />
      ) : (
        <Preloader />
      )}
      {showCart && (
        <CartList
          order={order}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
          deleteFromCart={deleteFromCart}
          toggleCart={toggleCart}
        />
      )}
    </main>
  );
}

export { Shop };
