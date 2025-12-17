import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideChat } from '../../redux/chatbox/chatBoxSlice'

const Chatbox = () => {

  const dispatch = useDispatch()
  let isShowChat = useSelector(state => state.chat.isShowChat)

  return (
    <div className='h-full w-full flex gap-3 max-lg:h-[100dvh] max-lg:w-screen bg-white dark:bg-gray-900 text-white p-5 max-lg:absolute'>
      <nav>
      </nav>
      {innerWidth < 1024 &&
        <button onClick={() => dispatch(hideChat())} className='h-10 border-1 p-2'>
          back
        </button>
      }
      <span>
        ChatBox
      </span>
    </div>
  )
}

export default Chatbox