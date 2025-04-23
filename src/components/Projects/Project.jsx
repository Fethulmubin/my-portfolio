import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { div } from 'three/tsl'

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectSecRef = useRef(null)
  const projectRef_1 = useRef(null)
  const projectRef_2 = useRef(null)
  const projectRef_3 = useRef(null)
  const references = [projectRef_1, projectRef_2]
 

  useGSAP(() => {
    references.forEach((ref, index)=>{
      gsap.fromTo(ref.current, {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3* (index + 1),
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom-=100",
        }
      })
    })

    gsap.fromTo(projectSecRef.current, {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    })

   

  },[])


  const projects= [
    {
      "title": "Linksy",
      "date": "January 01 2025",
      "description": "Linksy is an open-source bookmark and link manager that enables users to organize and manage their social media posts and other links.",
      "technologies": [
        "Next.js",
        "Typescript",
        "Better Auth",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI"
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_1
    },
    {
      "title": "UP-Start Studio",
      "date": "October 2024",
      "description": "Designed and built a landing page for Upstart studio --- landing page link",
      "technologies": [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI"
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_2
    }
  ]
  
  return (
    <section ref={projectSecRef} className='pb-15 px-[40px] lg:px-[300px]'>
        <div className='flex flex-col items-center'>
            <span className='px-4 py-2 bg-white-50 text-black-200 rounded-xl text-2xl font-bold'>My Projects</span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-4'>Check Out My Latest Projects</h2>
            <p className='text-2xl my-3'>I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 '>
              {
                projects.map((project, index) =>(
                  <div key={index} ref={project.ref} className='border-2 border-white/50 rounded-2xl '>
                    {project?.img ? <img src={project.img} alt={project.title}/> : <div className='w-full rounded-t-2xl h-[200px] flex justify-center items-center bg-white-50'>image</div> }
                    <div className='px-4'>
                    <h3 className='my-2 text-2xl font-bold'>{project.title}</h3>
                    <p className='mb-1 text-[10px] md:text-[16px]'>{project.date}</p>
                    <p className='text-[12px] md:text-[18px] text-white/70'>{project.description}</p>
                    <div className='flex flex-wrap my-2'>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className='text-[12px] md:text-[14px] text-white bg-white/20 px-2 rounded-xl mr-2 my-1'>{tech}</span>
                      ))}
                    </div>
                    <div className='flex justify-start items-end gap-5 my-2'>
                      <a href={project.links.website} target='_blank' rel='noreferrer' className='text-[10px] md:text-[13px] bg-white rounded-xl px-3 py-2 text-black hover:text-black/60'>Website</a>
                      <a href={project.links.source} target='_blank' rel='noreferrer' className='text-[10px] md:text-[13px] bg-white text-black rounded-xl px-3 py-2 hover:text-black/60'>Source Code</a>
                    </div>
                    </div>
                  </div>

                ))  
              }
            </div>
        </div>
    </section>
  )
}

export default Project