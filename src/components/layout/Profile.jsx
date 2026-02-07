import React, { useState } from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'
import DropDown from '../common/DropDown.jsx';

const Profile = () => {

  const [openDropDown, SetOpenDropDown] = useState(null);

  const handleToggleDropDown = (id) => {
    if (openDropDown === id) {
      SetOpenDropDown(null);
    } else {
     SetOpenDropDown(id);
    }

  }


  return (
    <div className='h-full w-full bg-slate-50 dark:bg-gray-800/50 py-5'>
      <div className='flex flex-col gap-1 '>
        <Heading name={'Profile'} />
        <div className='py-2 px-4'>
          <SearchBar />
        </div>
      </div>
      <DropDown id={'about'} isOpen={openDropDown === "about"} toggleOpen={handleToggleDropDown} />
      <DropDown id={'settings'} isOpen={openDropDown === "settings"} toggleOpen={handleToggleDropDown} />
      <DropDown id={'notifications'} isOpen={openDropDown === "notifications"} toggleOpen={handleToggleDropDown} />
    </div>
  )
}

export default Profile