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
      <nav className='min-h-[75px] flex justify-between bg-white dark:bg-gray-900 border-b-1 border-gray-700'>
        <div className='h-full px-2 flex items-center'>
          <div className={`h-10 w-10 flex justify-center items-center bg-gray-600 rounded-[50%] border-1`}>
            {true ?
              <img src="/images/DP.jpg" alt=""
                className='h-10 w-10 rounded-[50%]'
              />
              :
              <h2 className={`text-white text-[1.3em] font-semibold`}>{user?.username[0].toUpperCase()}</h2>
            }
          </div>
          <h2 className='ml-2 text-white font-semibold'>{user?.username}</h2>
        </div>
        <div className='h-full px-2 items-center'>

        </div>
      </nav>
      <main className='flex-grow bg-white dark:bg-gray-900 overflow-y-auto'>

      </main>
      <footer className='min-h-[55px] flex justify-end items-center w-full bg-white dark:bg-gray-900 border-t-1  dark:border-gray-700 px-4 '>

      </footer>
    </div>
  )
}

export default Chatbox