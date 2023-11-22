// item.js
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-200 p-4 mb-2 rounded">
      <span className="font-bold">{name}</span>
      <span className="ml-2">Quantity: {quantity}</span>
      <span className="ml-2">Category: {category}</span>
    </li>
  );
};

export default Item;
