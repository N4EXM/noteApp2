import React from 'react'
import trashIcon from '../assets/trashIcon.png'

const card = ({handleDeleteCard, content, date}) => {

    const truncateText = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        else{
            return str;
        }
    }

  return (
    <div className='flex flex-col items-start justify-between w-full gap-4 p-4 transition duration-200 ease-in rounded-md min-h-40 max-h-52 bg-secondBackground hover:bg-primary active:bg-thirdly active:duration-100 text-text'>

        {/* title and description */}
        <div className='flex flex-col gap-1'>
            <p className='text-sm'>{truncateText(content, 190)}</p>
        </div>

        {/* date and delete */}
        <div className='flex items-center justify-between w-full h-full flew-row'>

            <p className='text-sm font-light'>{date}</p>
           
            <button onClick={handleDeleteCard} className='flex w-auto h-auto p-1 transition duration-200 rounded-md hover:scale-110 active:scale-90 hover:bg-rose-600 active:bg-rose-700'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "white",transform: '',msFilter:''}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
            </button>
        </div>

    </div>
  )
}

export default card