import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import ScreenView from './components/ScreenView'

function App() {

  const [currentScreen, setCurrentScreen] = useState(0)

  const handleCurrentScreen = (screen) => {
    setCurrentScreen(screen)
  }
  

  return (
    <>
      <div className='flex flex-row w-full h-screen bg-zinc-900 font-poppins'>
        
        <Sidebar
          handleCurrentScreen={handleCurrentScreen}
        />

        <div className='w-full h-full overflow-y-scroll'>
          <ScreenView
            currentScreen={currentScreen}
          />
        </div>

      </div>
    </>
  )
}

export default App