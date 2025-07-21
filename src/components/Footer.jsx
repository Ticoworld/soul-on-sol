import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaHeart, FaRocket } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: "Twitter", 
      icon: FaTwitter, 
      url: "https://x.com/soulonsol_sos", 
      color: "text-purple-400 hover:text-purple-300" 
    },
    { 
      name: "Telegram", 
      icon: FaTelegram, 
      url: "https://t.me/soulonsolchannel", 
      color: "text-green-400 hover:text-green-300" 
    }
  ]

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Experiment", href: "#about" },
    { name: "Burn Mechanics", href: "#tokenomics" },
    { name: "Sacrifice", href: "#how-to-buy" }
  ]

  return (
    <footer className="relative z-10 bg-black border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
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
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Just smoke, silence, and the distant sound of whales screaming SOS. 
              Not Save Our Souls. But Soul On Sol. Burn with us.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contract Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Contract</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Contract Address:</p>
              <p className="font-mono text-purple-300 text-xs break-all bg-gray-900 p-2 rounded">
                Enwj2k9WjDte8kuX6sfDXkCik6VtYrhoXXu78uCsmoon
              </p>
              <p className="text-gray-500 text-xs">
                Always verify before trading
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Soul on Solana ($SOS). Burned with</span>
            <FaHeart className="text-red-400" />
            <span>on Solana</span>
            <FaRocket className="text-purple-400" />
          </div>
          
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>This is a burn experiment with no promises.</p>
            <p>Sacrifice responsibly. DYOR always.</p>
          </div>
        </motion.div>

        {/* Floating Soul Animation */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-green-400 opacity-20"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  )
}

export default Footer
