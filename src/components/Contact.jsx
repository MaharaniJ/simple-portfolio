import React from 'react'
import { motion } from "framer-motion"
import {fadeIn} from '../variants'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/03f7903e-290d-48b7-9915-9aa1b7082dbe" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <motion.p
                 variants={fadeIn('up',0.3)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once:false, amount:0.7}} 
                className='sm:text-right text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</motion.p>
                <motion.p 
                 variants={fadeIn('right',0.3)}
                 initial='hidden'
                 viewport={{once:false,amount:0.3}}
                 whileInView={'show'}
                className='text-gray-300 py-4 text-1xl '> Submit the form below or shoot me an email - jeyamaha98<span className='font-bold text-1xl'>@</span>gmail.com</motion.p>
            </div>
        
           <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}
export default Contact