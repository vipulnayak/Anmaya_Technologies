import { motion } from "framer-motion";

const Solutions = () => {
  const solutions = [
    {
      title: "FPGA Hardware Platforms",
      description: "Hands-on chip design practice using our low-cost designed hardware",
      image: "https://www.elprocus.com/wp-content/uploads/FPGA-Architecture.jpg",
      features: ["Cost-effective hardware solutions", "Practical design experience", "Industry-standard platforms"]
    },
    {
      title: "Vernacular Language Support",
      description: "Multi-language support for better accessibility",
      languages: ["Kannada", "Malayalam", "Telugu", "Tamil"],
      image: "https://img.freepik.com/free-vector/gradient-language-translator-illustration_23-2149224553.jpg",
      icon: "🌐"
    },
    {
      title: "Mobile Learning App",
      description: "Interactive tutorials and projects with virtual labs and design tools",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
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
      image: "https://img.freepik.com/free-vector/cloud-computing-modern-flat-concept-web-banner-design_88138-692.jpg",
      features: [
        "Access to EDA from anywhere",
        "Access to FPGA hardware from anywhere",
        "Cloud-based development environment"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Product Innovation
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our innovative solutions designed to make FPGA and embedded systems learning 
            accessible and practical for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
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
                  <h3 className="text-xl font-semibold text-gray-800">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>

                {solution.languages && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.languages.map((lang) => (
                      <span 
                        key={lang}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
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
                        className="flex items-center text-gray-600"
                      >
                        <svg 
                          className="w-5 h-5 text-indigo-500 mr-2" 
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

export default Solutions; 