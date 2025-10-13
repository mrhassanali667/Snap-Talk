import React from 'react'
import { useForm } from 'react-hook-form';

const ProfileDetailForm = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const onSubmit = (data) => {
        const img = URL.createObjectURL((data.image[0]))
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-full bg-white rounded-[5px] p-[25px] box-border'>
                <div className='flex justify-center items-center h-[100px] w-full relative'>
                    <div className='h-full flex justify-center absolute top-0 left-16 gap-5'>
                        <div className='bg-gray-100 h-[80px] w-[80px] rounded-[50%] flex justify-center items-center overflow-hidden ' >
                            {(watch("image")?.length < 1) ?
                                <svg
                                    className="w-9 h-9 text-zinc-400 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                :
                                <img
                                    className='h-full w-full'
                                    src={URL.createObjectURL(watch("image")[0])} alt='profile-image' />
                            }

                        </div>
                        <div className='flex flex-col items-center py-[12px]' >
                            <span className=' text-zinc-700 font-bold'>Profile Photo</span>
                            <div className='text-gray-500'>
                                <label className='cursor-pointer' htmlFor="file-input">Upload Photo</label>
                                <input type="file" id='file-input' hidden {...register("image")} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='text-zinc-600 flex flex-col gap-2 w-full'>
                        <label htmlFor="" className='text-[0.9em] font-semibold'>Display Name</label>
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
                                        strokeWidth={2}
                                        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>

                            </span>
                            <input
                                className={`h-full w-[90%] outline-0 px-[10px] placeholder:text-zinc-500 ${errors.email?.message !== undefined && "border-red-500 border-[1px]"}`}
                                type="text"
                                placeholder='Enter your email'
                                {...register("displayName")}
                            />
                        </div>
                        <span className='text-[0.8em] text-red-500 font-normal'>{errors.email?.message}</span>

                    </div>
                    <div className='text-zinc-600 flex flex-col gap-2 w-full'>
                        <label htmlFor="" className='text-[0.9em] font-semibold'>Aboute You</label>
                        <div className='h-[40px] flex  border-gray-300 border-[1px] rounded-[5px]'>

                            <input
                                className={`h-full w-[90%] outline-0 px-[10px] placeholder:text-zinc-500 ${errors.email?.message !== undefined && "border-red-500 border-[1px]"}`}
                                type="text"
                                placeholder='Tell us a bit aboute yourself...'
                                {...register("aboute")}
                            />
                        </div>
                    </div>
                    <button type='submit' disabled={isSubmitSuccessful} className='h-[40px] flex justify-center items-center bg-indigo-600/70 text-white font-semibold rounded-[5px] cursor-pointer mt-5'>{!false ? "Save Profile" : <MiniLoader />}</button>
                </div>
            </form>
        </>
    )
}

export default ProfileDetailForm