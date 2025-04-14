import { saveFolders, loadFolders } from './db';
import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from '../src/components/Sidebar'
import ScreenView from './components/ScreenView'

function App() {

  const [folders, setFolders] = useState([ // this will contain all the data for the notes

    //     {
    //       folderId: 0,
    //       topic: "Science",
    //       topicNotes: [
    //         {
    //           noteId: 0,
    //           content: "King John of England was forced to sign the Magna Carta by rebellious barons at Runnymede, establishing the principle that even monarchs were subject to the law. Though initially a failed peace treaty, it later became a cornerstone of constitutional governance, influencing legal systems worldwide, including the U.S. Constitution.",
    //           date: "12/12/14"
    //         },
    //         {
    //           noteId: 1,
    //           content: "Scottish scientist Alexander Fleming accidentally discovered penicillin when he noticed mold killing bacteria in a petri dish. This breakthrough led to the development of antibiotics, revolutionizing medicine and saving millions of lives by treating previously fatal infections.",
    //           date: "25/10/18"
    //         },
    //         {
    //           noteId: 2,
    //           content: "Apple Inc. unveiled the iPhone, a revolutionary smartphone combining a touchscreen interface, internet connectivity, and multimedia capabilities. Its launch marked the beginning of the modern smartphone era, transforming communication, entertainment, and business practices globally.",
    //           date: "23/06/10"
    //         },
    
    //       ]
    //     },
    //     {
    //       folderId: 1,
    //       topic: "History",
    //       topicNotes: [
    //         {
    //           noteId: 0,
    //           content: "The Great Pyramid of Giza, the largest of the three pyramids in the Giza complex, stands as a testament to ancient Egyptian engineering. Built as a tomb for Pharaoh Khufu, it was originally covered in smooth white limestone and reached a height of 146.6 meters. For over 3,800 years, it remained the tallest man-made structure in the world, showcasing the precision and skill of its builders.",
    //           date: "12/12/14"
    //         },
    //         {
    //           noteId: 1,
    //           content: "Scottish scientist Alexander Fleming accidentally discovered penicillin when he noticed mold killing bacteria in a petri dish. This breakthrough led to the development of antibiotics, revolutionizing medicine and saving millions of lives by treating previously fatal infections.",
    //           date: "25/10/18"
    //         },
    //         {
    //           noteId: 2,
    //           content: "Apple Inc. unveiled the iPhone, a revolutionary smartphone combining a touchscreen interface, internet connectivity, and multimedia capabilities. Its launch marked the beginning of the modern smartphone era, transforming communication, entertainment, and business practices globally.",
    //           date: "23/06/10"
    //         },
    
    //       ]
    //     },
    //     {
    //       folderId: 2,
    //       topic: "Science",
    //       topicNotes: [
    //         {
    //           noteId: 0,
    //           content: "King John of England was forced to sign the Magna Carta by rebellious barons at Runnymede, establishing the principle that even monarchs were subject to the law. Though initially a failed peace treaty, it later became a cornerstone of constitutional governance, influencing legal systems worldwide, including the U.S. Constitution.",
    //           date: "12/12/14"
    //         },
    //         {
    //           noteId: 1,
    //           content: "Scottish scientist Alexander Fleming accidentally discovered penicillin when he noticed mold killing bacteria in a petri dish. This breakthrough led to the development of antibiotics, revolutionizing medicine and saving millions of lives by treating previously fatal infections.",
    //           date: "25/10/18"
    //         },
    //         {
    //           noteId: 2,
    //           content: `<h2>Science Notes</h2>
    // <p>Key concepts from today's lecture:</p>
    // <ul>
    //   <li><strong>Mitochondria</strong> are the powerhouse of the cell</li>
    //   <li>Photosynthesis formula: <code>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</code></li>
    // </ul>
    // <p style="text-align: center">Exam next Tuesday!</p>
    // <blockquote>
    //   <p>Remember: Energy cannot be created or destroyed</p>
    // </blockquote>`,
    //           date: "23/06/10"
    //         },
    
    //       ]
    //     },
    ])
  const [helpClick, setHelpClick] = useState(false)
  const [currentScreenView, setCurrentScreenView] = useState(0) // 0: no note selected, 1: new note 2: selected note
  const [currentFolderId, setCurrentFolderId] = useState(0)
  const [currentNote, setCurrentNote] = useState({})  
  const [currentEditorContent, setCurrentEditorContent] = useState('');

  const getFormattedDate = () => {
    const date = new Date();
    
    // Extract year (last 2 digits), month, and day
    const year = date.getFullYear().toString().slice(-2); // "22"
    const month = String(date.getMonth() + 1).padStart(2, '0'); // "05" (months are 0-indexed)
    const day = String(date.getDate()).padStart(2, '0'); // "20"
  
    return `${day}/${month}/${year}`; // "22/05/20"
  };

  const handleNoteClick = (folderId, noteId, content, date) => {
      const currentNote = {
        folderId: folderId,
        noteId: noteId,
        content: content,
        date: date
      }

      setCurrentNote(currentNote)

      setCurrentScreenView(2)
      console.log(folders)
  }
  

  const handleHelpClick = () => {
    setHelpClick(!helpClick)
  }

  const getLastNoteId = (folders) => {
      let lastNoteId = -1; // Default if no notes exist
      
      // Loop through all folders and their notes
      folders.forEach(folder => {
        folder.topicNotes.forEach(note => {
          if (note.noteId > lastNoteId) {
            lastNoteId = note.noteId;
          }
        });
      });
    
      return lastNoteId;
  };

  

  // const handleAddFolder = (topic) => {
  //   const lastId = folders.length > 0
  //     ? Math.max(...folders.map(folder => folder.folderId))
  //     : -1 // if empty, start at -1 so first becomes 0
  
  //   const newFolder = {
  //     folderId: lastId + 1,
  //     topic: topic,
  //     topicNotes: []
  //   }
  
  //   setFolders(prev => [...prev, newFolder]) 
    
  //   console.log(folders)
  // }

  // const handleDeleteCard = (folderId, noteId) => {
  //   setFolders(prevFolders =>
  //     prevFolders.map(folder => {
  //       if (folder.folderId === folderId) {
  //         return {
  //           ...folder,
  //           topicNotes: folder.topicNotes.filter(note => note.noteId !== noteId),
  //         };
  //       }
  //       return folder;
  //     })
  //   );
  // };
  

  // const handleDeleteFolder = (folderId) => {
  //   setFolders(prevFolders => prevFolders.filter(folder => folder.folderId !== folderId));
  //   setCurrentScreenView(0)
  // }

  // const createNewCard = (folderId, content) => {
  //   const newNoteId = getLastNoteId(folders) + 1;
  //   const newNote = {
  //       noteId: newNoteId,
  //       content: content,
  //       date: getFormattedDate()
  //   };

  //   setFolders(prevFolders => 
  //       prevFolders.map(folder => 
  //           folder.folderId === folderId
  //               ? {
  //                   ...folder,
  //                   topicNotes: [...folder.topicNotes, newNote]
  //               }
  //               : folder
  //       )
  //   );

  //   // Set the new note as current and switch to edit mode
  //   setCurrentNote({
  //       folderId: folderId,
  //       noteId: newNoteId,
  //       content: content,
  //       date: newNote.date
  //   });
  //   setCurrentScreenView(2);
  // };

    const handleFolderAddClick = (folderId) => { // sends the folder Id to the screenView page
      setCurrentFolderId(folderId)
      setCurrentScreenView(1)
      console.log("screenView 1")
      console.log("folderId: " + folderId)
    }

  // const handleUpdateCard = (folderId, noteId, newContent) => {
  //   setFolders(prevFolders => 
  //       prevFolders.map(folder => {
  //           if (folder.folderId === folderId) {
  //               return {
  //                   ...folder,
  //                   topicNotes: folder.topicNotes.map(note => 
  //                       note.noteId === noteId 
  //                           ? {...note, content: newContent} 
  //                           : note
  //                   )
  //               };
  //           }
  //           return folder;
  //       })
  //   );
  //   // Update current note
  //   setCurrentNote(prev => ({...prev, content: newContent}));
  // };

  // Update all your handlers to persist changes:
// Modified handler that uses the lifted content
  const handleUpdateCard = async (folderId, noteId) => {
    const updatedFolders = folders.map(folder => {
      if (folder.folderId === folderId) {
        return {
          ...folder,
          topicNotes: folder.topicNotes.map(note => 
            note.noteId === noteId 
              ? { ...note, content: currentEditorContent }
              : note
          )
        };
      }
      return folder;
    });

    setFolders(updatedFolders);
    await saveFolders(updatedFolders);
  };

  const createNewCard = async (folderId, content) => {
    const newNoteId = getLastNoteId(folders) + 1;
    const newNote = {
      noteId: newNoteId,
      content: content,
      date: getFormattedDate()
    };

    setFolders(prevFolders => {
      const updatedFolders = prevFolders.map(folder => 
        folder.folderId === folderId
          ? {
              ...folder,
              topicNotes: [...folder.topicNotes, newNote]
            }
          : folder
      );
      saveFolders(updatedFolders); // Save to IndexedDB
      return updatedFolders;
    });

    setCurrentNote({
      folderId: folderId,
      noteId: newNoteId,
      content: content,
      date: newNote.date
    });
    setCurrentScreenView(2);
  };

  const handleAddFolder = async (topic) => {
    const lastId = folders.length > 0
      ? Math.max(...folders.map(folder => folder.folderId))
      : -1;

    const newFolder = {
      folderId: lastId + 1,
      topic: topic,
      topicNotes: []
    };

    setFolders(prev => {
      const updatedFolders = [...prev, newFolder];
      saveFolders(updatedFolders); // Save to IndexedDB
      return updatedFolders;
    });
  };

  const handleDeleteCard = async (folderId, noteId) => {
    setFolders(prevFolders => {
      const updatedFolders = prevFolders.map(folder => {
        if (folder.folderId === folderId) {
          return {
            ...folder,
            topicNotes: folder.topicNotes.filter(note => note.noteId !== noteId),
          };
        }
        return folder;
      });
      saveFolders(updatedFolders); // Save to IndexedDB
      return updatedFolders;
    });
  };

  const handleDeleteFolder = async (folderId) => {
    setFolders(prevFolders => {
      const updatedFolders = prevFolders.filter(folder => folder.folderId !== folderId);
      saveFolders(updatedFolders); // Save to IndexedDB
      return updatedFolders;
    });
    setCurrentScreenView(0);
  };

  // Load on app start
  useEffect(() => {
    const loadData = async () => {
      const savedFolders = await loadFolders();
      if (savedFolders.length > 0) {
        setFolders(savedFolders);
      }
    };
    loadData();
  }, []);

  // Auto-save when folders change
  useEffect(() => {
    const saveData = async () => {
      if (folders.length > 0) { // Don't save empty state
        await saveFolders(folders);
      }
    };
    saveData();
  }, [folders]);

  return (
    <>
      <div className='relative inset-x-0 flex flex-row w-screen h-screen text-white font-poppins bg-background'>
        
        <div className={`z-50 w-[30rem] h-[18rem] overflow-y-scroll ${helpClick ? 'flex' : 'hidden'} fixed rounded-md left-[32%] top-[25%] bg-secondBackground`}>
          <div className='flex flex-col items-start justify-start w-full h-full gap-4 p-5 py-10'>

            <div className='absolute flex justify-end w-full top-5 right-5 bg-secondBackground'>
              <button onClick={() => handleHelpClick()} className='p-1 transition duration-200 rounded-full bg-background hover:bg-rose-500 active:bg-rose-700'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{fill: 'white',transform: '',msFilter:''}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
              </button>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Underline: </p>
              <ul className='flex flex-col gap-2 pl-4 list-disc'>
                <li className='text-sm'>Ctrl + U (Windows/Linux)</li>
                <li className='text-sm'>This shortcut allows you to toggle underlining on the selected text.</li>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Highlight: </p>
              <ul className='flex flex-col gap-2 pl-4 list-disc'>
                <li className='text-sm'>Ctrl + shift + H (Windows/Linux)</li>
                <li className='text-sm'>This shortcut applies or removes the highlight to the selected text.</li>
              </ul>
            </div>  

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Text align: </p>
              <ul className='flex flex-col gap-2 pl-4 list-disc'>
                <li className='text-sm'>Ctrl + Shift + L (Windows/Linux) to align left</li>
                <li className='text-sm'>Ctrl + Shift + E (Windows/Linux) to align center</li>
                <li className='text-sm'>Ctrl + Shift + R (Windows/Linux) to align right</li>
                <li className='text-sm'>Ctrl + Shift + j (Windows/Linux) to justify</li>

                <li className='text-sm'>This shortcut changes the alignment of text.</li>
              </ul>
            </div> 

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Code: </p>
              <ul className='flex flex-col gap-2 pl-4 list-disc'>
                <li className='text-sm'>Ctrl + E (Windows/Linux) or surround the code in `` (backticks)</li>
                <li className='text-sm'>This shortcut changes the words you are typing into code</li>
              </ul>
            </div> 

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Heading: </p>
              <ul className='flex flex-col gap-2 pl-4 list-disc'>
                <li className='text-sm'>Ctrl + Alt + 1 (Windows/Linux)</li>
                <li className='text-sm'>Ctrl + Alt + 2 (Windows/Linux)</li>
                <li className='text-sm'>Ctrl + Alt + 3 (Windows/Linux)</li>
                <li className='text-sm'>This shortcut changes the size of the text</li>
              </ul>
            </div> 

            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Unordered List: </p>
              <ul className='flex flex-col gap-2 pl-4 list-disc'>
                <li className='text-sm'>Ctrl + shift + 8 (Windows/Linux) or type "-" and press space.</li>
                <li className='text-sm'>This shortcut creates an unordered list.</li>
              </ul>
            </div> 

            <div className='flex flex-col gap-2 pb-5'>
              <p className='font-bold'>Ordered List: </p>
              <ul className='flex flex-col gap-2 pl-4 list-disc'>
                <li className='text-sm'>Ctrl + shift + 9 (Windows/Linux) or type a number and press space.</li>
                <li className='text-sm'>This shortcut creates am ordered list.</li>
              </ul>
            </div> 

          </div>

        </div>

        <Sidebar 
          handleFolderAddClick={handleFolderAddClick}
          helpClick={helpClick}
          handleDeleteFolder={handleDeleteFolder}
          handleDeleteCard={handleDeleteCard}
          folders={folders}
          handleHelpClick={handleHelpClick}
          handleAddFolder={handleAddFolder}
          createNewCard={createNewCard}
          handleNoteClick={handleNoteClick}
        />

        <ScreenView
          onEditorContentChange={setCurrentEditorContent}
          handleUpdateCard={handleUpdateCard}
          getFormattedDate={getFormattedDate}
          currentFolderId={currentFolderId}
          helpClick={helpClick}
          currentScreenView={currentScreenView}
          createNewCard={createNewCard}
          currentNote={currentNote}
        />

      </div>
    </>
  )
}

export default App
