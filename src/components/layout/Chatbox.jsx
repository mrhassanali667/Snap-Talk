import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideChat } from '../../redux/chatbox/chatBoxSlice.js'
import ChatBoxNav from '../specific/ChatBoxNav.jsx'

const Chatbox = () => {

  const dispatch = useDispatch()
  let isShowChat = useSelector(state => state.chat.isShowChat)
  const user = useSelector((state) => state.auth.user)
  const innerWidth = window.innerWidth;

  return (
    <div className='h-full w-full flex flex-col max-md:h-[100dvh] max-md:w-screen bg-white dark:bg-gray-900 text-white max-md:absolute'>
      <ChatBoxNav />
      <main className='w-full grow flex justify-between flex-col gap-3 bg-white dark:bg-gray-900 overflow-y-auto pt-2 chat-scroll'>
        {
          [...Array(20)].map((_, index) => (
            <>
              <div className="w-full flex items-start gap-4 p-2 mg:p-4">
                <div className="max-md:hidden h-11 w-11 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex-shrink-0 flex items-center justify-center font-bold text-sm text-white shadow-lg">RA</div>
                <div className="flex flex-col space-y-1.5 max-w-[80%]">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-medium text-slate-200">Rafay Ahmed</span>
                    <span className="ml-auto">7:18 PM</span>
                  </div>
                  <div className="p-4 backdrop-blur-sm bg-slate-800/60 border border-slate-700/50 rounded-2xl rounded-tr-sm shadow-xl text-slate-100">
                    <p className="leading-relaxed">Hey! Available hun meeting discussion ke liye. Kya time theek rahega?</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-end justify-end gap-4 p-2 md:p-4">
                <div className="flex flex-col space-y-1.5 items-end max-w-[80%]">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>You</span>
                    <span>7:20 PM</span>
                  </div>
                  <div className="px-3 py-1 md:p-4 bg-gradient-to-r from-blue-800 to-blue-900 backdrop-blur-sm rounded-2xl rounded-tl-sm shadow-xl border border-blue-400/50  transition-all text-white group">
                    <p className="leading-relaxed">Perfect! 8 PM Zoom pe chalega. Link bhej raha hun.</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-blue-50 font-medium">
                      <span className="text-sm">✓✓</span>
                      <span>Sent</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        }


      </main>
      <footer className='min-h-[55px] flex justify-end items-center w-full bg-white dark:bg-gray-900 border-t-1  dark:border-gray-700 px-2 '>
        <div className='h-full w-full flex items-center'>
          <input type="text" placeholder='Type a message...' className='w-full grow h-10 px-3 rounded-lg  border-gray-400 outline-none  bg-slate-200 dark:bg-gray-800 text-zinc-800 dark:text-white' />
          <span className='h-full w-[45px] flex justify-center items-center '>
            <svg
              className="w-5 h-5 text-blue-500 hover:text-blue-600 cursor-pointer"
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
              className="w-5 h-5 text-blue-500 hover:text-blue-600 cursor-pointer"
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
                className="w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"
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