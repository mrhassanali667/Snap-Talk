import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const DropDown = ({ id, heading, isOpen, toggleOpen }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const user = useSelector((state) => state.auth.user)




    return (
        <div className='px-7 py-2 box-border '>
            <div className={`rounded-[5px] overflow-y-clip border-1 hide-scroll transition-all duration-500  border-gray-800  w-full text-white grow ${isOpen ? 'max-h-[500px]' : 'max-h-[40px]'}`}>
                <div className='h-[40px] w-full px-6   flex justify-between items-center font-semibold bg-gray-800'
                    onClick={() => toggleOpen(id)}
                >
                    <div>
                        <h4 className='font-semibold text-[14px]  '>{heading}</h4>
                    </div>
                    <span>
                        <svg
                            className={`w-5 h-5 text-gray-800 ${isDropDownOpen ? 'rotate-180' : ''} transition-all duration-500 dark:text-slate-100`}
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
                                d="m19 9-7 7-7-7"
                            />
                        </svg>
                    </span>
                </div>
                <div className='text-slate-100 px-4 py-3'>
                    <p className='text-[15px] text-zinc-400 font-semibold'>Name</p>
                    <span className='text-[15px] font-semibold'>{user?.fullName}</span>
                </div>
                <div className='text-slate-100 px-4 py-3'>
                    <p className='text-[15px] text-zinc-400 font-semibold'>Username</p>
                    <span className='text-[15px] font-semibold'>{user?.username}</span>
                </div>
                <div className='text-slate-100 px-4 py-3'>
                    <p className='text-[15px] text-zinc-400 font-semibold'>Email</p>
                    <span className='text-[15px] font-semibold'>{user?.email}</span>
                </div>
            </div>
        </div>
    )
}

export default DropDown