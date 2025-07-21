import { motion } from 'framer-motion'
import { FaWallet, FaExchangeAlt, FaRocket, FaShieldAlt, FaGhost, FaCoins } from 'react-icons/fa'

const HowToBuy = () => {
  const steps = [
    {
      step: "01",
      title: "Get a Solana Wallet",
      description: "Download Phantom, Solflare, or another Solana wallet.",
      icon: FaWallet,
      color: "text-purple-400"
    },
    {
      step: "02", 
      title: "Get Some SOL",
      description: "Buy SOL on any exchange. Transfer to your wallet.",
      icon: FaCoins,
      color: "text-green-400"
    },
    {
      step: "03",
      title: "Connect to DEX",
      description: "Go to Jupiter or Raydium and connect your wallet.",
      icon: FaExchangeAlt,
      color: "text-blue-400"
    },
    {
      step: "04",
      title: "Sacrifice Your Soul",
      description: "Swap SOL for $SOS. Then decide: HODL or BURN?",
      icon: FaRocket,
      color: "text-red-400"
    }
  ]

  const wallets = [
    { name: "Phantom", icon: FaGhost, url: "https://phantom.app", color: "text-purple-400" },
    { name: "Solflare", icon: FaWallet, url: "https://solflare.com", color: "text-orange-400" },
    { name: "Backpack", icon: FaWallet, url: "https://backpack.app", color: "text-green-400" }
  ]

  const exchanges = [
    { name: "Jupiter", url: "https://jup.ag", description: "Best aggregator on Solana" },
    { name: "Raydium", url: "https://raydium.io", description: "Leading Solana DEX" },
    { name: "Orca", url: "https://orca.so", description: "User-friendly trading" }
  ]

  return (
    <section id="how-to-buy" className="relative z-10 py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] filter"
            style={{
              textShadow: '0 0 30px rgba(239,68,68,0.9), 0 0 60px rgba(239,68,68,0.6), 2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            How to Sacrifice
          </motion.h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg"
            style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)'
            }}>
            Ready to burn your soul? Follow these steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-purple-500/20 hover:border-purple-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {step.step}
                </div>
                <step.icon className={`${step.color} text-4xl mb-4 mt-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wallets Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-300">Recommended Wallets</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {wallets.map((wallet, index) => (
              <motion.a
                key={index}
                href={wallet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-black rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 text-center no-underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <wallet.icon className={`${wallet.color} text-3xl mb-3 mx-auto`} />
                <h4 className="text-lg font-bold text-white">{wallet.name}</h4>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Exchanges Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-green-300">Where to Trade</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {exchanges.map((exchange, index) => (
              <motion.a
                key={index}
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gradient-to-br from-purple-900/20 to-green-900/20 rounded-xl border border-green-500/30 hover:border-green-500 transition-all duration-300 text-center no-underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{exchange.name}</h4>
                <p className="text-gray-400 text-sm">{exchange.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Safety Warning */}
        <motion.div
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <FaShieldAlt className="text-red-400 text-3xl mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-3">Safety First</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Always verify the contract address: <span className="font-mono text-purple-300">Enwj2k9WjDte8kuX6sfDXkCik6VtYrhoXXu78uCsmoon</span></li>
                <li>• Never share your private keys or seed phrase</li>
                <li>• Double-check URLs before connecting your wallet</li>
                <li>• Start with small amounts until you're comfortable</li>
                <li>• Remember: This is a burn experiment - only invest what you can afford to lose</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToBuy
