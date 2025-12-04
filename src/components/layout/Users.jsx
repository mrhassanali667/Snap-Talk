import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'

const Users = () => {
  return (
    <div className='h-full w-full bg-slate-100 dark:bg-gray-800/95 py-5'>
      <div className='flex flex-col gap-3'>
        <Heading name={'Chats'} />
        <div className='py-2 px-7'>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Users