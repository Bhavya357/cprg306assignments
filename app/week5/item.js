import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border p-2 mb-2">
      <strong>{name}</strong> - Quantity: {quantity}, Category: {category}
    </li>
  );
};

export default Item;