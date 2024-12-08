import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Solutions from "./Components/Solutions";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
