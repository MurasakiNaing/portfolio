import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Career'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Career from './components/Career'

function App() {
  const [language, setLanguage] = useState('EN')

  return (
    <div className='bg-[#0f172a] min-h-screen'>
      <Cursor />
      <Nav language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Career language={language} />
      <Projects language={language} />
    </div>
  )
}

export default App
