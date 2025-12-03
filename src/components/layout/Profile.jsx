import React from 'react'
import SearchBar from '../common/SearchBar'
import Heading from '../common/Heading'

const Profile = () => {
  return (
   <div className='h-full w-full bg-slate-50 dark:bg-gray-800/95 py-5'>
      <div className='flex flex-col gap-3'>
        <Heading name={'Profile'} />
        <div className='py-2 px-7'>
          <SearchBar />
        </div>
      </div>
    </div>
  ) 
}

export default Profile