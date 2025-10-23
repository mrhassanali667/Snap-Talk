import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideImage } from '../../redux/imageBox/imageBoxSlice'

const ImageBox = ({ image }) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [scale, setScale] = useState(1)

    const handleImageLoad = () => {
        setIsLoading(false)
    }

    const handleZoomIn = () => {
        setScale(prev => Math.min(prev + 0.25, 3))
    }

    const handleZoomOut = () => {
        setScale(prev => Math.max(prev - 0.25, 0.5))
    }

    const handleReset = () => {
        setScale(1)
    }

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => dispatch(hideImage())}
            />
            
            {/* Main content container with animation */}
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
                <div className="relative bg-neutral-900/90 rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl w-full mx-auto" 
                     style={{ maxHeight: '90vh', maxWidth: '95vw' }}>
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50 backdrop-blur-sm">
                            <div className="w-8 h-8 sm:w-12 sm:h-12 border-3 sm:border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                        </div>
                    )}
                    
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                            src={image} 
                            alt="Extended view"
                            className="max-h-[80vh] w-auto object-contain transition-transform duration-200 ease-out"
                            style={{ 
                                transform: `scale(${scale})`,
                                maxWidth: '100%',
                            }}
                            onLoad={handleImageLoad}
                        />
                    </div>

                    {/* Controls overlay - Mobile optimized */}
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4 bg-black/50 px-3 sm:px-6 py-2 rounded-full backdrop-blur-md touch-none">
                        <button 
                            onClick={handleZoomOut}
                            className="text-white hover:text-blue-400 transition-colors p-2 sm:p-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>
                        <button 
                            onClick={handleReset}
                            className="text-white hover:text-blue-400 transition-colors text-xs sm:text-sm px-2 py-1"
                        >
                            Reset
                        </button>
                        <button 
                            onClick={handleZoomIn}
                            className="text-white hover:text-blue-400 transition-colors p-2 sm:p-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>

                    <button 
                        onClick={() => dispatch(hideImage())}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/70 hover:text-white transition-colors bg-black/30 hover:bg-black/50 rounded-full p-1.5 sm:p-2 touch-manipulation"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageBox