import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const FloatingSocials = () => {
  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 flex flex-col gap-6 z-50">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-700 transition-colors hover:scale-125 transform duration-200 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-125 transform duration-200 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl"
      >
        <FaXTwitter size={28} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 transition-colors hover:scale-125 transform duration-200 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg hover:shadow-xl"
      >
        <FaYoutube size={28} />
      </a>
    </div>
  );
};

export default FloatingSocials;
