import React from 'react'
import image from '../../assets/react.svg'
const Hero = () => {
  return (
    <div className='flex justify-around  my-25 w-full px-20'>
        <div className='flex flex-col justify-center items-start'>
            <h1 className='text-5xl font-bold'>Hi, I'm Fethulmubin</h1>
            <p className='text-xl mt-4'>I'm a passionate developer with a knack for creating stunning web applications.</p>
        </div>
        <div className='bg-gray-200 rounded-full p-4 w-1/2 h-1/2 flex justify-center items-center'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Hero