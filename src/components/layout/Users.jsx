import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'
import UsersList from '../specific/UsersList.jsx'

const Users = () => {
  return (
    <div className='h-full w-full flex flex-col gap-2 bg-slate-100 dark:bg-gray-800/95 py-5 overflow-hidden'>
      <div className='flex flex-col gap-3'>
        <Heading name={'Chats'} />
        <div className='py-2 px-6'>
          <SearchBar />
        </div>
      </div>
      <div className='min-h-[80px] w-full py-2 px-4 flex  gap-2 justify-around relative overflow-x-auto x-scroll '>
        {[...Array(4)].map((_, index) =>
          <div key={index} className='h-full min-w-[67px] max-w-[67px] flex flex-col justify-end items-center '>
            <div className='absolute top-0'>
              <div className='h-10 w-10 rounded-full bg-slate-300 dark:bg-gray-900 border-2 border-indigo-500 '></div>
            </div>
            <div className='h-[75%] w-full py-1 px-2 flex justify-center items-end bg-slate-200/90 dark:bg-gray-600/50  rounded-[10px]'>
              <p className='text-zinc-600 dark:text-slate-100 text-[0.9em] text-wrap font-semibold'>hassan</p>
            </div>
          </div>
        )}
      </div>
      <div className='h-[71%] w-full'>
      <UsersList/>
      </div>
    </div>
  )
}

export default Users