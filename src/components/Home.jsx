import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import {fadeIn} from '../variants'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/*container*/}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Maharani J</h1>
        {/* <h2 className='text-4xl sm"text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2> */}
        <motion.div 
             variants={fadeIn('up',0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
            className='text-4xl sm:text-7xl  text-[#8892b0] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white text-4xl mr-4'>I am a </span>
              {/* <TypeAnimation sequence={[ */}
                {/* // 'MERN Stack Developer',
                // 1000, */}

                <TypeAnimation
  sequence={[
    'M', // Types 'M'
    100, // Waits 1s
    'ME', // Deletes 'M' and types 'ME'
    100, // Waits 1s
    'MER', // Deletes 'ME' and types 'MER'
    100, // Waits 1s
    'MERN', // Deletes 'MER' and types 'MERN'
    100, // Waits 1s
    'MERN ', // Types ' ' without deleting 'MERN'
    100, // Waits 1s
    'MERN S', // Types 'S' without deleting 'MERN '
    100, // Waits 1s
    'MERN ST', // Types 'T' without deleting 'MERN S'
    100, // Waits 1s
    'MERN STA', // Types 'A' without deleting 'MERN ST'
    100, // Waits 1s
    'MERN STAC', // Types 'C' without deleting 'MERN STA'
    100, // Waits 1s
    'MERN STACK', // Types 'K' without deleting 'MERN STAC'
    100, // Waits 1s
    'MERN STACK ', // Types ' ' without deleting 'MERN STACK'
    100, // Waits 1s
    'MERN STACK D', // Types 'D' without deleting 'MERN STACK '
    100, // Waits 1s
    'MERN STACK DE', // Types 'E' without deleting 'MERN STACK D'
    100, // Waits 1s
    'MERN STACK DEV', // Types 'V' without deleting 'MERN STACK DE'
    100, // Waits 1s
    'MERN STACK DEVE', // Types 'E' without deleting 'MERN STACK DEV'
    100, // Waits 1s
    'MERN STACK DEVEL', // Types 'L' without deleting 'MERN STACK DEVE'
    100, // Waits 1s
    'MERN STACK DEVELO', // Types 'O' without deleting 'MERN STACK DEVEL'
    100, // Waits 1s
    'MERN STACK DEVELO', // Types 'P' without deleting 'MERN STACK DEVEL'
    100, // Waits 1s
    'MERN STACK DEVELOP', // Types 'E' without deleting 'MERN STACK DEVELO'
    100, // Waits 1s
    'MERN STACK DEVELOPE', // Types 'R' without deleting 'MERN STACK DEVELOP'
    100, // Waits 1s
    'MERN STACK DEVELOPER',
    100,
    () => {
      console.log('Sequence completed'); // Place optional callbacks anywhere in the array
    }
  ]} 
                   wrapper="span" className='text-accent' cursor={true} repeat={Infinity}
                   style={{  display: 'inline-block' }}/>
               </motion.div>
        <p className='text-[#8892b0] text-2xl py-4 max-w-[700px]'>I'm a full-stack developer specializing in building(and occasional designing)
        exceptional digital experiences. Currently, I'm focused on bulding responsive full-stack web applications.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
                </span></button>
        </div>
       </div>
    </div>
  )
}

export default Home