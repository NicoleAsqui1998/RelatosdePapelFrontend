import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { books } from '../../data/LibrosData';
import './BookDetails.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const { addToCart } = useCart();
  const book = books.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="book-details">
      <h2 className="book-details__title">{book.title}</h2>
      
      <div className="book-details__info">
        <p className="book-details__author"><strong>Author:</strong> {book.author}</p>
        <p className="book-details__price"><strong>Price:</strong> ${book.price}</p>
        <p className="book-details__description"><strong>Description:</strong> {book.description}</p>
        <p className="book-details__genre"><strong>Genre:</strong> {book.genre}</p>
        <p className="book-details__publication-date"><strong>Publication Date:</strong> {book.publicationDate}</p>
        <p className="book-details__language"><strong>Language:</strong> {book.language}</p>
        <p className="book-details__pages"><strong>Pages:</strong> {book.pages}</p>
        <p className="book-details__publisher"><strong>Publisher:</strong> {book.publisher}</p>
      </div>

      <button 
        onClick={() => addToCart(book)} 
        className="book-details__add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default BookDetails;
