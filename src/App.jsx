import React from 'react';
import FurnitureList from './FurnitureList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Furniture Gallery</h1>
        <p className="subtitle">Explore our collection in 3D</p>
      </header>
      <main className="main-content">
        <FurnitureList />
      </main>
      <footer className="footer">
        &copy; 2024 Furniture Gallery. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
