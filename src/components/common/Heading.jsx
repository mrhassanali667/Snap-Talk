import React from 'react'

const Heading = ({ name }) => {
    return (
        <div>
            <h1 className='text-zinc-700 text-[1.3em] public-sans font-semibold dark:text-slate-100 px-5'>{name}</h1>
        </div>
    )
}

export default Heading