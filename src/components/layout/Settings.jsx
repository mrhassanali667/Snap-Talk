import React, { useState } from 'react'
import Heading from '../common/Heading.jsx'
import SearchBar from '../common/SearchBar.jsx'
import DropDown from '../common/DropDown.jsx';

const Settings = () => {

  const [openDropDown, SetOpenDropDown] = useState("personal-info");

  const handleToggleDropDown = (id) => {
    if (openDropDown === id) {
      SetOpenDropDown(null);
    } else {
      SetOpenDropDown(id);
    }

  }



  return (
    <div className='h-full w-full bg-slate-50 dark:bg-gray-800/50 py-5'>
      <div className='flex flex-col gap-1'>
        <Heading name={'Settings'} />
        <div className='py-2 px-4'>
          <SearchBar />
        </div>
      </div>
      <DropDown id={'personal-info'} heading={'Personal Info'} isOpen={openDropDown === "personal-info"} toggleOpen={handleToggleDropDown} />
      <DropDown id={'settings'} heading={'Settings'} isOpen={openDropDown === "settings"} toggleOpen={handleToggleDropDown} />
      <DropDown id={'notifications'} heading={'Notifications'} isOpen={openDropDown === "notifications"} toggleOpen={handleToggleDropDown} />
    </div>
  )
}

export default Settings