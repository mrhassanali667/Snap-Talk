import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'
import UsersList from '../specific/UsersList.jsx'

const Users = () => {
  return (


    <div className='h-full w-full flex flex-col bg-slate-50 dark:bg-gray-800/50 pt-5 overflow-x-auto'>
      <header className='w-full flex flex-col'>
        <div className='flex flex-col gap-1'>
          <Heading name={'Chats'} />
          <div className='py-2 px-4 '>
            <SearchBar />
          </div>
        </div>
        <div>
          <h2 className='px-5 pt-[4px] pb-1 text-[1em] font-semibold font-manrope  dark:text-slate-100 text-zinc-700'>Recent</h2>
        </div>
      </header>
      <div className='w-full overflow-y-auto h-auto grow '>
        <UsersList />
      </div>
    </div>
  )
}

export default Users