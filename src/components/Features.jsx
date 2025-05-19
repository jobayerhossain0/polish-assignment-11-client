import {
  FaSearch,
  FaHistory,
  FaUserShield,
  FaMobileAlt,
  FaPalette,
  FaLock,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaSearch className="text-3xl text-indigo-500" />,
      title: "Advanced Search",
      description:
        "Discover artifacts by era, culture, or keyword with our intuitive search system.",
    },
    {
      icon: <FaHistory className="text-3xl text-indigo-500" />,
      title: "Historical Timeline",
      description:
        "Explore artifacts in chronological order with interactive timelines.",
    },
    {
      icon: <FaUserShield className="text-3xl text-indigo-500" />,
      title: "Secure Authentication",
      description:
        "JWT-protected user accounts with role-based access control.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-indigo-500" />,
      title: "Fully Responsive",
      description:
        "Seamless experience across all devices—mobile, tablet, and desktop.",
    },
    {
      icon: <FaPalette className="text-3xl text-indigo-500" />,
      title: "Modern UI",
      description:
        "Elegant design with Tailwind CSS, animations, and dark mode support.",
    },
    {
      icon: <FaLock className="text-3xl text-indigo-500" />,
      title: "Admin Dashboard",
      description:
        "Manage artifacts, users, and analytics with a powerful admin panel.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
            Explore History with{" "}
            <span className="text-indigo-600">Modern Elegance</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated experience blending cutting-edge technology with
            historical discovery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800/50 dark:border dark:border-gray-700 hover:border-indigo-400/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-6 bg-indigo-100/20 rounded-full group-hover:bg-indigo-100/40 transition-colors duration-300 dark:bg-indigo-900/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-indigo-500/30">
            Start Exploring Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
