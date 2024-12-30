import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = ({ closeCart }) => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout', { state: { total } });
  };

  return (
    <div className="cart">
      <h2 className="cart__header">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart__empty">Your cart is empty</p>
      ) : (
        cart.map((book) => (
          <div key={book.id} className="cart__item">
            <div className="cart__item__details">
              <h3 className="cart__item__title">{book.title}</h3>
              <p className="cart__item__price">
                ${book.price.toFixed(2)} x {book.quantity}
              </p>
            </div>
            <button
              className="cart__item__button"
              onClick={() => removeFromCart(book.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cart__footer">
          <p className="cart__total">Total: ${total.toFixed(2)}</p>
          <button className="cart__checkout" onClick={handleCheckout}>
            Confirm Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
