import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import MiniLoader from '../components/common/MiniLoader'
import { useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { setUser } from '../redux/auth/authSlice.js'



const Login = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const formSchema = yup.object({
        usernameOrEmail: yup.string().required("email is required").min(3, "username or email must be at least 3 characters"),
        password: yup.string().required("password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "use capital, small letters, number & min 8 chars")
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(formSchema),
        mode: 'onChange',
    });

    const mutation = useMutation({
        mutationFn: (user) => {
            return axios.post('https://snap-talk-backend-server.vercel.app/api/auth/login', { ...user }, { withCredentials: true })
        },
    })

    const onSubmit = async ({usernameOrEmail, password }) => {
        try {
            setErrorMessage("");
            setIsSubmitting(true);
            const { data } = await mutation.mutateAsync({
                usernameOrEmail: usernameOrEmail,
                password: password,
            });
            console.log(data);
            dispatch(setUser(data.user));
            navigate('/');
        } catch (error) {
            console.error("Login error:", error);
            let message = "Login failed. Please check your username or email and password.";
            if (error.message === "user not found") {
                message = "No account found with this username or email. Please register first.";
            } else if (error.message === "incorrect password") {
                message = "Incorrect password. Please try again.";
            }
            setErrorMessage(message);
        } finally {
            setIsSubmitting(false);
        }
    }

    const passVisiblity = (e) => {
        e.preventDefault();
        setIsShowPass(!isShowPass)

    }

    return (
        <div className='h-full w-full flex justify-center lg:items-center bg-slate-50 '>
            <div className='flex flex-col gap-1 w-full  max-w-[430px] py-[15px]'>
                <div className='h-auto w-full'>
                    <div className='h-[70px] w-full relative'>
                        <div className='h-full w-full flex gap-2 justify-center items-center  absolute right-4'>
                            <img
                                className='h-[35px]'
                                src="/images/logo.png" alt="" />
                            <h1 className='h-[65%] flex items-center text-[1.6em] public-sans font-semibold '>Snap Talk</h1>
                        </div>
                    </div>
                    <div className='h-[80px] w-full flex flex-col justify-center items-center'>
                        <h2 className='text-[1.4em] text-zinc-700 font-semibold '>Sign in</h2>
                        <p className='text-[0.9em] text-neutral-600'>Sign in to continue to Snap Talk.</p>
                    </div>
                </div>
                {errorMessage && (
                    <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-full bg-white rounded-lg shadow-sm p-6 box-border'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-zinc-600 flex flex-col gap-2'>
                            <label htmlFor="email" className='text-[0.9em] font-semibold'>Email</label>
                            <div className={`h-[40px] flex border-[1px] border-gray-300 rounded-md `}>
                                <span className='h-full w-[40px] rounded-l-md flex justify-center items-center bg-gray-100'>
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
                                    id="email"
                                    className={`h-full w-[90%] outline-none px-3 border-[1px] placeholder:text-zinc-400 bg-transparent transition-colors duration-200 ${errors.usernameOrEmail ? 'border-red-300' : 'border-gray-300 focus-within:border-indigo-500'}`}
                                    type="text"
                                    placeholder='Enter your username or email'
                                    {...register("usernameOrEmail")}
                                    aria-describedby="email-error"
                                />
                            </div>
                            {errors.usernameOrEmail?.message && (
                                <span id="email-error" role="alert" className='text-[0.8em] text-red-500 font-normal mt-1'>{errors.usernameOrEmail.message}</span>
                            )}
                        </div>
                        <div className='text-zinc-600 flex flex-col gap-2'>
                            <label htmlFor="password" className='text-[0.9em] font-semibold'>Password</label>
                            <div className={`h-[40px] flex border-[1px] border-gray-300 rounded-md relative`}>
                                <span className='h-full w-[40px] rounded-l-md flex justify-center items-center bg-gray-100'>
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
                                    id="password"
                                    className={`h-full w-[90%] outline-none px-3 border-[1px]  placeholder:text-zinc-400 bg-transparent transition-colors duration-200 ${errors.usernameOrEmail ? 'border-red-300' : 'border-gray-300 focus-within:border-indigo-500'}`}
                                    type={isShowPass ? "text" : "password"}
                                    placeholder='Enter your password'
                                    {...register("password")}
                                    aria-describedby="password-error"
                                />
                                {isShowPass ?
                                    <button onClick={passVisiblity} className='h-[25px] w-[30px] bg-white flex justify-center items-center absolute right-2 top-2 cursor-pointer'>
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
                                    <button onClick={passVisiblity} className='h-[25px] w-[30px] bg-white flex justify-center items-center absolute right-2 top-2 cursor-pointer'>
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
                            {errors.password?.message && (
                                <span id="password-error" role="alert" className='text-[0.8em] text-red-500 font-normal mt-1'>{errors.password.message}</span>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`h-[40px] flex justify-center items-center ${isSubmitting ? 'bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-700'
                                } text-white font-semibold rounded-md mt-[10px] transition-colors duration-200 ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
                                }`}
                            aria-busy={isSubmitting}
                        >
                            {isSubmitting ? <MiniLoader /> : 'Sign in'}
                        </button>
                        <div className="flex justify-end">
                            <button type="button" className="text-sm text-indigo-600 hover:text-indigo-700">
                                Forgot password?
                            </button>
                        </div>
                    </div>
                </form>
                <div className='h-[150px] w-full flex flex-col gap-2 justify-center items-center text-neutral-600'>
                    <p className='text-[0.9em]'>Don't have an account ? <Link to={'/register'} className='text-indigo-600'>Signup now</Link></p>
                    <p className='text-[0.9em]'>© {new Date().getFullYear()} Snap Talk. Crafted with <span className='text-red-600 text-[1.5em]'>&hearts;</span> by Hassan Ali</p>
                </div>
            </div>
        </div >
    )
}

export default Login