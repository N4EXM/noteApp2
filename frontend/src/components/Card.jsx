import React from 'react'

const Card = () => {
  const truncateText = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    else{
        return str;
    }
  }

  return (
    <div className='flex flex-col items-start justify-between w-full p-4 text-white transition duration-300 rounded-md shadow-xl min-h-48 dark:bg-zinc-900 hover:bg-emerald-500 dark:hover:bg-emerald-500 active:bg-emerald-600 hover:text-white'>
        <div className='flex flex-col items-start justify-start w-full gap-2 p-1 cursor-pointer '>
            <h2 className='text-lg font-semibold'>{truncateText('Lorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet', 30)}</h2>
            <p className='opacity-80'>{truncateText('Lorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consectetur', 105)}</p>
        </div>
        <div className='flex flex-row items-center justify-between w-full'>
            <p className='p-1 text-sm font-semibold opacity-80'>22/05/25</p>
            <div className='flex flex-row items-center justify-end gap-2'>
                <button className='flex p-1 transition duration-300 rounded-md hover:bg-rose-500 hover:outline-white hover:scale-125 active:scale-90 active:duration-200'>
                  <box-icon name='trash' color='#ffffff' ></box-icon>
                </button>
                {/* <button onClick={() => {}} className='flex p-1 transition duration-200 hover:scale-125 active:scale-90'><box-icon name='right-arrow-alt' color='#ffffff' ></box-icon></button> */}
            </div>
            
        </div>
        
    </div>
  )
}

export default Card