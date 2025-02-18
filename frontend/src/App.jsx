import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import ScreenView from './components/ScreenView'

function App() {

  const [currentScreen, setCurrentScreen] = useState(0)

  const handleCurrentScreen = (screen) => {
    setCurrentScreen(screen)
  }
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the event target is inside the editor
      const isEditorTarget = event.target.closest(".ProseMirror");

      // Disable specific shortcuts globally or in the editor
      if ((event.ctrlKey || event.metaKey || event.shiftKey) && ["s", "p", "n", "u","l"].includes(event.key)) {
        event.preventDefault();
        console.log(`Disabled Ctrl+${event.key.toUpperCase()}`);
      }

      // Allow editor-specific shortcuts to work
      if (isEditorTarget && (event.ctrlKey || event.metaKey) && ["b", "i", "u","l"].includes(event.key)) {
        // Do not prevent default behavior for editor shortcuts
        return;
      }
    };

    // Add event listener to the window
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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