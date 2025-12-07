import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { getRandomDarkColors } from '../../utils/index.js'

const Navbar = () => {

  const user = useSelector((state) => state.auth.user)
  const [isDark, setIsDark] = useState(true)
  const colors = ["bg-slate-700", "bg-gray-700", "bg-zinc-700", "bg-neutral-700", "bg-stone-700", "bg-red-700", "bg-orange-700", "bg-amber-700", "bg-yellow-700", "bg-lime-700", "bg-green-700", "bg-emerald-700", "bg-teal-700", "bg-cyan-700", "bg-sky-700", "bg-blue-700", "bg-indigo-700", "bg-violet-700", "bg-purple-700", "bg-fuchsia-700", "bg-pink-700", "bg-rose-700"];




  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <div className='max-lg:h-[65px] lg:w-[75px] bg-white dark:bg-gray-700 flex lg:flex-col justify-between  items-center py-1 lg:py-4 px-4 max-lg:px-3    '>
      <NavLink to={'/'} className='max-lg:hidden' >
        <img src="/logo.png" alt="logo"
          className='w-[40px]'
        />
      </NavLink>
      <nav className='max-lg:w-[85%] flex lg:flex-col gap-4 max-lg:gap-1 justify-center max-lg:justify-between items-center'>
        <NavLink to={'/profile'} className={({ isActive }) => `navlink ${isActive ? 'bg-violet-50/70 dark:bg-gray-600/40' : ''}`}>
          {
            ({ isActive }) => (

              <svg
                className={`h-7 w-7 lg:w-8 lg:h-8  ${isActive ? 'text-[#7269ef] ' : 'text-zinc-400'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )
          }

        </NavLink>
        <NavLink to={'/'} end className={({ isActive }) => `navlink ${isActive ? 'bg-violet-50/70 dark:bg-gray-600/50' : ''}`}>
          {
            ({ isActive }) => (
              <svg
                className={`h-7 w-7 lg:w-8 lg:h-8  ${isActive ? 'text-[#7269ef] ' : 'text-zinc-400'} `}
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
                  d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                />
              </svg>
            )
          }
        </NavLink>
        <NavLink to={'/groups'} className={({ isActive }) => `navlink ${isActive ? 'bg-violet-50/70 dark:bg-gray-600/50' : ''}`}>
          {
            ({ isActive }) => (

              <svg
                className={`h-7 w-7 lg:w-8 lg:h-8  ${isActive ? 'text-[#7269ef] ' : 'text-zinc-400'} `}
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
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
            )
          }
        </NavLink>
        <NavLink to={'/contacts'} className={({ isActive }) => `navlink ${isActive ? 'bg-violet-50/70 dark:bg-gray-600/50' : ''}`}>
          {
            ({ isActive }) => (

              <svg
                className={`h-7 w-7 lg:w-8 lg:h-8  ${isActive ? 'text-[#7269ef] ' : 'text-zinc-400'}`}
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
                  d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )
          }
        </NavLink>
        <NavLink to={'/settings'} className={({ isActive }) => `navlink ${isActive ? 'bg-violet-50/70 dark:bg-gray-600/50' : ''}`}>
          {
            ({ isActive }) => (

              <svg
                className={`h-7 w-7 lg:w-8 lg:h-8  ${isActive ? 'text-[#7269ef] ' : 'text-zinc-400'}`}
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
                  d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
              </svg>
            )
          }

        </NavLink>
      </nav>
      <div className='flex lg:flex-col gap-8 justify-center items-center '>
        <button
          onClick={toggleTheme}
          className='cursor-pointer max-lg:hidden'>
          {isDark ?
            <svg
              className="w-8 h-8 text-zinc-400 "
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
                d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
              />
            </svg>
            :
            <svg
              className="w-8 h-8 text-zinc-400 "
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
                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              />
            </svg>

          }
        </button>
        <div className={`h-9 w-9 flex justify-center items-center bg-[${colors[Math.floor((Math.random() * 12) + 1)]}] rounded-[50%] border-1`}>
          {false ?
            <img src="" alt=""
              className='h-8 w-8 rounded-[50%]'
            />
            :
            <h2 className={`text-white `}>{user?.email[0].toUpperCase()}</h2>
          }
        </div>
      </div>
    </div >
  )
}

export default Navbar