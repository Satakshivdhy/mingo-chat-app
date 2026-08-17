import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="card bg-base-100 shadow-2xl"
        >
          <div className="card-body flex flex-col items-center justify-center gap-8 text-center py-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-focus mb-3">
                Mingo Chat
              </h1>
              <p className="text-xl text-base-content/70">
                Connect. Chat. Communicate.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base-content/60 max-w-md leading-relaxed"
            >
              Experience seamless real-time messaging with Mingo Chat. 
              Connect with friends, family, and colleagues instantly.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 w-full"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl">⚡</div>
                <p className="text-sm font-semibold">Lightning Fast</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl">🔒</div>
                <p className="text-sm font-semibold">Secure</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl">🎨</div>
                <p className="text-sm font-semibold">Beautiful</p>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary flex-1"
              >
                Login to Chat
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn btn-outline flex-1"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Footer Text */}
            <p className="text-xs text-base-content/40">
              Don't have an account? <span className="link link-primary">Sign up</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;