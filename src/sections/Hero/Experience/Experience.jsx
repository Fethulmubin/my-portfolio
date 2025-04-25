import React from 'react'
import TitleHeader from '../../../components/TitleHeader'
import { expCards } from '../../../constants'

const Experience = () => {
  return (
    <section className='w-full mt-20 md:mt-40 section-padding xl:px-0' id='exper'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader title="My Coding journey" sub="My journey overview 💻" />
            <div className='mt-32 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                {expCards.map((card) =>{
                  <div key={card.title} className='exp-card-wrapper'>
                    {card.title}
                  </div> 
                })}

                </div>

            </div>
        </div>

    </section>
  )
}

export default Experience