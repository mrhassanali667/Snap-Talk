import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideChat, showChat } from '../redux/chatbox/chatBoxSlice.js'
import Chatbox from '../components/layout/Chatbox.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import { Outlet } from 'react-router'

const Dashboard = () => {

  const dispatch = useDispatch()
  let isShowChat = useSelector(state => state.chat.isShowChat)
  console.log(isShowChat)

  useEffect(() => {

    if (innerWidth < 1024) {
      dispatch(hideChat())
    } else {
      dispatch(showChat())
    }

  }, [])

  window.addEventListener("resize", () => {
    if (innerWidth < 1024) {
      dispatch(hideChat())
    } else {
      dispatch(showChat())
    }
  })

  return (
    <div className='h-full w-full flex justify-center items-center '>
      <div className='h-full w-full lg:max-w-[460px] flex max-lg:flex-col-reverse'>
        <Navbar />
        <Outlet />
      </div>
      {isShowChat &&
        <div className='h-full w-full bg-neutral-500 '>
          <Chatbox />
        </div>
      }
    </div>
  )
}

export default Dashboard