import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import MiniLoader from '../components/common/MiniLoader';
import ImageBox from '../components/common/ImageBox';
import { useDispatch, useSelector } from 'react-redux';
import { showImage } from '../redux/imageBox/imageBoxSlice';

const CreateProfile = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const isShowImage = useSelector(state => state.image.isShowImage);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitSuccessful },
        reset
    } = useForm({
        defaultValues: {
            displayName: '',
            about: '',
            image: null
        }
    });

    const validateImageFile = (file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!validTypes.includes(file.type)) {
            return "Please upload a valid image file (JPEG, PNG, or GIF)";
        }
        if (file.size > maxSize) {
            return "Image size should be less than 5MB";
        }
        return true;
    };

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);
            if (data.image?.[0]) {
                const validationResult = validateImageFile(data.image[0]);
                if (validationResult !== true) {
                    throw new Error(validationResult);
                }
            }
            
            // TODO: Implement your profile creation logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
            
            reset();
            // TODO: Show success message and redirect
        } catch (error) {
            console.error('Profile creation failed:', error);
            // TODO: Show error message
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>

            <div className='w-full flex justify-center lg:items-center  bg-violet-50'>
                <div className='w-full max-w-[440px] flex gap-1 p-[10px] flex-col justify-center items-center'>
                    <div >
                        <div className='h-[70px] w-full relative'>
                            <div className='h-full w-full flex justify-center items-center  absolute right-5'>
                                <img
                                    className='h-[90%]'
                                    src="/logo.png" alt="logo" />
                                <h1 className='h-[65%] text-[1.6em] public-sans font-semibold '>Snap Talk</h1>
                            </div>
                        </div>
                        <div className='h-[80px] w-full flex flex-col justify-center items-center'>
                            <h2 className='text-[1.4em] text-zinc-700 font-semibold '>Create Your Profile</h2>
                            <p className='text-[0.9em] text-neutral-600'>Sign in to continue to Snap Talk</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-full bg-white rounded-[5px] p-[25px] box-border'>
                        <div className='flex justify-center items-center h-[100px] w-full relative'>
                            <div className='h-full flex justify-center absolute top-0 left-16 gap-5'>
                                <div className='bg-gray-100 h-[80px] w-[80px] rounded-[50%] flex justify-center items-center overflow-hidden ' >
                                    {(!watch("image") || watch("image")?.length < 1) ?
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
                                            onClick={() => {dispatch(showImage())}}
                                            className='h-full w-full cursor-pointer'
                                            src={URL.createObjectURL(watch("image")[0])} alt='profile-image' />
                                    }

                                </div>
                                <div className='flex flex-col items-center py-[12px]' >
                                    <span className=' text-zinc-700 font-bold'>Profile Photo</span>
                                    <div className='text-gray-500'>
                                        <label className='cursor-pointer' htmlFor="file-input">Upload Photo</label>
                                        <input 
                                        type="file" 
                                        id='file-input' 
                                        hidden 
                                        accept="image/jpeg,image/png,image/gif"
                                        {...register("image", { 
                                            required: "Profile photo is required",
                                            validate: {
                                                fileType: (value) => {
                                                    if (value?.[0]) {
                                                        return validateImageFile(value[0]) === true || validateImageFile(value[0]);
                                                    }
                                                    return true;
                                                }
                                            }
                                        })} 
                                        aria-describedby="file-input-error"
                                    />
                                        <span id="file-input-error" role="alert" className='text-[0.8em] text-red-500 font-normal mt-1'>{errors.image?.message}</span>
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
                                        className={`h-full w-[90%] outline-0 px-[10px] placeholder:text-zinc-500 ${errors.displayName?.message !== undefined && "border-red-500 border-[1px]"}`}
                                        type="text"
                                        placeholder='Enter display name'
                                        {...register("displayName", { required: "Display name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                                    />
                                </div>
                                <span className='text-[0.8em] text-red-500 font-normal'>{errors.displayName?.message}</span>

                            </div>
                            <div className='text-zinc-600 flex flex-col gap-2 w-full'>
                                <label htmlFor="about" className='text-[0.9em] font-semibold'>About You</label>
                                <div className='min-h-[40px] flex border-gray-300 border-[1px] rounded-[5px] transition-colors focus-within:border-indigo-500'>
                                    <textarea
                                        id="about"
                                        className={`w-full min-h-[80px] outline-none px-[10px] py-2 placeholder:text-zinc-500 resize-y ${errors.about?.message ? "border-red-500" : ""}`}
                                        placeholder='Tell us a bit about yourself...'
                                        {...register("about", { 
                                            maxLength: { 
                                                value: 200, 
                                                message: "Maximum 200 characters" 
                                            }
                                        })}
                                        aria-describedby="about-error"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <span id="about-error" role="alert" className='text-[0.8em] text-red-500 font-normal'>{errors.about?.message}</span>
                                    <span className="text-[0.8em] text-gray-500">{(watch("about")?.length || 0)}/200</span>
                                </div>
                            </div>
                            <button 
                                type='submit' 
                                disabled={isSubmitting} 
                                className={`h-[40px] flex justify-center items-center ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-semibold rounded-[5px] transition-colors mt-2 ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                aria-busy={isSubmitting}
                            >
                                {isSubmitting ? <MiniLoader /> : "Save Profile"}
                            </button>
                        </div>
                    </form>
                    <div className='h-[80px] w-full flex flex-col gap-2 justify-center items-center text-neutral-600'>
                        <p className='text-[0.9em]'>Want to leave <button className='text-indigo-600'>Logout</button></p>
                        <p className='text-[0.9em]'>© {new Date().getFullYear()} Snap Talk. Crafted with  <span className='text-red-600 text-[1.5em]'>&hearts;</span> by Hassan Ali</p>
                    </div>
                </div>
                {isShowImage && <ImageBox image={(watch("image")?.length > 0) && URL.createObjectURL(watch("image")[0])} />}
            </div>

        </>
    )
}

export default CreateProfile