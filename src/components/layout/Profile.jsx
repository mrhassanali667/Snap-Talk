import React, { useState } from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'
import DropDown from '../common/DropDown.jsx';
import { useSelector } from 'react-redux';

const Profile = () => {

  const [openDropDown, SetOpenDropDown] = useState(null);
  const user = useSelector((state) => state.auth.user)

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
      <div className='py-2 text-slate-50  dark:text-gray- p-4 flex flex-col items-center gap-1 '>
        <div className='flex justify-center items-center mb-3'>
          {false ?
            <img src={user?.profilePicture} alt="profile" className='w-24 h-24 rounded-full object-cover mx-auto' />
            :
            <div className='h-24 w-24 flex justify-center items-center rounded-full bg-slate-200 dark:bg-blue-950 '>
              <h3 className='text-[3em] font-semibold text-zinc-600 dark:text-slate-300'>{user?.fullName?.charAt(0)?.toUpperCase() || user?.username?.charAt(0)?.toUpperCase()}</h3>
            </div>
          }
        </div>
        <h3 className='text-center text-lg font-semibold'>{user.fullName}</h3>
        <div className='w-full flex justify-center items-center gap-2 mb-4'>
          <span className='bg-green-400 text-sm w-2 h-2 rounded-full '></span>
        <span className='text-center  text-zinc-300 font-semibold' >active</span>
        </div>
        <div className='w-full h-25 text-zinc-400 px-3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur maiores officia laborum eaque dignissimos, quo est numquam </p>
        </div>
      </div>
      <DropDown id={'about'} heading={'About'} isOpen={openDropDown === "about"} toggleOpen={handleToggleDropDown} />
    </div>
  )
}

export default Profile