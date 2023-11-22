// item-list.js
import React from 'react';
import Item from './item';

const ItemList = () => {
  const items = [
    // ... (the item objects you provided)
  ];

  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ul>
  );
};

export default ItemList;
