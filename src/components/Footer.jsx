import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center">
            {/* Logo/Brand */}
            <Link to="/" className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ArtifactHub
              </span>
            </Link>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-md">
              <div className="flex flex-col items-center md:items-end space-y-2">
                <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <FaEnvelope className="mr-2 h-5 w-5 flex-shrink-0" />
                  <a href="mailto:info@artifacthub.com" className="text-base">
                    info@artifacthub.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                  <FaPhone className="mr-2 h-5 w-5 flex-shrink-0" />
                  <a href="tel:+8801234568901" className="text-base">
                    +880 1234 568901
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} ArtifactHub. All rights
              reserved.
            </p>

            {/* Optional Links */}
            <div className="mt-4 flex space-x-8">
              <Link
                to="/privacy"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
