import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { auth, db } from '../firebase/firebaseConfig';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useQuery, useMutation } from '@tanstack/react-query'
import MiniLoader from '../components/common/MiniLoader';
import { useDebounce } from "use-debounce";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth/authSlice';





const Register = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();



    const formSchema = yup.object({
        email: yup.string().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email must be a valid email address"),
        username: yup.string().required().min(6, "username must have minimum 6 characters"),
        password: yup.string().required().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "use capital, small letters, number & min 8 chars")
    })

    const {
        register,
        handleSubmit,
        watch,
        setError,
        clearErrors,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(formSchema),
        mode: 'onChange'
    });

    const mutation = useMutation({
        mutationFn: (user) => {
            return axios.post('https://snap-talk-backend-server.vercel.app/api/auth/register', { ...user },{withCredentials:true})
        },
    })

    // Debounce username input and query Firestore safely
    const usernameValue = watch("username") || "";
    const [debouncedUsername] = useDebounce(usernameValue, 700);

    const { data: usernameTaken, isLoading: usernameLoading } = useQuery({
        queryKey: ["username", debouncedUsername],
        queryFn: async () => {
            console.log(debouncedUsername)
            const res = await axios.get(`https://snap-talk-backend-server.vercel.app/api/users/check-username?username=${debouncedUsername}`)
            return !res?.data?.data?.available;
        },
        // only run when username is long enough (>=6)
        enabled: debouncedUsername.length >= 6,
    });

    const onSubmit = async ({ username, email, password }) => {
        // Enforce username length at runtime before any API calls
        if (!username || username.trim().length < 6) {
            setError('username', { type: 'manual', message: 'Username must be at least 6 characters' });
            return;
        }

        // If the debounced availability check ran and found the username taken, block submit
        if (usernameTaken) {
            setError('username', { type: 'manual', message: 'Username is already taken' });
            return;
        }

        try {
            clearErrors('username');
            setErrorMessage("");
            setIsSubmitting(true);
            const { data } = await mutation.mutateAsync({
                email: email,
                username: username,
                password: password,
            });
            console.log(data);
            dispatch(setUser(data.user));
            navigate('/');
        } catch (error) {
            console.error("Registration error:", error);
            let message = "Registration failed. Please try again.";
            if (error.message === "email already in use.") {
                message = "This email is already registered. Please use a different email or sign in.";
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
        <div className='h-full w-full flex justify-center lg:items-center bg-violet-50 '>

            <div className='flex flex-col gap-1 w-full h-auto  max-w-[430px] py-[15px]'>
                <div >
                    <div className='h-[70px] w-full relative'>
                        <div className='h-full w-full flex gap-2 justify-center items-center  absolute right-4'>
                            <img
                                className='h-[35px]'
                                src="/images/logo.png" alt="logo" />
                            <h1 className='h-[65%] flex items-center text-[1.6em] public-sans font-semibold '>Snap Talk</h1>
                        </div>
                    </div>
                    <div className='h-[80px] w-full flex flex-col justify-center items-center'>
                        <h2 className='text-[1.4em] text-zinc-700 font-semibold '>Register</h2>
                        <p className='text-[0.9em] text-neutral-600'> Get your Snap Talk account now.</p>
                    </div>
                </div>

                {errorMessage && (
                    <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-full bg-white rounded-lg shadow-sm p-6 box-border'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-zinc-600 flex flex-col gap-2'>
                            <label htmlFor="email" className='text-[0.9em] font-semibold'>Email</label>
                            <div className={`h-[40px] flex border-[1px] rounded-md  border-gray-300`}>
                                <span className='h-[100%] w-[40px] rounded-l-md flex justify-center items-center bg-gray-100'>
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
                                    className={`h-full w-[90%] outline-none px-3 border-[1px] transition-colors duration-200 placeholder:text-zinc-400 bg-transparent ${errors.email ? 'border-red-300' : 'border-gray-300 focus-within:border-indigo-500'}`}
                                    type="email"
                                    placeholder='Enter your email'
                                    {...register("email")}
                                    aria-describedby="email-error"
                                />

                            </div>
                            {errors.email?.message && (
                                <span id="email-error" role="alert" className='text-[0.8em] text-red-500 font-normal mt-1'>{errors.email.message}</span>
                            )}
                        </div>
                        <div className='text-zinc-600 flex flex-col gap-2'>
                            <label htmlFor="username" className='text-[0.9em] font-semibold'>Username</label>
                            <div className={`h-[40px] flex border-[1.5px] rounded-md border-gray-300`}>
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
                                            strokeWidth={2}
                                            d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>

                                </span>
                                <input
                                    id="username"
                                    className={`h-full w-[90%] outline-none px-3 border-[1px] border-gray-300 placeholder:text-zinc-400 bg-transparent transition-colors duration-200 ${errors.username ? 'border-red-300' : 'border-gray-300 focus-within:border-indigo-500'}`}
                                    type="text"
                                    placeholder='Enter your username'
                                    {...register("username")}
                                    aria-describedby="username-error"
                                />
                            </div>
                            {errors.username?.message && (
                                <span id="username-error" role="alert" className='text-[0.8em] text-red-500 font-normal mt-1'>{errors.username.message}</span>
                            )}
                            {/* Username availability */}
                            {debouncedUsername.length >= 6 && usernameLoading && (
                                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                                    <div className="w-4 h-4 border-2 border-gray-300 border-t-indigo-500 rounded-full animate-spin" />
                                    Checking availability...
                                </div>
                            )}
                            {debouncedUsername.length >= 6 && !usernameLoading && usernameTaken && (
                                <div className='text-[0.8em] text-red-500 font-normal mt-1'>Username is already taken</div>
                            )}
                            {debouncedUsername.length >= 6 && !usernameLoading && !usernameTaken && (
                                <div className='text-[0.8em] text-green-600 font-normal mt-1'>Username is available</div>
                            )}
                        </div>
                        <div className='text-zinc-600 flex flex-col gap-2'>
                            <label htmlFor="password" className='text-[0.9em] font-semibold'>Password</label>
                            <div className={`h-[40px] flex border-[1px] border-gray-300 rounded-md  relative`}>
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
                                    className={`h-full w-[90%] outline-none border-[1px] px-3 placeholder:text-zinc-400 bg-transparent  border-gray-300  transition-colors duration-200 ${errors.username ? 'border-red-300' : 'border-gray-300 focus-within:border-indigo-500'}`}
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
                            disabled={isSubmitting || usernameTaken}
                            className={`h-[40px] flex justify-center items-center ${isSubmitting || usernameTaken ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                                } text-white font-semibold rounded-md mt-[10px] transition-colors duration-200 ${isSubmitting || usernameTaken ? 'cursor-not-allowed' : 'cursor-pointer'
                                }`}
                            aria-busy={isSubmitting}
                            title={usernameTaken ? 'Please choose a different username' : ''}
                        >
                            {isSubmitting ? <MiniLoader /> : 'Register'}
                        </button>
                    </div>
                </form>

                <div className='h-[150px] w-full flex flex-col gap-2 justify-center items-center text-neutral-600'>
                    <p className='text-[0.9em]'>Don't have an account ? <Link to={'/login'} className='text-indigo-600'>Signin</Link></p>
                    <p className='text-[0.9em]'>© {new Date().getFullYear()} Snap Talk. Crafted with  <span className='text-red-600 text-[1.5em]'>&hearts;</span> by Hassan Ali</p>
                </div>
            </div>

        </div >
    )
}

export default Register