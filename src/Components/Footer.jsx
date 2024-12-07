import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-gray-300 text-lg mb-12 text-center">
            Interested in our services or partnership opportunities? Reach out
            to us!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-indigo-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-gray-400">Email:</p>
                <a
                  href="mailto:info@anmaya.in"
                  className="text-white hover:text-indigo-400 transition-colors"
                >
                  info@anmaya.in
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-indigo-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="text-gray-400">Phone:</p>
                <a
                  href="tel:+917975179172"
                  className="text-white hover:text-indigo-400 transition-colors"
                >
                  +91-7975179172
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-indigo-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="text-gray-400">Address:</p>
                <p className="text-white">
                  Door No. 3-88G17, First Floor,
                  <br />
                  V4 Central Township, Kukkikatte,
                  <br />
                  Udupi - 576101
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-8"></div>

        {/* Copyright and Social Links */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex justify-center space-x-8 mb-6">
            {["facebook", "twitter", "linkedin"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`fab fa-${platform} text-2xl`}></i>
              </motion.a>
            ))}
          </div>
          <div className="text-gray-400">
            <p>&copy; 2024 Anmaya Technologies.</p>
            <p>All Rights Reserved</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
