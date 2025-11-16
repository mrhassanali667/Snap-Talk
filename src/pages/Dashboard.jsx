import React, { useEffect, useState } from 'react'

const Dashboard = () => {

  let [a, setA] = useState(true)

  useEffect(() => {

    window.addEventListener("resize", (e) => {
      console.log(e)
      if (innerWidth < 770) {
        setA(false)
      } else {
        setA(true)
      }
    })

  }, [innerWidth])

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <h1 className='text-[2em] font-semibold text-zinc-700 text-center'>Welcome to Dashboard</h1>
      {a &&
        <div className='h-[60%] w-[60%] bg-violet-500 '>
          hello world
        </div>
      }
    </div>
  )
}

export default Dashboard