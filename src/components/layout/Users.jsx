import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'
import UsersList from '../specific/UsersList.jsx'

const Users = () => {
  return (
    <div className='h-full w-full flex flex-col gap-1 bg-slate-100 dark:bg-gray-800/95 py-5 overflow-hidden'>
      <div className='flex flex-col gap-3'>
        <Heading name={'Chats'} />
        <div className='py-2 px-6'>
          <SearchBar />
        </div>
      </div>
      <div className='min-h-[75px] w-full py-2 px-4 flex  gap-4 justify-around relative overflow-x-auto x-scroll '>
        {[...Array(4)].map((_, index) =>
          <div key={index} className='flex flex-col justify-center items-center '>
              <div className='h-[60px] w-[60px] rounded-full bg-slate-300 dark:bg-gray-900 border-2 border-indigo-500 '></div>
          </div>
        )}
      </div>
      <div className='h-[75%] w-full'>
      <UsersList/>
      </div>
    </div>
  )
}

export default Users