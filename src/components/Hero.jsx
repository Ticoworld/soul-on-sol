import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaCopy } from 'react-icons/fa'

const Hero = () => {
  const [copied, setCopied] = useState(false)
  
  // Contract Address for $SOS - REAL CA
  const contractAddress = "Enwj2k9WjDte8kuX6sfDXkCik6VtYrhoXXu78uCsmoon"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="hero" className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
      <motion.div
        className="text-center space-y-8 max-w-4xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-black leading-tight"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            background: "linear-gradient(-45deg, #9945FF, #14F195, #FF6B9D, #9945FF)",
            backgroundSize: "400% 400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SOUL ON<br />SOLANA
        </motion.h1>

        {/* Ticker */}
        <motion.div
          className="inline-block px-6 py-3 bg-purple-600 rounded-full pulse-glow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl font-bold">$SOS</span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Soul Image */}
          <motion.img 
            src="/soul.jpg" 
            alt="Soul on Solana" 
            className="w-64 h-64 rounded-full border-4 border-red-400 object-cover shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              You're here because your soul is already gone.
            </p>
            <p className="text-lg text-red-400 font-semibold mb-2">
              We demand no allegiance, only sacrifice.
            </p>
            <p className="text-lg text-purple-400 font-semibold italic">
              Not Save Our Souls. But Soul On Sol.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="#how-to-buy"
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 text-white no-underline"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="inline mr-2" />
            SACRIFICE YOUR SOUL
          </motion.a>
          
          <motion.button
            onClick={copyToClipboard}
            className="px-8 py-4 bg-gray-800 border border-red-500 rounded-full text-lg font-bold hover:bg-red-900 transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCopy className="mr-2" />
            {copied ? "Copied!" : "Copy CA"}
          </motion.button>
        </motion.div>

        {/* Contract Address */}
        <motion.div 
          className="mt-4 p-4 bg-gray-900 rounded-lg border border-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-gray-400 mb-2">Contract Address:</p>
          <p className="font-mono text-purple-300 break-all text-sm">{contractAddress}</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
