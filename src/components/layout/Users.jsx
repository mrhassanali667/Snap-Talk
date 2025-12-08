import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'
import UsersList from '../specific/UsersList.jsx'

const Users = () => {
  return (
    <div className='h-full w-full flex flex-col  bg-slate-100 dark:bg-gray-800/70 py-5 overflow-hidden'>
      <div className='flex flex-col gap-1 lg:gap-3'>
        <Heading name={'Chats'} />
        <div className='py-2 px-6 lg:px-6 '>
          <SearchBar />
        </div>
      </div>
      <div className='min-h-[75px] w-full py-2 px-6 flex  gap-4 relative overflow-x-auto x-scroll '>
        {[...Array(4)].map((_, index) =>
          <div key={index} className='flex flex-col justify-center items-center '>
              <div className='h-[60px] w-[60px] rounded-full bg-slate-300 dark:bg-gray-900 border-2 border-indigo-500 '></div>
          </div>
        )}
      </div>
      <div>
        <h2 className='px-6 pt-[4px] pb-2 text-[1em] font-semibold font-manrope  dark:text-slate-100 text-zinc-700'>Recent</h2>
      </div>
      <div className='h-[80%] w-full'>
      <UsersList/>
      </div>
    </div>
  )
}

export default Users