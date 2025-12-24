import React from 'react'

const SearchBar = () => {
  return (
    <div className='h-[40px] w-full flex px-3 bg-slate-200/70 dark:bg-gray-600/50 rounded-full'>
        <span className='w-[30px] h-full flex justify-start items-center'>
          <svg className='w-5 h-5 text-zinc-700 dark:text-zinc-300' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>  
        </span>
        <input type="search"
        className='w-auto grow h-full bg-transparent outline-none border-none text-zinc-700 dark:text-zinc-300   placeholder:text-zinc-400'
        placeholder='Search'
         /> 
    </div>
  )
}

export default SearchBar