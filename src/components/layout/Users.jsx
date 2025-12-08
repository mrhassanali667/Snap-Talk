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
      <div className='pr-2'>
        <div className='min-h-[120px] h-[100px]  w-full py-2 px-5 flex  gap-1 relative overflow-x-auto x-scroll '>
          {["Hassan", "Usama", "Sufiyan", "Huzaifa", "Ali", "Murtaza", "Zohan"].map((name, index) =>
            <div key={index} className='h-full min-w-[70px] flex flex-col  items-center  cursor-pointer  '>
              <div>
                <div className='h-[55px] w-[55px] rounded-full bg-slate-300 dark:bg-gray-900 border-2 border-indigo-500 '></div>
              </div>
              <div>
                <p className='text-[0.85em] dark:text-slate-200 text-center text-zinc-700 font-semibold mt-2'>{name}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <h2 className='px-6 pt-[4px] pb-2 text-[1em] font-semibold font-manrope  dark:text-slate-100 text-zinc-700'>Recent</h2>
      </div>
      <div className='h-[80%] w-full'>
        <UsersList />
      </div>
    </div>
  )
}

export default Users