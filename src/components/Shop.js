import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ShopItem from './ShopItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random');
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <Link to={`/shop/insertUniqueIDHere`}>
        <Button variant='primary'>Random Doggo</Button>
      </Link>
    </div>
  );
}

export default Shop;
