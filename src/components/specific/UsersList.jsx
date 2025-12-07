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
      {[...Array(20)].map((_, index) =>
        <div onClick={() => dispatch(showChat())} key={index} className='min-h-[70px] w-full bg-slate-200 dark:bg-gray-900  flex flex-col justify-end items-center '>

        </div>
      )}
    </div>
  )
}

export default UsersList