import React, { useEffect, useRef, useState } from 'react'
import {useEditor, EditorContent} from '@tiptap/react'
import Toolbar from './Toolbar';
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align'
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block'
import { listItem } from '@tiptap/pm/schema-list';

const ScreenView = ({currentScreenView,onEditorContentChange, helpClick, currentFolderId, createNewCard,currentNote,  getFormattedDate, handleUpdateCard}) => {

  const [content, setContent] = useState("")

  const editor = useEditor({
    extensions: [
      Underline,
      listItem,
      Code,
      CodeBlock,
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'], // Apply alignment to headings and paragraphs
        alignments: ['left', 'center', 'right', 'justify'], // Supported alignments
        defaultAlignment: 'left', // Default alignment
      }),
      Placeholder.configure({
        placeholder: 'Start your note... ',
        emptyEditorClass: 'is-editor-empty'
      }),
      CodeBlock.configure({
        // Optional configuration
        languageClassPrefix: 'language-', // CSS class prefix for syntax highlighting
        exitOnTripleEnter: true,          // Exit code block on triple Enter
        exitOnArrowDown: true             // Exit code block on ArrowDown at end
      }),
    ],
    content: content// Start empty for new notes
  });

  // Notify parent when content changes
  useEffect(() => {
    if (!editor) return;
    
    const handleUpdate = () => {
      onEditorContentChange(editor.getHTML());
    };
    
    editor.on('update', handleUpdate);
    return () => {
      editor.off('update', handleUpdate);
    };
  }, [editor, onEditorContentChange]);

  // ... rest of your component

  // Update editor content when currentNote changes
  useEffect(() => {
    if (editor && currentNote?.content) {
      editor.commands.setContent(currentNote.content);
    }
  }, [currentNote, editor]);

  // Handle content changes when screen view or note changes
  useEffect(() => {
    if (!editor) return;

    if (currentScreenView === 1) {
      // New note - clear content
      editor.commands.clearContent();
    } else if (currentScreenView === 2 && currentNote?.content) {
      // Existing note - set content
      editor.commands.setContent(currentNote.content);
    }
  }, [currentScreenView, currentNote, editor]);

  const handleSaveNote = () => {
    if (editor) {
        const content = editor.getHTML();
        if (currentScreenView === 1) {
            // Create new note
            createNewCard(currentFolderId, content);
        } else if (currentScreenView === 2) {
            // Update existing note
            // You'll need to implement handleUpdateCard in App.js
            handleUpdateCard(currentNote.folderId, currentNote.noteId, content);
        }
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
                <p className='w-full pl-4 text-sm'><span className='pr-2 text-base font-semibold'>Date:</span>{getFormattedDate()}</p>
                <Toolbar
                  editor={editor}
                />
              </div>
              
          </div>
        )
    }
    else if (currentScreenView === 2) { // loads a note
      return (
          <div className={`relative overflow-x-hidden flex flex-col justify-between w-full h-screen ${helpClick ? 'blur-lg' : ''}`}>
              <div  className='relative w-full h-full p-10 overflow-y-scroll'>
                <EditorContent
                  editor={editor} 
                />     
                <button onClick={() => handleUpdateCard(currentNote.folderId, currentNote.noteId, content)} className='fixed p-2 transition duration-200 rounded-full bottom-20 right-4 bg-primary hover:bg-secondary active:bg-thirdly'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor"}}><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                </button>
              </div>
              <div className='flex flex-row items-center justify-between p-2 border-t-2 border-border bg-secondBackground'>
                <p className='w-full pl-4 text-sm'><span className='pr-2 text-base font-semibold'>Date:</span>{currentNote.date}</p>
                <Toolbar
                  editor={editor}
                />
              </div>
              
          </div>
      )
    }
}

export default ScreenView
