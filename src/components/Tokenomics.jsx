import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCoins, FaChartLine, FaFire, FaUsers, FaLock, FaRocket, FaCopy } from 'react-icons/fa'

const Tokenomics = () => {
  const [burnCopied, setBurnCopied] = useState(false)
  const burnAddress = "1nc1nerator11111111111111111111111111111111"

  const copyBurnAddress = async () => {
    try {
      await navigator.clipboard.writeText(burnAddress)
      setBurnCopied(true)
      setTimeout(() => setBurnCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy burn address:', err)
    }
  }
  const tokenomics = [
    { 
      label: "Total Supply", 
      value: "1,000,000,000", 
      icon: FaCoins,
      description: "One billion souls ready to be sacrificed",
      color: "text-yellow-400"
    },
    { 
      label: "Already Burned", 
      value: "55%", 
      icon: FaFire,
      description: "Bought back and burned forever - gone like innocence",
      color: "text-red-400"
    },
    { 
      label: "Dev Will Burn", 
      value: "53%", 
      icon: FaFire,
      description: "After bonding curve completion - mass sacrifice",
      color: "text-orange-400"
    },
    { 
      label: "Remaining Souls", 
      value: "???", 
      icon: FaUsers,
      description: "How many will survive the burn experiment?",
      color: "text-purple-400"
    }
  ]

  const features = [
    {
      title: "No Taxes",
      description: "0% buy/sell tax - pure soul energy transfer",
      icon: FaRocket
    },
    {
      title: "Renounced Contract",
      description: "Ownership renounced - truly decentralized",
      icon: FaLock
    },
    {
      title: "Fair Launch",
      description: "No presale, no team tokens - fair for everyone",
      icon: FaUsers
    }
  ]

  return (
    <section id="tokenomics" className="relative z-10 py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] filter"
            style={{
              textShadow: '0 0 30px rgba(168,85,247,0.9), 0 0 60px rgba(168,85,247,0.6), 2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            The Burn Mechanics
          </motion.h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
            style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)'
            }}>
            This is not about hodling. This is about burning. Watch the supply disappear forever.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-black rounded-xl border border-purple-500 hover:border-green-400 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
            >
              <item.icon className={`${item.color} text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-2xl font-bold text-green-400 mb-2">{item.value}</h3>
              <h4 className="text-lg font-semibold text-white mb-2">{item.label}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-purple-900/20 to-green-900/20 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <feature.icon className="text-purple-400 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Distribution Chart Placeholder */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-3xl font-bold mb-6 text-red-300">The Burn Ritual</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12">
              {/* Burn Image */}
              <div className="text-center">
                <motion.img 
                  src="/burn.jpg" 
                  alt="Burn Ritual" 
                  className="w-40 h-40 rounded-full border-4 border-red-400 object-cover shadow-2xl mb-4"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-white font-semibold">Collective Sacrifice</p>
                <p className="text-gray-400 text-sm">Send tokens to burn address</p>
              </div>
              
              {/* Burn Address Section */}
              <div className="text-center lg:text-left max-w-md">
                <p className="text-lg text-gray-300 mb-4">
                  Send $SOS to burn address. Once burned, gone forever.
                </p>
                
                <div className="bg-black/50 rounded-lg p-4 border border-red-500/50">
                  <p className="text-sm text-gray-400 mb-2">Solana Burn Address:</p>
                  <div className="flex items-center space-x-2">
                    <p className="font-mono text-red-400 text-sm break-all flex-1">
                      {burnAddress}
                    </p>
                    <motion.button
                      onClick={copyBurnAddress}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCopy className="inline mr-1" />
                      {burnCopied ? "Copied!" : "Copy"}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tokenomics
