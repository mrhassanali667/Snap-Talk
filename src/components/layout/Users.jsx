import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'

const Users = () => {
  return (
    <div className='h-full w-full flex flex-col gap-2 bg-slate-100 dark:bg-gray-800/95 py-5'>
      <div className='flex flex-col gap-3'>
        <Heading name={'Chats'} />
        <div className='py-2 px-6'>
          <SearchBar />
        </div>
      </div>
      <div className='h-[80px] w-full py-2 px-4 flex gap-1 justify-around relative'>
        {[...Array(4)].map((_, index) =>
          <div key={index} className='h-full w-[65px] flex flex-col justify-end items-center '>
            <div className='absolute top-0'>
              <div className='h-10 w-10 rounded-full bg-slate-200 dark:bg-gray-900 border-2 border-indigo-500 '></div>
            </div>
            <div className='h-[75%] w-full py-1 flex justify-center items-end bg-slate-200/70 dark:bg-gray-600/50  rounded-[10px]'>
              <p className='text-zinc-600 dark:text-slate-100 text-[0.9em] font-semibold'>Name</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users