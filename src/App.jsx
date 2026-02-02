import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import IntroPage from './components/IntroPage'
import HelpPage from './components/HelpPage'
import LatestWork from './components/LatestWork'
import TeamPage from './components/TeamPage'
import Connect from './components/Connect'
import Footer from './components/Footer'
import TrustedBy from './components/TrustedBy'
function App() {
const [theme,setTheme]=useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
     <NavBar theme={theme} setTheme={setTheme}/>
     <IntroPage/>
     <TrustedBy/>
     <HelpPage/>
     <LatestWork/>
     <TeamPage/>
     <Connect/>
     <Footer theme={theme}/>
    </div>
  )
}

export default App
