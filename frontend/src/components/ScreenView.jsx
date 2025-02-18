import React, { useEffect, useRef, useState } from 'react';
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align'
import Code from '@tiptap/extension-code';
import Toolbar from './Toolbar';


const ScreenView = ({ currentScreen }) => {

  const [title, setTitle] = useState('');
  const editor = useEditor({
    extensions: [
      Underline,
      Code,
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'], // Apply alignment to headings and paragraphs
        alignments: ['left', 'center', 'right', 'justify'], // Supported alignments
        defaultAlignment: 'left', // Default alignment
      }),
      Placeholder.configure({
        placeholder: 'Write some words... '
      })
    ],
    content: ''
  })



  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  if (currentScreen === 0) {
    return (
      <div className='flex items-center justify-center h-screen min-w-full text-xl font-bold text-white opacity-40'>
        No note has been selected.
      </div>
    );
  } else if (currentScreen === 1) {
    return (
      <div className='flex flex-col items-start justify-start w-full h-full gap-16 p-10 pr-16 text-white'>
        <div className='flex flex-col items-start justify-start w-full gap-3 h-fit'>
          <input
            placeholder='Enter a title'
            className='w-full text-3xl font-extrabold bg-transparent outline-none'
            value={title}
            onChange={handleTitleChange}
          />
          <p className='flex items-center gap-3 font-semibold text-md'>
            Date: <span className='font-normal text-md opacity-70'>22/05/25</span>
          </p>
        </div>

       <div className='w-full h-full'>
          <EditorContent
            editor={editor}
          />
       </div>

       <div className='fixed bottom-5 right-5'>
          <Toolbar
            editor={editor}
          />
       </div>
        
      </div>
    );
  }

  return null; // Fallback in case currentScreen is neither 0 nor 1
};

export default ScreenView;