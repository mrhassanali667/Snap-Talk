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
          <span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>

          </span>
        </div>
      </nav>
      <main className='flex-grow bg-white dark:bg-gray-900 overflow-y-auto'>

      </main>
      <footer className='min-h-[55px] flex justify-end items-center w-full bg-white dark:bg-gray-900 border-t-1  dark:border-gray-700 px-2 '>
        <div className='h-full w-full flex items-center'>
          <input type="text" placeholder='Type a message...' className='w-full grow h-10 px-3 rounded-lg  border-gray-400 outline-none  bg-slate-200 dark:bg-gray-800 text-zinc-800 dark:text-white' />
          <span className='h-full w-[45px] flex justify-center items-center '>
            <svg
              className="w-5 h-5 text-blue-500  cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.99 9H15M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .507 2.397 1.494 3.216a5.5 5.5 0 0 0 7.022 0C16.503 15.397 17 14 17 13c0 0-1.99 1-4.995 1S7 13 7 13Z"
              />
            </svg>
          </span>
          <span className='h-full w-[45px] flex justify-center items-center '>
            <svg
              className="w-5 h-5 text-blue-500  cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
              />
            </svg>
          </span>

          <button >
            <span className='h-9 w-9 flex justify-center items-center text-white font-semibold rounded-full' >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </span>
          </button>
        </div>
      </footer >
    </div >
  )
}

export default Chatbox