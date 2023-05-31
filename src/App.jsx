import './App.scss'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'
import Services from './components/Services'
import Footer from './components/Footer'
import BurgerMenu from './components/BurgerMenu'

function App() {
  return (
    <>
     <Header />
     <Hero />
     <Services />
     <News /> 
     <About />
     <Footer /> 
     <BurgerMenu />
    </>
  )
}

export default App
