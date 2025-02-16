import React from 'react'
import Card from './Card'

const Sidebar = ({handleCurrentScreen}) => {
    return (

        <div className='flex flex-col items-start justify-start h-full gap-10 p-5 border-r-2 w-[36rem] bg-neutral-100 dark:bg-zinc-800 dark:border-zinc-700 border-neutral-200'>
        
            <div className='flex flex-row items-center justify-start gap-3 pl-1'>
                <box-icon color='#10b981' size='md' name='layer'></box-icon>
                <h1 className='text-3xl font-bold text-black dark:text-white'>Study<span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500'>Stack</span></h1>
            </div>

            <div className='flex flex-row items-center justify-start w-full gap-3'>
                <input placeholder='search note title' className='w-full p-2 pl-4 font-semibold text-white rounded-full shadow-lg outline-none bg-zinc-900'/>
                <button className='flex h-10 p-2 transition duration-200 rounded-full shadow-lg w-11 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 '><box-icon name='search-alt-2' color='#ffffff' ></box-icon></button>
            </div>

            <div className='flex flex-col items-start justify-start w-full h-full gap-3 overflow-hidden overflow-y-scroll rounded-md scrollbar-hidden'>
                <Card/>
            </div>

            <div className='flex flex-row items-center justify-between w-full'>
                <button className='flex p-2 transition duration-200 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 '>
                    <box-icon name='cog' color='#ffffff' ></box-icon>
                </button>
                <button onClick={() => handleCurrentScreen(1)} className='flex p-2 transition duration-200 rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 '>
                    <box-icon name='plus' color='#ffffff' ></box-icon>
                </button>
            </div>
        
        </div>

    )
}

export default Sidebar