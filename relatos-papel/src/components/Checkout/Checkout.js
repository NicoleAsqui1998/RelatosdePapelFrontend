import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total = 0 } = location.state || {};
  const { clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    shippingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
  });

  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setPurchaseCompleted(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (purchaseCompleted) {
    return <h2>Thank you for your purchase!</h2>;
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <form onSubmit={handleFormSubmit}>
        <h3>Shipping Information</h3>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <input
            type="text"
            id="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
        </div>

        <h3>Payment Details</h3>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Name on Card:</label>
          <input
            type="text"
            id="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="checkout__submit">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
