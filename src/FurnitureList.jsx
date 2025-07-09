import React from 'react';
import Furniture3DView from './Furniture3DView';

const furnitureData = [
  {
    id: 1,
    name: 'Modern Chair',
    price: 120,
    description: 'A sleek and comfortable modern chair perfect for any contemporary space.',
    model: 'chair',
  },
  {
    id: 2,
    name: 'Classic Table',
    price: 250,
    description: 'An elegant classic table that combines timeless design with functionality.',
    model: 'table',
  },
];

function FurnitureList() {
  return (
    <div className="container">
      <div className="furniture-list">
        {furnitureData.map(item => (
          <div key={item.id} className="furniture-card">
            <div className="furniture-3d-container">
              <Furniture3DView model={item.model} />
            </div>
            <div className="furniture-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FurnitureList;
