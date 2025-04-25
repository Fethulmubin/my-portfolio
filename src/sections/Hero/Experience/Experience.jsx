import React from 'react'
import TitleHeader from '../../../components/TitleHeader'
import { expCards } from '../../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    useGSAP(()=>{
        gsap.to(".timeline", {
            // Set the origin of the animation to the bottom of the timeline
            transformOrigin: "bottom bottom",
            // Animate the timeline height over 1 second
            ease: "power1.inOut",
            // Trigger the animation when the timeline is at the top of the screen
            // and end it when the timeline is at 70% down the screen
            scrollTrigger: {
              trigger: ".timeline",
              start: "top center",
              end: "70% center",
              // Update the animation as the user scrolls
              onUpdate: (self) => {
                // Scale the timeline height as the user scrolls
                // from 1 to 0 as the user scrolls up the screen
                gsap.to(".timeline", {
                  scaleY: 1 - self.progress,
                });
              },
            },
          });
      
    },[])
    gsap.utils.toArray('.timeline-card').forEach((card)=>{
        gsap.from(card, {
            xPercent: -100,
            opacity: 0
        })
    })
    return (
        <section className='w-full mt-20 md:mt-40 section-padding xl:px-0' id='exper'>
            <div className='w-full h-full md:px-20 px-5'>
                <TitleHeader title="My Coding journey" sub="My journey overview 💻" />
                <div className='mt-32 relative'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {expCards.map((card) => (
                            // <div key={card.title} className='exp-card-wrapper'>
                            //     {card.title}
                                <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                    <div className="timeline" />
                                    <div className='timeline-logo'>
                                        <img src={card.logoPath} alt="" />
                                    </div>
                                    <div>
                                    <h1 className='font-semibold text-3xl '>{card.title}</h1>
                                    <p className='my-5 text-white-50'>{card.date}</p>
                                    <p className='text-[#839cb5]'> Responsibilities </p>
                                    <ul className='list-disc ms-5 mt-5 flex flex-col gap-5'>
                                        {card.responsibilities.map((item, index) => (
                                            <li className='' key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                            // </div>

                        ))}



                    </div>

                </div>
            </div>

        </section>
    )
}

export default Experience