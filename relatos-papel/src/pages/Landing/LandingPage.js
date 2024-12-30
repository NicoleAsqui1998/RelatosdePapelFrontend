import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    source: ''
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFormSubmitted(true);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.firstName) errors.firstName = 'First name is required';
    if (!data.lastName) errors.lastName = 'Last name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.source) errors.source = 'Please select where you heard about us';
    return errors;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      {formSubmitted ? (
        <h2>Thank you for your submission!</h2>
      ) : (
        <form onSubmit={handleSubmit} className="landing-page__form">
          <h1>Welcome to Our Service!</h1>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="source">How did you hear about us?</label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className={errors.source ? 'error' : ''}
            >
              <option value="">Select...</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend">Friend</option>
              <option value="Advertisement">Advertisement</option>
            </select>
            {errors.source && <p className="error-text">{errors.source}</p>}
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default LandingPage;
