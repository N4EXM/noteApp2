import React from 'react'
import { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import Folder from '../components/Folder'

const Sidebar = ({ handleScreenView, handleDeleteFolder,handleDeleteCard, handleHelpClick, helpClick, folders, handleAddFolder, handleFolderAddClick, handleNoteClick}) => {

    const [isNewFolderActive, setIsNewFolderActive] = useState(false) // checks if the user wants to add a new folder
    const bottomRef = useRef(null) // this will mark the bottom
    const newFolderInputRef = useRef(null) // ref for the folder input
    const [topicInput, setTopicInput] = useState("") 
    const [searchInput, setSearchInput] = useState("")
    const [filteredFolders, setFilteredFolders] = useState([]);

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleTopicInputChange = (e) => {
        setTopicInput(e.target.value)
    }

    // shows the input field
    const addNewFolder = () => {
        setIsNewFolderActive(!isNewFolderActive)
    }

    const handleNewFolder = (input) => { // creates the folder and sets the input off
        handleAddFolder(input)
        addNewFolder()
    }

    // scroll to the bottom to the input field
    useEffect(() => {
        if (isNewFolderActive && bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            newFolderInputRef.current?.focus();
          }, 1000)
        }
    }, [isNewFolderActive]);

    // Update search results whenever searchInput or folders change
    useEffect(() => {
        if (searchInput.trim() === "") {
            setFilteredFolders(folders);
        } else {
            const results = folders.filter(folder =>
                folder.topic.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredFolders(results);
        }
    }, [searchInput, folders]);

    return (
        <div className={`flex flex-col items-start justify-start gap-10 p-5 min-w-[26rem] max-w-[26rem] h-full bg-secondBackground border-r-2 border-border ${helpClick ? 'blur-lg' : ''}`}>
            
            {/* title */}
            <div className='flex flex-row items-center justify-start gap-4 text-3xl font-bold'>
                <img className='w-9 h-9' src={logo} alt="logo" />
                <h1 className='text-3xl font-bold text-text'>Study<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Stack</span></h1>
            </div>  

            {/* search field */}
            <div className='flex flex-row items-center justify-start w-full gap-4'>
                <input value={searchInput} onChange={handleSearchChange} placeholder="Search folders..." type="text" className='w-full p-2 pl-5 pr-5 rounded-full outline-none bg-background'/>
                <button onClick={() => setSearchInput("")} className='flex p-2 transition duration-200 rounded-full bg-primary hover:bg-secondary active:bg-thirdly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
            </div>

            {/* folders */}
            <div className='w-full h-[50rem] overflow-y-scroll overflow-x-hidden flex flex-col gap-4 scrollbar_hidden'>

                {
                    filteredFolders.length > 0 || isNewFolderActive ? 
                    filteredFolders.map((folder) => (
                        <Folder
                            key={folder.folderId}
                            topic={folder.topic}
                            notes={folder.topicNotes}
                            folderId={folder.folderId}
                            handleScreenView={handleScreenView}
                            handleDeleteFolder={() => handleDeleteFolder(folder.folderId)}
                            handleDeleteCard={handleDeleteCard} 
                            handleFolderAddClick={handleFolderAddClick}
                            handleNoteClick={handleNoteClick}
                        />
                    ))
                    :
                    <div className='flex items-center justify-center w-full h-full font-semibold text-zinc-500'>
                        {searchInput ? "No matching folders found" : "Could not find any folders"}
                    </div>
                }

                {/* add a new folder */}
                {isNewFolderActive && (
                <div className='flex items-center justify-between w-full p-1 rounded-md bg-background'>
                    <input ref={newFolderInputRef} onChange={(e) => handleTopicInputChange(e)} onKeyDown={(e) => {
                        if (e.key === 'Enter' && topicInput.trim() !== '') {
                            handleNewFolder(topicInput);
                        }
                    }}
                    type="text" 
                    placeholder='Topic...' 
                    className='w-full p-2 pl-3 font-bold bg-transparent outline-none' 
                    />
                    <button onClick={() => handleNewFolder(topicInput)} disabled={!topicInput.trim()} // Disable if empty
                    className='flex p-2 transition duration-200 hover:scale-125 active:scale-75 active:duration-75 disabled:opacity-50'
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor"}}>
                        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                    </svg>
                    </button>
                </div>
                )}
                
                <div ref={bottomRef} />

            </div>

            {/* nav buttons */}
            <div className='flex flex-row items-center justify-between w-full'>
                <button onClick={() => handleHelpClick()} className='flex p-2 transition duration-200 rounded-full bg-primary hover:bg-secondary active:bg-thirdly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 2h2v2h-2V7zm0 4h2v2h-2v-2zM9 7h2v2H9V7zm0 4h2v2H9v-2zM5 7h2v2H5V7zm0 4h2v2H5v-2zm12 6H7v-2h10v2zm2-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>
                </button>
                <button onClick={() => addNewFolder()} className='flex p-2 transition duration-200 rounded-full bg-primary hover:bg-secondary active:bg-thirdly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-4 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></svg>
                </button>
            </div>

        </div>
    )
    
}

export default Sidebar