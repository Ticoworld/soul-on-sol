import { motion } from 'framer-motion'
import { FaFire, FaGhost, FaGem, FaStar, FaHeart, FaBolt } from 'react-icons/fa'

const About = () => {
  const features = [
    { 
      title: "Social Burn Experiment", 
      desc: "First token where holders voluntarily burn supply to trigger supply shocks", 
      icon: FaFire,
      color: "text-red-400"
    },
    { 
      title: "No Team, No Savior", 
      desc: "No roadmap, no promises. Just pure sacrificial energy", 
      icon: FaGhost,
      color: "text-gray-400"
    },
    { 
      title: "Soul Sacrifice", 
      desc: "55% already burned. Each sacrifice makes remaining souls precious", 
      icon: FaGem,
      color: "text-purple-400"
    },
    { 
      title: "Supply Shock", 
      desc: "Biggest supply shock Solana has ever seen", 
      icon: FaStar,
      color: "text-yellow-400"
    },
    { 
      title: "No Innocence Left", 
      desc: "Once burned, gone forever—like your innocence", 
      icon: FaHeart,
      color: "text-pink-400"
    },
    { 
      title: "Bonding Curve", 
      desc: "Complete the curve. Dev burns 53% of supply", 
      icon: FaBolt,
      color: "text-orange-400"
    }
  ]

  return (
    <section id="about" className="relative z-10 py-20 px-6 bg-gradient-to-b from-black to-gray-900">
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
            THE BURN EXPERIMENT
          </motion.h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg"
            style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)'
            }}>
            The first social burn experiment on Solana. 
            How many souls must burn before the biggest supply shock ever?
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-purple-500/20 hover:border-purple-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <feature.icon className={`${feature.color} text-3xl mr-3 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement with Image */}
        <motion.div
          className="mt-20 flex flex-col lg:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Takeover Image */}
          <motion.img 
            src="/takeover.jpg" 
            alt="Soul Takeover" 
            className="w-80 h-80 rounded-2xl border-4 border-red-500 object-cover shadow-2xl"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Mission Text */}
          <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-2xl p-8 border border-red-500/30 flex-1">
            <h3 className="text-3xl font-bold mb-4 text-red-300">Our Sacrifice</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We don't promise utility. We don't whisper lies about roadmaps. 
              We ask for one thing—your soul's offering.
            </p>
            <p className="text-red-400 font-bold">
              Burn Address: 1nc1nerator11111111111111111111111111111111
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
