import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortItems = (a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  };

  const groupByCategory = () => {
    // Implement grouping logic here if needed
  };

  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-2 p-2 ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        {/* Add a third button for grouping, if you decide to implement the extra challenge */}
      </div>
      <ul>
        {items.sort(sortItems).map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;