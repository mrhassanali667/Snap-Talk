import React from 'react'
import SearchBar from '../common/SearchBar'
import Heading from '../common/Heading'

const Contacts = () => {
  return (
    <div className='h-full w-full bg-slate-50 dark:bg-gray-800/50 py-5'>
      <div className='flex flex-col gap-1'>
        <Heading name={'Contacts'} />
        <div className='py-2 px-4'>
          <SearchBar />
        </div>
      </div>
    </div>
  ) 
}

export default Contacts