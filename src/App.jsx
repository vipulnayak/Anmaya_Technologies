import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;