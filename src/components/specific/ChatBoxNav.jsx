import React from 'react'
import { useSelector } from 'react-redux'

const ChatBoxNav = () => {

    const user = useSelector((state) => state.auth.user)
    const innerWidth = window.innerWidth;

    return (
        <nav className='min-h-[75px] flex justify-between bg-white dark:bg-gray-900 border-b-1 border-gray-700 '>
            <div className='h-full px-2 flex items-center gap-1'>
                {innerWidth < 1024 && <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8-4 4 4 4" />
                </svg>
                }
                <div className={`h-10 w-10 flex justify-center items-center bg-gray-600 rounded-[50%] border-1`}>
                    {true ?
                        <img src="/images/DP.jpg" alt=""
                            className='h-10 w-10 rounded-[50%]'
                        />
                        :
                        <h2 className={`text-white text-[1.3em] font-semibold `}>{user?.username[0].toUpperCase()}</h2>
                    }
                </div>
                <h2 className='ml-2  text-slate-100 font-semibold public-sans'>Rafey Rafeeq</h2>
            </div>
            <div className='h-full px-2 flex gap-3 justify-between items-center'>
                <span>
                    <svg
                        className="w-6 h-6 text-gray-400"
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
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>

                </span>

                <span>
                    <svg
                        className="w-6 h-6 text-gray-400"
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
                            d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"
                        />
                    </svg>

                </span>
                <span>
                    <svg
                        className="w-6 h-6 text-gray-400"
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
                            d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                        />
                    </svg>
                </span>
                <span>
                    <svg
                        className="w-6 h-6 text-zinc-100"
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
                            d="M12 6h.01M12 12h.01M12 18h.01"
                        />
                    </svg>
                </span>
            </div>
        </nav>
    )
}

export default ChatBoxNav