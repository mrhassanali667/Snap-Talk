import React from 'react'
import { Link } from 'react-router'


const Login = () => {

    return (
        <div className='h-full w-full flex justify-center items-center bg-violet-50 '>
            <div className='flex flex-col gap-3 h-[665px] w-full  max-w-[430px] '>
                <div className=''>
                    <div className='h-[70px] w-full relative'>
                        <div className='h-full w-full flex justify-center items-center  absolute right-5'>
                            <img
                                className='h-[90%]'
                                src="/logo.png" alt="" />
                            <h1 className='h-[65%] text-[1.6em] public-sans font-semibold '>Snap Talk</h1>
                        </div>
                    </div>
                    <div className='h-[80px] w-full flex flex-col justify-center items-center'>
                        <h2 className='text-[1.4em] text-zinc-700 font-semibold '>Sign in</h2>
                        <p className='text-[0.9em] text-neutral-600'>Sign in to continue to Snap Talk.</p>
                    </div>
                </div>
                <div className='h-[320px] w-full bg-white rounded-[5px] p-[25px] box-border'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-zinc-500 flex flex-col gap-2'>
                            <label htmlFor="" className='text-[0.9em] font-semibold'>Email</label>
                            <div className='h-[40px] flex  border-gray-300 border-[1px] rounded-[5px]'>
                                <span className='h-[40px] w-[40px] flex justify-center items-center bg-gray-100'>
                                    <svg class="w-6 h-6 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </span>
                                <input
                                    className='h-full w-full max-w-[85%] outline-0 px-[10px]'
                                    type="email" />
                            </div>
                        </div>
                        <div className='text-zinc-500 flex flex-col gap-2'>
                            <label htmlFor="" className='text-[0.9em] font-semibold'>Password</label>
                            <div className='h-[40px] flex border-gray-300 border-[1px] rounded-[5px]'>
                                <span className='h-[40px] w-[40px] flex justify-center items-center bg-gray-100'>
                                    <svg class="w-6 h-6 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                                    </svg>

                                </span>
                                <input
                                    className='h-full w-full max-w-[85%] outline-0 px-[10px]'
                                    type="password" />
                            </div>
                        </div>
                        <div>

                        </div>
                        <button className='h-[40px] bg-indigo-600/70 text-white font-semibold rounded-[5px]'>Sign in</button>
                    </div>
                </div>
                <div className='h-[150px] w-full flex flex-col gap-2 justify-center items-center text-neutral-600'>
                    <p className='text-[0.9em]'>Don't have an account ? <Link to={'/rejister'} className='text-indigo-600'>Signup now</Link></p>
                    <p className='text-[0.9em]'>© {new Date().getFullYear()} Chatvia. Crafted with  by <span className='text-red-600 text-[1.5em]'>&hearts;</span> Themesbrand</p>
                </div>
            </div>
        </div >
    )
}

export default Login