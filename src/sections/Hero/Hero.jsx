import React from 'react'
import { words } from '../../assets/constants'
import Button from '../../components/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Bulb from '../../components/Bulb'


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', {
      y: 50,
      opacity: 0,
    },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      })
  })

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='hero-layout'>
        {/* left content */}
        <header className='flex flex-col justify-center justify-self-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>Shaping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                        <img src={word.imgPath} alt="" className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>in to Real Projects</h1>
              <h1>that deliver results</h1>
            </div>
            <h1 className="text-7xl font-bold flex items-center gap-2">
              Hi
              <span className="wave text-7xl inline-block">👋</span>
            </h1>
            <p className='text-white-50 md:text-3xl text-xl font-bold relative flex-wrap md:w-140 z-10'>I'm Fethulmubin a passionate MERN-Stack developer based in Ethiopia  </p>
            <a href="/Fethulmubin's_cv.pdf" download className='md:w-80 md:h-16 w-60 h-12'>
              <Button className='md:w-80 md:h-16 w-60 h-12' id='button' text='Download My CV' />
            </a>

          </div>

        </header>
        {/* 3d model */}
        <figure className='hidden md:block'>
          <div className='hero-3d-layout'>
            {/* <HeroExperience/> */}
            <Bulb />
          </div>
        </figure>

      </div>

    </section>
  )
}

export default Hero