import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import BookDetails from './components/BookList/BookDetails';  // Asegúrate de que la ruta sea correcta
import Home from './pages/Home';
import Books from './pages/Books';
import LandingPage from './pages/Landing/LandingPage';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app__navbar">
        <Navbar />
      </header>
      <main className="app__content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer className="app__footer">
        © 2024 Your Bookstore. All rights reserved.
      </footer>
    </div>
  );
};

export default App;


