import React from 'react'
import './topic.css'

function Topic({ head, subhead }) {
    return (
        <div className='flex justify-center'>
            <div className='header w-100% px-2 my-5 py-5 lg:py-8 text-center border-b-2 border-black'>
                <h2 className='font-bold text-2xl lg:text-4xl mb-2 lg:mb-3'>{head}</h2>
                <p className='font-thin text-sm lg:text-md tracking-wider'>{subhead}</p>
            </div>
        </div>
    )
}

export default Topic