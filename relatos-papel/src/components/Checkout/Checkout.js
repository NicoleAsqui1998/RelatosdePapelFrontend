import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total = 0 } = location.state || {};

  const [shippingAddress, setShippingAddress] = useState('');
  const [cardDetails, setCardDetails] = useState('');
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (shippingAddress && cardDetails) {
      setPurchaseCompleted(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  if (purchaseCompleted) {
    return <h2>Thank you for your purchase!</h2>;
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <input
            type="text"
            id="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardDetails">Card Details:</label>
          <input
            type="text"
            id="cardDetails"
            value={cardDetails}
            onChange={(e) => setCardDetails(e.target.value)}
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
