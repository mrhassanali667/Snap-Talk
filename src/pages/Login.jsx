import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import Loader from '../components/miniComponents/Loader'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'



const Login = () => {

    let [isShowPass, setIsShowPass] = useState(false);

    const formSchema = yup.object({
        email: yup.string().required("Email is required").email(),
        username: yup.string().required().min(3, "Enter minimum 3 lettters"),
        password: yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Must have a capital and a number.")
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data) => {
        console.log(data)
        console.log("Hello")
    }

    const passVisiblity = (e) => {
        e.preventDefault();
        setIsShowPass(!isShowPass)

    }



    return (
        <div className='h-full w-full flex justify-center items-center bg-violet-50 '>
            <div className='flex flex-col gap-1  w-full  max-w-[430px] py-[15px]'>
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
                <form onSubmit={handleSubmit(onSubmit)} className='h-[320px] w-full bg-white rounded-[5px] p-[25px] box-border'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-zinc-600 flex flex-col gap-2'>
                            <label htmlFor="" className='text-[0.9em] font-semibold'>Email</label>
                            <div className='h-[40px] flex  border-gray-300 border-[1px] rounded-[5px]'>
                                <span className='h-[40px] w-[40px] flex justify-center items-center bg-gray-100'>
                                    <svg
                                        className="w-5 h-5 text-gray-400 "
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
                                            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                                        />
                                    </svg>


                                </span>
                                <input
                                    className={`h-full w-[90%] outline-0 px-[10px] placeholder:text-zinc-500 ${errors.email?.message !== undefined && "border-red-500 border-[1px]"}`}
                                    type="email"
                                    placeholder='Enter your email'
                                    {...register("email")}
                                />
                            </div>
                            <span className='text-[0.8em] text-red-500 font-normal'>{errors.email?.message}</span>

                        </div>
                        <div className='text-zinc-600 flex flex-col gap-2'>
                            <label htmlFor="" className='text-[0.9em] font-semibold'>Password</label>
                            <div className='h-[40px] flex border-gray-300 border-[1px] rounded-[5px] relative'>
                                <span className='h-[40px] w-[40px] flex justify-center items-center bg-gray-100'>
                                    <svg
                                        className="w-5 h-5 text-gray-400 "
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
                                            d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                                        />
                                    </svg>


                                </span>
                                <input

                                    className={`h-full w-[90%] outline-0 px-[10px] placeholder:text-zinc-500 ${errors.email?.message !== undefined && "border-red-500 border-[1px]"}`}
                                    type={isShowPass ? "text" : "password"}
                                    placeholder='Enter your password'
                                    {...register("password")}
                                />
                                {isShowPass ?
                                    <button onClick={passVisiblity} className='absolute right-3 top-3 cursor-pointer'>
                                        <svg
                                            className="w-5 h-5 text-gray-400"
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
                                                d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>


                                    </button>
                                    :
                                    <button onClick={passVisiblity} className='absolute right-3 top-2 cursor-pointer'>
                                        <svg
                                            className="w-5 h-5 text-gray-400 "
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
                                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                            />
                                            <path
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>
                                    </button>
                                }
                            </div>
                            <span className='text-[0.8em] text-red-500 font-normal'>{errors.password?.message}</span>
                        </div>
                        <div>

                        </div>
                        <input type='submit' className='h-[40px] flex justify-center items-center bg-indigo-600/70 text-white font-semibold rounded-[5px] cursor-pointer' value={true ? 'Sign in' : <Loader />} />
                    </div>
                </form>
                <div className='h-[150px] w-full flex flex-col gap-2 justify-center items-center text-neutral-600'>
                    <p className='text-[0.9em]'>Don't have an account ? <Link to={'/rejister'} className='text-indigo-600'>Signup now</Link></p>
                    <p className='text-[0.9em]'>© {new Date().getFullYear()} Snap Talk. Crafted with <span className='text-red-600 text-[1.5em]'>&hearts;</span> by Hassan Ali</p>
                </div>
            </div>
        </div >
    )
}

export default Login