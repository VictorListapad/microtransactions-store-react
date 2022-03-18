import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import { ItemList } from "./ItemList";
import { Preloader } from "./Preloader";
function Shop() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setItems([...data.daily, ...data.featured]));
  }, []);
  return (
    <main>{items.length ? <ItemList items={items} /> : <Preloader />}</main>
  );
}

export { Shop };
