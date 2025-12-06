import React from 'react'

const UsersList = () => {
  return (
    <div className='h-full w-full flex gap-1 flex-col overflow-y-auto'>
        {[...Array(20)].map((_, index) =>
            <div key={index} className='min-h-[70px] w-full bg-gray-900  flex flex-col justify-end items-center '>  

            </div>
        )}
    </div>
  )
}

export default UsersList