import React from 'react'
import image from '../../assets/self.png'

const Hero = () => {
  return (
    <div className='flex justify-between justify-center my-10'>
        <div className='w-1/5 mx-7 bg-amber-50 rounded-full'>
            <img className='object-contain rounded-full' src={image} alt="" />
        </div>
        <div className='w-3/4'>
            <h1 className='text-4xl'>Hi, I'm Fethulmubin</h1>
            <p>Intermediate Fullstack developer. I love building things and share them on the internet.</p>
        </div>

    </div>
  )
}

export default Hero