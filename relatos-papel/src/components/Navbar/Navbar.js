import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">Home</Link>
      <Link to="/books" className="navbar__link">Books</Link>
      <button className="navbar__link navbar__link--cart" onClick={toggleCart}>
        Cart ({cart.length})
      </button>

      {isCartOpen && (
        <div className="cart-drawer">
          <div className="cart-drawer__content">
            <button className="close-drawer" onClick={toggleCart}>
              Close
            </button>
            <Cart closeCart={toggleCart} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
