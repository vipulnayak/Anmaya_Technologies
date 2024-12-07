import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// Import your background images
import HeroBg from '../assets/hero-bg.jpg';  // Add your hero background image
import Product1 from '../assets/product1.jpeg'; // Add your product images
import Product2 from '../assets/product2.jpeg';
import Product3 from '../assets/product3.jpeg';

// Add the Testimonials component definition
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Corp",
      text: "Working with Anmaya Technologies has transformed our business processes."
    },
    {
      name: "Jane Smith",
      role: "CTO, Innovation Labs",
      text: "Their semiconductor solutions are cutting-edge and reliable."
    },
    {
      name: "Mike Johnson",
      role: "Director, Future Systems",
      text: "Outstanding support and exceptional product quality."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProductSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome to Anmaya Technologies
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-gray-200"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Innovating the Future of Technology
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold
                     hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Solutions
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const ProductSection = () => {
  const products = [
    {
      title: "Advanced Solutions",
      image: Product1,
      description: "Cutting-edge technology solutions for modern businesses."
    },
    {
      title: "Innovation Hub",
      image: Product2,
      description: "Creating tomorrow's technology solutions today."
    },
    {
      title: "Digital Transformation",
      image: Product3,
      description: "Transforming businesses through digital innovation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Solutions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{product.title}</h3>
                <p className="text-gray-400">{product.description}</p>
                <motion.button
                  className="mt-4 text-blue-400 hover:text-blue-300 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
    })
    .catch(() => {
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold
                       hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
          {status && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-4 text-center ${status.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default LandingPage;
