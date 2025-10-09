import React from 'react'

const Loader = () => {
    return (
        <>
            <div class="flex flex-row gap-2">
                <div class="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
                <div class="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
                <div class="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
            </div>
        </>

    )
}

export default Loader