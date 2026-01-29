import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import IntroPage from './components/IntroPage'
import HelpPage from './components/HelpPage'
import LatestWork from './components/LatestWork'
import TeamPage from './components/TeamPage'
import Connect from './components/Connect'
import Footer from './components/Footer'
function App() {
const [theme,setTheme]=useState('light')
  return (
    <div className='dark:bg-black relative'>
     <NavBar theme={theme} setTheme={setTheme}/>
     <IntroPage/>
     <HelpPage/>
     <LatestWork/>
     <TeamPage/>
     <Connect/>
     <Footer/>
    </div>
  )
}

export default App
