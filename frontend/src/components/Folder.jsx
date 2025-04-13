import React, { useEffect, useState, useRef } from 'react'
import Card from './Card'

const Folder = ({notes, topic, handleDeleteFolder, handleDeleteCard, folderId, handleScreenView, handleFolderAddClick, handleNoteClick}) => {

    const [isHideFolder, setIsHideFolder] = useState(true)
    const prevNotesLengthRef = useRef(notes.length); // Track previous length

    const handleHideFolder = () => {
        setIsHideFolder(!isHideFolder)
        console.log("it is being clicked " + isHideFolder)
    }

    const truncateText = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        else{
            return str;
        }
    }

    useEffect(() => { // checks if a new note has been added
        if (notes.length > prevNotesLengthRef.current) {
            // console.log("New note added")
            setIsHideFolder(false)
        }
    }, [notes.length])

  return (

    <div className='flex flex-col w-full gap-4 p-5 pt-4 rounded-md bg-background'>
        <div className='flex flex-row items-center justify-between w-full'>
            <h1 className='font-bold'>{truncateText(topic, 25)}</h1>
            {notes.length > 0 ? 
                
                // if its more than one
                <button onClick={() => handleHideFolder()} className='flex transition duration-75 hover:duration-200 hover:scale-125 active:scale-75'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z"></path></svg>
                </button>
                :
                // if its empty
                <div className='flex items-center justify-end gap-2 w-max'>
                    <button onClick={handleDeleteFolder} className='flex w-auto h-auto transition duration-200 rounded-md hover:scale-125 active:scale-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{fill: "white",transform: '',msFilter:''}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                    </button>
                    <button onClick={() => handleScreenView(1)} className='flex transition duration-75 hover:duration-200 hover:scale-125 active:scale-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",transform: '',msFilter:''}}><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    </button> 
                </div>
            }
        </div>
        <div className={`${isHideFolder || notes.length < 1 ?  'hidden': 'flex'} flex-col gap-4`}>
            {notes.map((note) => (
                <Card
                    key={note.noteId}
                    content={note.content}
                    date={note.date}
                    handleDeleteCard={() => handleDeleteCard(folderId,note.noteId)}
                    handleNoteClick={() => handleNoteClick(folderId, note.noteId, note.content, note.date)}
                />
            ))}
            <div className='flex items-center justify-between w-full'>
                <button onClick={handleDeleteFolder} className='flex w-auto h-auto transition duration-200 rounded-md hover:scale-125 active:scale-75'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",transform: '',msFilter:''}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                </button>
                <button onClick={() => handleFolderAddClick(folderId)} className='flex transition duration-75 hover:duration-200 hover:scale-125 active:scale-75'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",transform: '',msFilter:''}}><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                </button> 
            </div>
        </div>
    </div>

  )
}

export default Folder
