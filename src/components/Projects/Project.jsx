import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { div } from 'three/tsl'
import { FaGithub, FaGlobe } from 'react-icons/fa'


gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectSecRef = useRef(null)
  const projectRef_1 = useRef(null)
  const projectRef_2 = useRef(null)
  const projectRef_3 = useRef(null)
  const projectRef_4 = useRef(null)
  const projectRef_5 = useRef(null)
  const projectRef_6 = useRef(null)
  const references = [projectRef_1, projectRef_2]


  useGSAP(() => {
    references.forEach((ref, index) => {
      gsap.fromTo(ref.current, {
        y: 50,
        opacity: 0,
      },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
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



  }, [])


  const projects = [
    {
      "title": "Tomato",
      "date": "March 25 2025",
      "description": "Tomato is an open-source food ordering platform that allows users to browse food items, place orders, and make payments. It features an admin dashboard where administrators can track orders and manage products in real-time. ",
      "technologies": [
        "React",
        "javascript",
        "MongoDB",
        "Express",
        "Nodejs",
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_1
    },
    {
      "title": "Memories",
      "date": "April 2024",
      "description": "Memories is small social media application that allows users to share their memories with friends and family. It features a user-friendly interface.",
      "technologies": [
        "React",
        "javascript",
        "MongoDB",
        "Express",
        "Nodejs",
        "MUI",
        "Redux",
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_2
    },
    {
      "title": "HKT-coffee-export",
      "date": "Dec 2024",
      "description": "HKT-coffee-export was for my private client which is a responsive front-end react project allows users to browse and contact with the seller.",
      "technologies": [
        "React",
        "javascript",
        "CSS"
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_3
    },
    {
      "title": "Amazon-clone",
      "date": "Dec 2023",
      "description": "Amazon-clone is a clone of the popular e-commerce platform Amazon. It features a user-friendly, a shopping cart system, and a payment through Stripe.",
      "technologies": [
        "React",
        "javascript",
        "Firebase",
        "Redux",
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_4
    },
    {
      "title": "Netflix-clone",
      "date": "Oct 2023",
      "description": "Netflix-clone is a clone of the popular streaming platform Netflix. It features a user-friendly interface, a movie browsing system, and live trailer feature",
      "technologies": [
        "React",
        "javascript",
        "TMDB Api",
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_5
    },
    {
      "title": "Evangadi-forum",
      "date": "April 2024",
      "description": "My final project in EVANGAD's 6-month MERN-stack development course. this is EVANGADI's forum which make students ask and answer question tech related topics. ",
      "technologies": [
        "React",
        "javascript",
        "SQL",
        "Express",
        "Nodejs",
        "CSS",
      ],
      "links": {
        "website": "Link not specified",
        "source": "Link not specified"
      },
      "ref": projectRef_6
    },
    
  ]

  return (
    <section id='project' ref={projectSecRef} className='pb-15 px-3 lg:px-[250px] md:px-[50px]'>
      <div className='flex flex-col items-center'>
        <span className='px-4 py-2 bg-white-50 text-black-200 rounded-xl text-2xl font-bold'>My Projects</span>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mt-4'>Check Out My Latest Projects</h2>
        <p className='md:text-3xl font-semibold text-[18px] my-3'>I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 '>
          {
            projects.map((project, index) => (
              <div key={index} ref={project.ref} className='border-2 border-white/50 rounded-2xl '>
                {project?.img ? <img src={project.img} alt={project.title} /> : <div className='w-full rounded-t-2xl h-[250px] flex justify-center items-center bg-white-50'>image</div>}
                <div className='px-4 flex flex-col '>
                  <h3 className='my-2 text-2xl font-bold'>{project.title}</h3>
                  <p className='mb-1 text-[10px] md:text-[16px]'>{project.date}</p>
                  <p className='text-[12px] md:text-[18px] text-white/70'>{project.description}</p>
                  <div className='flex flex-wrap my-2'>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className='text-[12px] md:text-[14px] text-white bg-white/20 px-2 rounded-xl mr-2 my-1'>{tech}</span>
                    ))}
                  </div>
                  <div className='flex justify-end gap-5 items-end py-2'>
                    <a href={project.links.website} target='_blank' rel='noreferrer' className='text-[10px] md:text-[14px] bg-white font-bold rounded-full px-3 py-2 text-black hover:text-black/60'><FaGlobe className='size-8' /></a>
                    <a href={project.links.source} target='_blank' rel='noreferrer' className='text-[10px] md:text-[14px] bg-white text-black font-bold rounded-full px-3 py-2 hover:text-black/60'><FaGithub className='size-8' /></a>
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