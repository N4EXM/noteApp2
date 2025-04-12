import React from 'react'
import { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import Folder from '../components/Folder'

const Sidebar = ({ handleScreenView, handleDeleteFolder,handleDeleteCard, handleHelpClick, helpClick, folders, handleAddFolder, handleFolderAddClick}) => {

    const [isNewFolderActive, setIsNewFolderActive] = useState(false) // checks if the user wants to add a new folder
    const bottomRef = useRef(null) // this will mark the bottom
    const newFolderInputRef = useRef(null) // ref for the folder input
    const [topicInput, setTopicInput] = useState("") 

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

    return (
        <div className={`flex flex-col items-start justify-start gap-10 p-5 min-w-[26rem] max-w-[26rem] h-full bg-secondBackground border-r-2 border-border ${helpClick ? 'blur-lg' : ''}`}>
            
            {/* title */}
            <div className='flex flex-row items-center justify-start gap-4 text-3xl font-bold'>
                <img className='w-9 h-9' src={logo} alt="logo" />
                <h1 className='text-3xl font-bold text-text'>Study<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Stack</span></h1>
            </div>  

            {/* search field */}
            <div className='flex flex-row items-center justify-start w-full gap-4'>
                <input placeholder="Search title" type="text" className='w-full p-2 pl-5 pr-5 rounded-full outline-none bg-background'/>
                <button className='flex p-2 transition duration-200 rounded-full bg-primary hover:bg-secondary active:bg-thirdly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style={{fill: 'white',transform:'', msFilter:''}}><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>   
                </button>
            </div>

            {/* folders */}
            <div className='w-full h-[50rem] overflow-y-scroll overflow-x-hidden flex flex-col gap-4 scrollbar_hidden'>

                {
                    folders.length > 0 || isNewFolderActive ? 
                    folders.map((folder) => (
                        <Folder
                            key={folder.folderId}
                            topic={folder.topic}
                            notes={folder.topicNotes}
                            folderId={folder.folderId}
                            handleScreenView={handleScreenView}
                            handleDeleteFolder={() => handleDeleteFolder(folder.folderId)}
                            handleDeleteCard={handleDeleteCard} 
                            handleFolderAddClick={handleFolderAddClick}
                        />
                    ))
                    :
                    <div className='flex items-center justify-center w-full h-full font-semibold text-zinc-500'>
                        Could not find any folders
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",transform: '',msFilter:''}}><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path></svg>
                </button>
                <button onClick={() => addNewFolder()} className='flex p-2 transition duration-200 rounded-full bg-primary hover:bg-secondary active:bg-thirdly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-4 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></svg>
                </button>
            </div>

        </div>
    )
    
}

export default Sidebar