import { Mail, Phone } from "lucide-react";
import logo from "/assets/icons/background-logo.jpeg";
import whatsApp from "/assets/icons/whatsapp.png";
import instagram from "/assets/icons/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 md:px-30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Rehoboth" className="w-[100px]" />
              <span className="text-2xl md:text-3xl font-bold ml-2">
                Rehoboth Floral
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-xl md:text-xl">
              Creating beautiful floral arrangements for life's most precious
              moments. From weddings to sympathy flowers, we bring nature's
              beauty to your special occasions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/233559359481"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsApp}
                  alt="whatsapp-icon"
                  className="h-6 w-6 cursor-pointer transition-colors"
                />
              </a>
              <a
                href="https://instagram.com/rehobothfloral"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="instagram-icon"
                  className="h-6 w-6 cursor-pointer transition-colors"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-highlight-words" />
                <span className="text-gray-300 md:text-xl">(055) 935-9481</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-highlight-words" />
                <span className="text-gray-300 md:text-xl">
                  rehobothflorals@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="mb-3">
                <a
                  href="/shop"
                  className="text-gray-300 hover:text-highlight-words md:text-xl transition-colors"
                >
                  Shop
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/about"
                  className="text-gray-300 hover:text-highlight-words md:text-xl  transition-colors"
                >
                  About
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-highlight-words md:text-xl  transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-10 text-center">
          <p className="text-gray-300 text-sm md:text-xl">
            © 2025 Rehoboth Floral Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
