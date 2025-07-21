import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="flex justify-between items-center p-6">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          {/* Logo */}
          <img 
            src="/logo.jpg" 
            alt="Soul on Solana Logo" 
            className="w-12 h-12 rounded-full border-2 border-red-400 object-cover"
          />
          <span className="text-2xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            style={{
              textShadow: '0 0 20px rgba(168,85,247,0.9), 0 0 40px rgba(168,85,247,0.6), 1px 1px 3px rgba(0,0,0,0.8)'
            }}>
            Soul on Solana
          </span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 text-lg">
          <motion.a 
            href="#hero" 
            className="text-gray-300 hover:text-red-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-gray-300 hover:text-red-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Experiment
          </motion.a>
          <motion.a 
            href="#tokenomics" 
            className="text-gray-300 hover:text-red-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Burn Mechanics
          </motion.a>
          <motion.a 
            href="#how-to-buy" 
            className="text-gray-300 hover:text-red-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            Sacrifice
          </motion.a>
        </div>
        
        {/* Social Links & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="https://x.com/soulonsol_sos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://t.me/soulonsolchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTelegram size={24} />
          </motion.a>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-red-500/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#hero" 
              className="block text-gray-300 hover:text-red-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block text-gray-300 hover:text-red-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiment
            </a>
            <a 
              href="#tokenomics" 
              className="block text-gray-300 hover:text-red-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Burn Mechanics
            </a>
            <a 
              href="#how-to-buy" 
              className="block text-gray-300 hover:text-red-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sacrifice
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
