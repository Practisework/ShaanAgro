// components/Navbar.js

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <motion.nav className="bg-white p-4 ">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-black text-xl font-bold">
          <Link href="/" onClick={toggleMenu}>
            <p>home</p>
          </Link>
        </div>
        <div className="hidden md:flex justify-around w-96 space-x-4">
          <Link href="/about" passHref>
            <p className="text-black text-xl hover:text-main cursor-pointer">
              आमचे ध्येय
            </p>
          </Link>
          <Link href="/products" passHref>
            <p className="text-black text-xl hover:text-main cursor-pointer">
              शेतीचे औजारे
            </p>
          </Link>
          <Link href="/contact" passHref>
            <p className="text-black text-xl hover:text-main cursor-pointer">
              संपर्क साधा
            </p>
          </Link>
        </div>
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute w-96 right-10 bg-white"
          >
            <Link onClick={toggleMenu} href="/about" passHref>
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: [0, 0, 1] }}
                transition={{
                  type: "ease-in-and-out",
                  stiffness: -120,
                  duration: 0.3,
                }}
                className="text-xl text-center py-6 text-black hover:text-main cursor-pointer"
              >
                आमचे ध्येय
              </motion.p>
            </Link>
            <Link onClick={toggleMenu} href="/products" passHref>
              <motion.p
                initial={{ y: -175, opacity: 0 }}
                animate={{ y: 0, opacity: [0, 0, 1] }}
                transition={{
                  type: "ease-in-and-out",
                  stiffness: -120,
                  duration: 0.6,
                }}
                className="block text-xl text-center py-6 text-black hover:text-main cursor-pointer"
              >
                शेतीचे औजारे
              </motion.p>
            </Link>
            <Link onClick={toggleMenu} href="/contact" passHref>
              <motion.p
                initial={{ y: -250, opacity: 0 }}
                animate={{ y: 0, opacity: [0, 0, 1] }}
                transition={{
                  type: "ease-in-and-out",
                  stiffness: -120,
                  duration: 1.2,
                }}
                className="block text-xl text-center py-6 text-black hover:text-main cursor-pointer"
              >
                संपर्क साधा
              </motion.p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
