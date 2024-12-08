import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// Import your background image
import HeroBg from '../assets/hero-bg.jpg';  // Add your hero background image
// Import solution images
import Product1 from '../assets/product1.jpeg';
import Product2 from '../assets/product2.jpeg';
import Product3 from '../assets/product3.jpeg';
import Product4 from '../assets/product4.jpeg'; 

const LandingPage = () => {
  return (
    <div className="overflow-hidden bg-gray-900">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
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
      className="relative h-screen flex items-center justify-center bg-gray-900"
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
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
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

const AboutSection = () => {
  const features = [
    {
      title: "Our Mission",
      description: "Bridging the knowledge gap in semiconductor education through innovative training solutions and hands-on experience.",
      icon: "🎯"
    },
    {
      title: "Our Vision",
      description: "To become India's leading force in VLSI and embedded systems education, empowering the next generation of engineers.",
      icon: "👁️"
    },
    {
      title: "Our Impact",
      description: "Successfully trained over 1000+ students and professionals, with 90% placement rate in semiconductor industry.",
      icon: "⚡"
    }
  ];

  const expertise = [
    {
      area: "VLSI Design",
      details: [
        "RTL Design & Verification",
        "SystemVerilog",
        "Physical Design",
        "Timing Analysis"
      ],
      color: "from-blue-400 to-purple-500"
    },
    {
      area: "FPGA Development",
      details: [
        "Hardware Design",
        "IP Core Development",
        "System Integration",
        "Prototyping"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      area: "Embedded Systems",
      details: [
        "ARM Architecture",
        "IoT Solutions",
        "Real-time Systems",
        "Firmware Development"
      ],
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-blue-400 mb-6">About Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Anmaya Technologies is revolutionizing semiconductor education in India, 
            making advanced VLSI and embedded systems training accessible to all.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="space-y-12">
          {expertise.map((exp, index) => (
            <motion.div
              key={exp.area}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-4`}>
                    {exp.area}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {exp.details.map((detail) => (
                      <span
                        key={detail}
                        className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "1000+", label: "Students Trained" },
            { number: "50+", label: "Industry Partners" },
            { number: "90%", label: "Placement Rate" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <h4 className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</h4>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const solutions = [
    {
      title: "FPGA Hardware Platforms",
      description: "Hands-on chip design practice using our low-cost designed hardware",
      image: Product1, // Using local image
      features: ["Cost-effective hardware solutions", "Practical design experience", "Industry-standard platforms"]
    },
    {
      title: "Vernacular Language Support",
      description: "Multi-language support for better accessibility",
      languages: ["Kannada", "Malayalam", "Telugu", "Tamil"],
      image: Product2, // Using local image
      icon: "🌐"
    },
    {
      title: "Mobile Learning App",
      description: "Interactive tutorials and projects with virtual labs and design tools",
      image: Product3, // Using local image
      features: [
        "Interactive tutorials",
        "Hands-on projects",
        "Virtual labs",
        "Design tools"
      ]
    },
    {
      title: "Online Access to EDA Tools and Hardware",
      description: "Remote access to essential development tools and hardware",
      image: Product4, // Using local image
      features: [
        "Access to EDA from anywhere",
        "Access to FPGA hardware from anywhere",
        "Cloud-based development environment"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-gray-900">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Product Innovation
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our innovative solutions designed to make FPGA and embedded systems learning 
            accessible and practical for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {solution.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {solution.icon && (
                    <span className="text-3xl mr-3">{solution.icon}</span>
                  )}
                  <h3 className="text-xl font-semibold text-blue-400">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {solution.description}
                </p>

                {solution.languages && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.languages.map((lang) => (
                      <span 
                        key={lang}
                        className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                )}

                {solution.features && (
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li 
                        key={feature}
                        className="flex items-center text-gray-300"
                      >
                        <svg 
                          className="w-5 h-5 text-blue-400 mr-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

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
    <section className="py-16 bg-indigo-50">
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
    <section id="contact" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-blue-400"
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
            className="w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold
                     hover:bg-blue-600 transition-all duration-300"
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
