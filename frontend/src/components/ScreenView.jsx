import React, { useEffect, useRef } from 'react'
import {useEditor, EditorContent} from '@tiptap/react'
import Toolbar from './Toolbar';
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align'
import Code from '@tiptap/extension-code';
import { listItem } from '@tiptap/pm/schema-list';
import Image from '@tiptap/extension-image'

const ScreenView = ({currentScreenView, helpClick, currentFolderId, createNewCard, content}) => {

    const editor = useEditor({
      extensions: [
        Underline,
        listItem,
        Code,
        Image,
        StarterKit,
        Highlight,
        TextAlign.configure({
          types: ['heading', 'paragraph'], // Apply alignment to headings and paragraphs
          alignments: ['left', 'center', 'right', 'justify'], // Supported alignments
          defaultAlignment: 'left', // Default alignment
        }),
        Placeholder.configure({
          placeholder: 'Start your note... '
        })
      ],
      content: ""
    })

    const handleSaveNote = () => {
      if (editor) {
        const content = editor.getHTML(); // Gets the current HTML content
        createNewCard(currentFolderId, content);
      }
    };
  
    if (currentScreenView === 0) { // nothing has been selected
        return (
            <div className={`flex items-center justify-center w-full h-screen text-xl font-bold text-zinc-600 ${helpClick ? 'blur-lg' : ''}`}>
                No note has been selected
            </div>
        )
    }
    else if (currentScreenView === 1) { // loads an empty note page
        console.log("currentFolderID: " + currentFolderId)
        return (
            <div className={`relative overflow-x-hidden flex flex-col justify-between w-full h-screen ${helpClick ? 'blur-lg' : ''}`}>
                <div  className='relative w-full h-full p-10 overflow-y-scroll'>
                  <EditorContent
                    editor={editor}
                  />     
                  <button onClick={() => handleSaveNote()} className='fixed p-2 transition duration-200 rounded-full bottom-20 right-4 bg-primary hover:bg-secondary active:bg-thirdly'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor"}}><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                  </button>
                </div>
                <div className='flex flex-row items-center justify-between p-2 border-t-2 border-border bg-secondBackground'>
                  <p className='w-full pl-4 text-sm'><span className='pr-2 text-base font-semibold'>Date:</span>22/05/06</p>
                  <Toolbar
                    editor={editor}
                  />
                </div>
                
            </div>
        )
    }

}

export default ScreenView