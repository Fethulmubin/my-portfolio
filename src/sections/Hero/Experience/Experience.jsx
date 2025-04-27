import React from 'react'
import TitleHeader from '../../../components/TitleHeader'
import { expCards } from '../../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        // Timeline line animation
        gsap.from(".timeline-line", {
            scaleY: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        // Card animations
        gsap.utils.toArray(".exp-card").forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.15,
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Dot animations
        gsap.from(".timeline-dot", {
            scale: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

    }, { scope: containerRef });

    return (
        <section className='w-full mt-20 md:mt-40 section-padding xl:px-0' id='exper' ref={containerRef}>
            <div className='w-full h-full md:px-20 px-5 max-w-7xl mx-auto'>
                <TitleHeader title="My Coding journey" sub="My journey overview 💻" />
                
                <div className='mt-32 relative'>
                    {/* Vertical Timeline Line - aligned with logos */}
                    {/* <div className="timeline-line absolute left-[calc(25%-5px)] md:left-[calc(25%-10px)] lg:left-[calc(25%-15px)] top-0 bottom-0 w-0.5 bg-gray-300"></div> */}
                    
                    <div className='relative z-50 space-y-32'>
                        {expCards.map((card, index) => (
                            <div 
                                key={index} 
                                className="exp-card flex items-start gap-8 relative"
                            >
                                {/* Left column for logo and timeline dot */}
                                <div className="w-1/4 flex justify-end relative">
                                    <div className="timeline-dot absolute top-6 right-[-8px] w-4 h-4 rounded-full bg-blue-500 border-4 border-white z-10"></div>
                                    <div className="w-24 h-24 flex-shrink-0 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center p-2">
                                        <img 
                                            src={card.logoPath} 
                                            alt={card.title} 
                                            className="w-16 h-16 object-contain" 
                                        />
                                    </div>
                                </div>
                                
                                {/* Right column for content */}
                                <div className="w-3/4">
                                    <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                    <p className='my-3 text-white/70'>{card.date}</p>
                                    <p className='text-blue-400'>Responsibilities</p>
                                    <ul className='mt-4 flex flex-col gap-2'>
                                        {card.responsibilities.map((item, i) => (
                                            <li key={i} className="bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience