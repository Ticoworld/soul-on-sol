import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import HowToBuy from './components/HowToBuy'
import Footer from './components/Footer'
import Background from './components/Background'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/soul.jpg')",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Animated Background Effects */}
      <Background />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Footer />
      </div>
    </div>
  )
}

export default App
