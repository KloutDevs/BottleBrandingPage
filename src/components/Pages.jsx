import React from 'react';
import '../css/Pages.css';

export function Pages() {
  return (
    <div className="pages-container">
      {[1, 2, 3, 4, 5].map((number) => (
        <div key={number} className="page">
          <h1>{number}</h1>
        </div>
      ))}
    </div>
  );
}