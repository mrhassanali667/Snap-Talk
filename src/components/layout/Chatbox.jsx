import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideChat } from '../../redux/chatbox/chatBoxSlice'

const Chatbox = () => {

  const dispatch = useDispatch()
  let isShowChat = useSelector(state => state.chat.isShowChat)
  const user = useSelector((state) => state.auth.user)
  const innerWidth = window.innerWidth;

  return (
    <div className='h-full w-full flex flex-col max-lg:h-[100dvh] max-lg:w-screen bg-white dark:bg-gray-900 text-white max-lg:absolute'>
      <nav className='min-h-[65px] flex justify-between bg-slate-400'>
        <div className='h-full px-2 flex items-center'>
          <div className={`h-11 w-11 flex justify-center items-center bg-gray-600 rounded-[50%] border-1`}>
            {false ?
              <img src="" alt=""
                className='h-8 w-8 rounded-[50%]'
              />
              :
              <h2 className={`text-white text-[1.3em] font-semibold`}>{user?.email[0].toUpperCase()}</h2>
            }
          </div>
          <h2 className='ml-2 text-white font-semibold'>{user?.username}</h2>
        </div>
        <div className='h-full px-2 items-center'>

        </div>
      </nav>
      <main className='flex-grow bg-slate-500 dark:bg-gray-800/70 overflow-y-auto'>

      </main>
      <footer className='min-h-[55px] flex justify-end items-center w-full bg-slate-700 max-lg:dark:bg-gray-900/95 max-lg:px-5 max-lg:py-3 '>

      </footer>
    </div>
  )
}

export default Chatbox