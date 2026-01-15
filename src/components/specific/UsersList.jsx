import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showChat } from '../../redux/chatbox/chatBoxSlice.js';
import { setSelectedUser } from '../../redux/chat/chatSlice.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ImageBox from './ImageBox.jsx';
import { setImageURL, showImage } from '../../redux/imageBox/imageBoxSlice.js';

const UsersList = () => {

  const [showScrollBar, setShowScrollBar] = useState(false);
  const dispatch = useDispatch()
  const isShowImage = useSelector(state => state.image.isShowImage);

  const handelScrollBar = (e) => {
    setShowScrollBar(true)
    setTimeout(() => {
      setShowScrollBar(false)
    }, 2000);
  }
  console.log(isShowImage)

  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await axios.get(`http://localhost:3000/api/users`).then(res => res.data.data),
  })


  console.log(users);
  console.log(error);
  console.log(isError);


  const openChat = (user) => {
    dispatch(showChat());
    dispatch(setSelectedUser(user));
  }

  const handleShowImage = (e, URL) => {
    e.stopPropagation()
    dispatch(setImageURL(URL))
    dispatch(showImage())
  }



  return (
    <div onScroll={handelScrollBar} className={`h-full w-full flex flex-col overflow-y-auto hide-scroll ${showScrollBar ? 'users-list' : ''}`}>
      <div>
        <h2 className='px-5 pt-[4px] pb-1 text-[1em] font-semibold font-manrope  dark:text-slate-100 text-zinc-700'>Recent</h2>
      </div>
      {
        users?.map((user, index) => (
          <div onClick={() => openChat(user)} key={index} className='px-3 py-2 min-h-[70px] w-full flex items-center hover:bg-slate-200/50 dark:hover:bg-gray-700/50 active:bg-slate-200/50 dark:active:bg-gray-700/50  cursor-pointer '>
            <div className='h-full w-[55px] flex justify-center items-center'>
              <div onClick={(e) => handleShowImage(e, user.profilePicture)} className='flex justify-center items-center'>
                {user?.profilePicture ?
                  <div className='h-[45px] w-[45px] '>
                    <img
                      src={user?.profilePicture} alt="profile-picture"
                      className='h-full w-full object-cover rounded-full bg-slate-300 dark:bg-gray-800 '
                    />
                  </div>
                  :
                  <div className='h-[45px] w-[45px] flex justify-center items-center rounded-full bg-slate-300 dark:bg-blue-950 '>
                    <h3 className='text-[1.2em] font-semibold text-zinc-600 dark:text-slate-300'>{user?.fullName?.charAt(0)?.toUpperCase()}</h3>
                  </div>
                }
              </div>
            </div>
            <div className='h-full w-auto grow flex flex-col px-2 py-1'>
              <h3 className=' dark:text-slate-100 text-zinc-700 font-semibold'>{user?.fullName} </h3>
              <p className='text-[0.9em] dark:text-slate-400  text-zinc-500 font-semibold truncate'>{user?.about}</p>
            </div>
            <div className='h-full w-[50px]'>

            </div>
            {isShowImage && < ImageBox />}
          </div>

        )
        )
      }
    </div>
  )
}

export default UsersList