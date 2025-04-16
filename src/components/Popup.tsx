import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50 p-4 md:p-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md mx-auto p-8 relative"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Peace hand emoji icon */}
              <div className="text-6xl mb-2">✌️</div>
              
              <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                Site is under construction
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Meanwhile, check out{' '}
                <a
                  href="https://anishsarkar.framer.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline decoration-2"
                >
                  my portfolio
                </a>
              </p>

              <button
                onClick={() => setIsVisible(false)}
                className="mt-6 px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl transition-colors w-full sm:w-auto"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 