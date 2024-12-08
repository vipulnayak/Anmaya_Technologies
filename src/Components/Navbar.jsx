import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg';

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
          >
            <Link to="/">
              <img 
                src={logo} 
                alt="Anmaya Tech Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-full shadow-lg"
                loading="eager"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
