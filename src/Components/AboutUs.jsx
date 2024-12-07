import { motion } from "framer-motion";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const expertiseAreas = [
    "VLSI Design and Verification",
    "FPGA Development and Training",
    "Embedded Systems",
    "Semiconductor Skill Development",
  ];

  const whatWeDo = [
    {
      title: "Training Programs",
      description:
        "We specialize in offering hands-on training tailored for students, working professionals, and academia, covering advanced topics such as SystemVerilog, RTL Design, ARM-based systems, and more.",
    },
    {
      title: "Industry Collaboration",
      description:
        "We collaborate with engineering institutions and industries to provide customized training, enabling students to align their skills with industry demands.",
    },
    {
      title: "Product Development",
      description:
        "We develop innovative solutions, such as smart controllers for agriculture, high-performance SoCs, and satellite communication systems, ensuring real-world application of our expertise.",
    },
    {
      title: "Workshops & Webinars",
      description:
        "We organize workshops, such as FPGA-based system design and SystemVerilog training, and webinars featuring industry experts to foster continuous learning.",
    },
  ];

  const whyChooseUs = [
    "Experienced trainers with hands-on industry knowledge.",
    "Focused approach to bridging the gap between academia and industry.",
    "Affordable and accessible training programs for all.",
    "Commitment to innovation, skill development, and entrepreneurship.",
  ];

  return (
    <section
      id="about"
      className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introduction Section */}
        <motion.div className="max-w-4xl mx-auto mb-16" variants={itemVariants}>
          <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center">
            About Us – Anmaya Technologies
          </h1>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            At Anmaya Technologies, we are dedicated to shaping the future of
            semiconductor and embedded system design through innovative skill
            development programs and cutting-edge solutions. Based in Udupi, our
            mission is to bridge the knowledge gap in Tier 2 and Tier 3 cities,
            providing access to high-quality VLSI and embedded systems training.
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our Core Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {area}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="mb-16 bg-indigo-50 p-8 rounded-xl"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            To become a trusted partner in semiconductor education and
            innovation, creating opportunities for individuals to excel in VLSI
            and embedded systems, while contributing to India's technological
            advancements.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Why Choose Anmaya Technologies?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <svg
                  className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0"
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
                <p className="text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center text-lg text-gray-700 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <p className="italic">
            Join us at Anmaya Technologies, where we empower dreams and build
            the future, one design at a time.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
