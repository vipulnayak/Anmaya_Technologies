import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 sm:space-x-4"
          >
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Anmaya Tech Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-full shadow-lg"
                loading="eager"
              />
              <div className="ml-2 sm:ml-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-['Montserrat']">
                  ANMAYA
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-blue-400 tracking-widest font-light">
                  TECHNOLOGIES
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
