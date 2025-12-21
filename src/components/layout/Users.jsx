import React from 'react'
import SearchBar from '../common/SearchBar.jsx'
import Heading from '../common/Heading.jsx'
import UsersList from '../specific/UsersList.jsx'

const Users = () => {
  return (

    
    <div className='h-full w-full flex flex-col bg-slate-50 dark:bg-gray-800/50 py-5 overflow-x-auto'>
      <header className='w-full flex flex-col'>
        <div className='flex flex-col gap-1 lg:gap-3'>
          <Heading name={'Chats'} />
          <div className='py-2 px-7'>
            <SearchBar />
          </div>
        </div>
        <div className='overflow-x-auto w-full'>
          <div className='min-h-[120px] h-[100px]  w-full py-2 px-5 flex  gap-1 relative overflow-x-auto hide-scroll '>
            {["Hassan", "Usama", "Sufiyan", "Huzaifa", "Ali", "Murtaza", "Zohan"].map((name, index) =>
              <div key={index} className='h-full min-w-[70px] flex flex-col  items-center  cursor-pointer  '>
                <div>{true ?
                  < img
                    src="/images/DP.jpg" alt=""
                    className='h-[55px] w-[55px] rounded-full  border-2 border-indigo-500'
                  />

                  :
                  <div className='h-[55px] w-[55px] rounded-full bg-slate-300 dark:bg-gray-900 border-2 border-indigo-500 '></div>
                }
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
      </header>
      <div className='w-full overflow-y-auto h-auto grow '>
        <UsersList />
      </div>
    </div>
  )
}

export default Users