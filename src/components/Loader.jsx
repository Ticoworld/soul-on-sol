import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onComplete(), 500) // Small delay before completing
          return 100
        }
        return prev + Math.random() * 15 // Randomized progress increments
      })
    }, 150)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0, 1, 0],
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 z-10">
        {/* Main Logo/Title */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Soul Spiral Animation */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Outer Soul Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gray-600 opacity-30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Middle Soul Spiral */}
            <motion.div
              className="absolute inset-2 rounded-full border border-purple-400 opacity-50"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Soul Core */}
            <motion.div
              className="absolute inset-6 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-400/30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating Soul Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [0, Math.cos(i * 120 * Math.PI / 180) * 30],
                  y: [0, Math.sin(i * 120 * Math.PI / 180) * 30],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Ghost Trail Effect */}
            <motion.div
              className="absolute inset-4 rounded-full border border-gray-400"
              animate={{ 
                rotate: [0, -360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                borderStyle: 'dashed',
                borderWidth: '1px'
              }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
            Soul On Sol
          </h1>
          <p className="text-gray-400 text-lg">Loading the burn...</p>
        </motion.div>

        {/* Web3 Style Progress Bar */}
        <div className="w-80 mx-auto space-y-4">
          {/* Hex Progress Display */}
          <motion.div
            className="font-mono text-green-400 text-xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            0x{Math.floor(progress).toString(16).padStart(2, '0').toUpperCase()}%
          </motion.div>

          {/* Progress Bar Container */}
          <div className="relative bg-gray-900 rounded-lg border border-gray-700 h-3 overflow-hidden">
            {/* Background Scanline Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Progress Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Glitch Effect on Progress Bar */}
              <motion.div
                className="absolute inset-0 bg-white mix-blend-overlay"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: Math.random() * 3 }}
              />
            </motion.div>
          </div>

          {/* Loading Text Animation */}
          <motion.div
            className="text-gray-500 text-sm font-mono"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {progress < 30 && "Initializing blockchain connection..."}
            {progress >= 30 && progress < 60 && "Loading smart contracts..."}
            {progress >= 60 && progress < 90 && "Verifying burn addresses..."}
            {progress >= 90 && "Deploying Soul On Sol..."}
          </motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Terminal-style Loading Dots */}
        <motion.div
          className="text-green-400 font-mono text-2xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
          >
            ●
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          >
            ●
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
          >
            ●
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
