import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideChat } from '../../redux/chatbox/chatBoxSlice.js';

const ChatBoxNav = () => {

    const innerWidth = window.innerWidth;
    const dispatch = useDispatch();
    const user = useSelector(state => state.chat.selectedUser)

    return (
        <nav className='min-h-[75px] flex justify-between bg-white dark:bg-gray-900 border-b-1 border-gray-700 sticky top-0'>
            <div className='h-full md:px-4 flex items-center gap-1'>
                {innerWidth < 768 && <span onClick={() => dispatch(hideChat())}>
                    <svg
                        className="w-7 h-7 text-gray-400 "
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
                            d="m14 8-4 4 4 4"
                        />
                    </svg>

                </span>
                }
                <div className={`h-10 w-10 flex justify-center items-center bg-gray-600 rounded-[50%] `}>
                    {user?.profilePicture ?
                        <img src={user?.profilePicture} alt=""
                            className='h-full rounded-full '
                        />
                        :
                        <h2 className={`text-white text-[1.3em] font-semibold `}>{user?.fullName[0].toUpperCase()}</h2>
                    }
                </div>
                <h2 className='ml-2 text text-zinc-700 font-semibold dark:text-slate-100 public-sans'>{user?.fullName}</h2>
            </div>
            <div className='h-full px-2 flex gap-2 justify-between items-center'>
                <span>
                    <svg
                        className="w-7 h-7 text-gray-400"
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
                        className="w-7 h-7 text-gray-400"
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
                        className="w-7 h-7 text-gray-400 "
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
                            strokeWidth={3}
                            d="M12 6h.01M12 12h.01M12 18h.01"
                        />
                    </svg>
                </span>
            </div>
        </nav>
    )
}

export default ChatBoxNav