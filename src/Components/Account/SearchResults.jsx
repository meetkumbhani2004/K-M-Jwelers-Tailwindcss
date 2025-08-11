import React, { useEffect, useState } from 'react';
import './searchresult.css'; // optional styling

const SearchResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("searchResults")) || [];
    setResults(stored);
  }, []);

  return (
    <div className="search-results-page">
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {results.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image1} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
