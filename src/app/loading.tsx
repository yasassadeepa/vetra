import React from 'react'

const Loader = () => {
    return (
        <div className="w-full min-h-screen h-dvh flex flex-col items-center justify-center bg-background/80 backdrop-blur-md fixed inset-0 z-[99999999]">
            <div className="border-2 border-t-primary border-border rounded-full w-16 h-16 animate-spin"></div>
        </div>
    )
};

export default Loader
