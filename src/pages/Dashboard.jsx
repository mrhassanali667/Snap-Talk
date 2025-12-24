import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideChat, showChat } from '../redux/chatbox/chatBoxSlice.js'
import Chatbox from '../components/layout/Chatbox.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import { Outlet } from 'react-router'

const Dashboard = () => {

  const dispatch = useDispatch()
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
  let isShowChat = useSelector(state => state.chat.isShowChat)
  console.log(isShowChat)

  useEffect(() => {
    if (innerWidth < 768) {
      dispatch(hideChat())
    } else {
      dispatch(showChat())
    }

  }, [])


  window.addEventListener("resize", () => {
    if (currentWidth !== innerWidth) {
      if (innerWidth < 768) {
        dispatch(hideChat())
      } else {
        dispatch(showChat())
      }
    }
    setTimeout(() => {
      setCurrentWidth(innerWidth)
    }, 1000);
  })

  return (
    <div className='h-full w-full flex justify-center items-center dark:bg-gray-900/95 bg-slate-50 '>
      <div className='h-full w-full md:max-w-[460px] flex max-md:flex-col-reverse'>
        <Navbar />
        <Outlet />
      </div>
      {isShowChat &&
        <Chatbox />
      }
    </div>
  )
}

export default Dashboard