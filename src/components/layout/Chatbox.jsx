import React, { useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideChat } from '../../redux/chatbox/chatBoxSlice.js'
import ChatBoxNav from '../specific/ChatBoxNav.jsx'
import { io } from 'socket.io-client'
import ENV from '../../utils/index.js'

const Chatbox = () => {
  const socket = useMemo(() => io(ENV.VITE_BASE_URL, { withCredentials: true }), []);
  const dispatch = useDispatch()
  let isShowChat = useSelector(state => state.chat.isShowChat)
  const user = useSelector((state) => state.auth.user)
  const innerWidth = window.innerWidth;
  const selectedUser = useSelector(state => state.chat.selectedUser)
  const input = useRef(null);

  const sendMessage = (message) => {
    console.log("Sending message to server:", message);
    input.current.value = "";
    socket.emit("send-message", {
      message: {
        sender: user._id,
        text: message,
        messageType: "text",
        readBy: [
          {
            userId: user._id,
          },
        ],
      }, roomId: selectedUser._id
    }, (res) => {
      console.log(res)
    });
    socket.emit("getmyrooms");
  }


  socket.on("recieve-message", (data) => {
    if (data?.error) {
      console.log("Error from from server:", data?.error);
    } else {
      console.log(data)
    }

  });

  socket.on("myrooms", (rooms) => {
    console.log("Rooms for the user:", rooms);
  });

  const handleCloseChat = () => {
    dispatch(hideChat());
  }


  if (!selectedUser) {
    return (
      <div className='h-full w-full flex flex-col max-md:h-[100dvh] max-md:w-screen bg-white dark:bg-gray-900 text-white max-md:absolute'>
        <div className='h-full w-full flex justify-center items-center'>
          <h2 className='text-gray-500 text-lg'>Select a conversation to start chatting.</h2>
        </div>
      </div>
    )
  }

  return (
    <div className='h-full w-full flex flex-col max-md:h-[100dvh] max-md:w-screen bg-white dark:bg-gray-900 text-white max-md:absolute'>
      <ChatBoxNav />
      <main className='w-full grow flex gap-4 flex-col bg-white dark:bg-gray-900 overflow-y-auto pt-2 px-2 chat-scroll'>
        {
          [...Array(4)].map((_, index) => (
            <>
              <div className="flex items-end gap-3 max-w-md" key={index}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <div className="bubble-tail-left relative bg-[#212ff7d3] bg-blue-700/90 text-white px-5 py-3 rounded-2xl rounded-bl-none  ">
                      <p className="text-[16px] leading-relaxed tracking-wide">Hn bhai kia hal hawal hn </p>
                      <div className="flex items-center gap-1 mt-1 text-white/70 text-[11px]">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        10:00
                      </div>
                    </div>
                    <button className="text-gray-500 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                    </button>
                  </div>
                  <span className="max-md:hidden text-gray-400 text-xs font-medium ml-1">Doris Brown</span>
                </div>
              </div>

              <div className="flex items-end justify-end gap-3 w-full">
                <div className="flex flex-col items-end gap-3 max-w-md">
                  <div className="flex items-start gap-2">
                    <button className="text-gray-500 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                    </button>
                    <div className="bubble-tail-right relative bg-[#2D3748] 
hover:bg-gradient-to-r 
hover:from-[#2D3748] 
hover:to-[#4A5568] 
text-white
 text-white px-5 py-3 rounded-2xl rounded-br-none">
                      <p className="text-[16px] font-medium leading-relaxed tracking-wide">bs yrr karam h malik ka  ?</p>
                      <div className="flex items-center gap-1 mt-1 text-white/40 text-[11px]">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        10:02
                      </div>
                    </div>
                  </div>
                  <span className="max-md:hidden text-gray-400 text-xs font-medium mr-1">Patricia Smith</span>
                </div>
              </div>
            </>
          ))
        }


      </main>
      <footer className='min-h-[55px] flex justify-end items-center w-full bg-white dark:bg-gray-900 border-t-1  dark:border-gray-700 px-2 '>
        <div className='h-full w-full flex items-center'>
          <input ref={input} type="text" onKeyDown={(e) => e.key === "Enter" && sendMessage(input.current.value)} placeholder='Type a message...' className='w-full grow h-10 px-3 rounded-lg  border-gray-400 outline-none  bg-slate-200 dark:bg-gray-800 text-zinc-800 dark:text-white' />
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
          <button onClick={() => sendMessage(input.current.value)}>
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