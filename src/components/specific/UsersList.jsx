import React, { use, useDebugValue, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showChat } from '../../redux/chatbox/chatBoxSlice';

const UsersList = () => {

  const [showScrollBar, setShowScrollBar] = useState(false);
  const dispatch = useDispatch()

  const handelScrollBar = (e) => {
    setShowScrollBar(true)
    setTimeout(() => {
      setShowScrollBar(false)
    }, 2000);
  }

  return (
    <div onScroll={handelScrollBar} className={`h-full w-full flex gap-1 flex-col overflow-y-auto hide-scroll ${showScrollBar ? 'users-list' : ''}`}>
      {[...Array(15).fill({ name: "User Name ",lastMessage:"Hey! there I'm available" })].map(({name,lastMessage}, index) =>
        <div onClick={() => dispatch(showChat())} key={index} className='px-3 py-2 min-h-[70px] w-full flex items-center hover:bg-slate-200/50 dark:hover:bg-gray-700/50 rounded-lg cursor-pointer '>
          <div className='h-full w-[55px] flex justify-center items-center'>
            <div className='flex justify-center items-center'>
              {false ?
                <img src="" alt="" />
                :
                <div className='h-[45px] w-[45px] rounded-full bg-slate-400 dark:bg-gray-800 '></div>
              }
            </div>
          </div>
          <div className='h-full w-auto grow flex flex-col px-2 py-1'>
            <h3 className=' dark:text-slate-100 text-zinc-700 font-semibold'>{name} </h3>
            <p className='text-[0.9em] dark:text-slate-400 text-zinc-700 font-semibold truncate'>{lastMessage}</p>
          </div>
          <div className='h-full w-[50px]'>

          </div>
        </div>
      )}
    </div>
  )
}

export default UsersList