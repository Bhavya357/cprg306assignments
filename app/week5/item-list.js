// /app/week5/item-list.js
"use client";
import React, { useState, useEffect } from 'react';
import Item from './item';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the items from the JSON file
    fetch('/app/week5/items.json') // Adjust the path if needed
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  // Sort the Items
  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortBy === 'grouped') {
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    }
  });

  // Create Sort Buttons
  const renderSortButton = (sortOption) => (
    <button
      key={sortOption}
      className={`mr-2 px-3 py-1 rounded focus:outline-none ${
        sortBy === sortOption ? 'bg-blue-500 text-white' : 'bg-gray-300'
      }`}
      onClick={() => setSortBy(sortOption)}
    >
      {sortOption}
    </button>
  );

  // Render the Items
  return (
    <div>
      <div className="mb-4">
        {renderSortButton('name')}
        {renderSortButton('category')}
        {renderSortButton('grouped')}
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
