import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaCopy, FaChartLine } from 'react-icons/fa'

function App() {
  const [contractCopied, setContractCopied] = useState(false)
  const [burnCopied, setBurnCopied] = useState(false)
  
  const contractAddress = "Enwj2k9WjDte8kuX6sfDXkCik6VtYrhoXXu78uCsmoon"
  const burnAddress = "1nc1nerator11111111111111111111111111111111"

  const copyToClipboard = async (text, setCopied) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/soul.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpg" 
                alt="Soul On Sol Logo" 
                className="w-10 h-10 rounded-full border border-gray-600 object-cover opacity-80"
              />
              <span className="text-xl font-bold text-gray-100">Soul On Sol</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://x.com/soulonsol_sos" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://t.me/soulonsolchannel" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <FaTelegram size={20} />
              </a>
              <a href="https://dexscreener.com/solana/eyofycjdwz5jrqt6hr9nwnv2m1sduubavytbrrevqr8u" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <FaChartLine size={20} />
              </a>
            </div>
          </nav>
        </header>

        {/* Main Landing Section */}
        <main className="flex-1 flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            
            {/* Hero Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">
                Soul On Sol
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                "There is no team. No savior. No roadmap.<br/>
                Just smoke, silence, and the distant sound of whales screaming SOS—<br/>
                <span className="text-gray-500">Not Save Our Souls.</span><br/>
                <span className="text-white font-semibold">But Soul on Sol."</span>
              </div>
            </motion.div>

            {/* 53% Burn Highlight */}
            <motion.div
              className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-6xl md:text-8xl font-black text-white mb-4">53%</div>
              <div className="text-xl text-gray-300 mb-4">BURNT FOREVER</div>
              <div className="text-sm text-gray-500 mb-4">
                53% sent to →
              </div>
              <button
                onClick={() => copyToClipboard(burnAddress, setBurnCopied)}
                className="font-mono text-xs bg-gray-800 px-4 py-2 rounded border border-gray-600 hover:border-gray-500 transition-colors flex items-center gap-2 mx-auto"
              >
                <span className="break-all">{burnAddress}</span>
                <FaCopy className={burnCopied ? "text-green-400" : "text-gray-400"} />
              </button>
              {burnCopied && <span className="text-green-400 text-xs mt-2 block">Copied!</span>}
            </motion.div>

            {/* Contract Address */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-gray-400 text-sm">Contract Address (CA)</div>
              <button
                onClick={() => copyToClipboard(contractAddress, setContractCopied)}
                className="font-mono text-sm bg-gray-900 border border-gray-600 px-6 py-3 rounded-lg hover:border-gray-500 transition-colors flex items-center gap-3 mx-auto"
              >
                <span className="break-all">{contractAddress}</span>
                <FaCopy className={contractCopied ? "text-green-400" : "text-gray-400"} />
              </button>
              {contractCopied && <span className="text-green-400 text-xs">Copied!</span>}
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a href="https://x.com/soulonsol_sos" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors flex items-center gap-2">
                <FaTwitter /> X (Twitter)
              </a>
              <a href="https://t.me/soulonsolchannel" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors flex items-center gap-2">
                <FaTelegram /> Telegram
              </a>
              <a href="https://dexscreener.com/solana/eyofycjdwz5jrqt6hr9nwnv2m1sduubavytbrrevqr8u" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors flex items-center gap-2">
                <FaChartLine /> DexScreener
              </a>
            </motion.div>

            {/* Proof Link */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a 
                href="https://solscan.io/token/Enwj2k9WjDte8kuX6sfDXkCik6VtYrhoXXu78uCsmoon#holders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 text-sm underline"
              >
                Proof of Burn →
              </a>
            </motion.div>
          </div>
        </main>
        
        {/* Simple Footer */}
        <footer className="border-t border-gray-800 py-6">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="text-gray-500 text-sm">
              © 2025 Soul On Sol • No promises, just sacrifice • DYOR always
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
