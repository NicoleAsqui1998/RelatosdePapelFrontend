import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { books } from '../../data/LibrosData';
import './BookList.css';
import { useCart } from '../../context/CartContext';

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-list">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="book-list__search"
      />
      {filteredBooks.map((book) => (
        <div key={book.id} className="book-list__item">
          <h3
            className="book-list__item__title"
            onClick={() => handleBookClick(book.id)}
          >
            {book.title}
          </h3>
          <p className="book-list__item__price">${book.price}</p>
          <button
            className="book-list__item__button"
            onClick={() => addToCart(book)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
