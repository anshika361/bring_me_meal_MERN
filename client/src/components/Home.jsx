import { motion } from 'framer-motion'
import React from 'react'
import { Delivery, HeroBg } from '../assets';
import { buttonClick } from '../animations';


const Home = () => {
  return <motion.div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
    <div className="flex flex-col items-start justify-start gap-6">
        <div className='px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full'>
            <p className='text-lg font-semibold text-orange-500'>Free Delivery</p>
            <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md'>
            <img src={Delivery} alt="" className='w-full h-full object-contain' />
            </div>
        </div>
        <p className='text-[40px] text-headingColor md:text-[72px] font-san font-extrabold tracking-wider'>The Fastest Delivery in <span className='text-orange-600 '>Your City</span></p>
        <p className='text-textColor text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia! Placeat, iste vitae cupiditate iusto adipisci, natus possimus ab consequatur facilis ad omnis magnam corporis dignissimos, perferendis nemo quibusdam incidunt.</p>
        <motion.button {...buttonClick} className='bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-black text-base font-semibold'>Order Now</motion.button>
    </div>
    <div className='py-2 flex-1 flex items-center justify-end relative'>
        <img className="absolute top-0 right-0 md:-right-12 w-full h-420 md:w-auto md:h-650" src={HeroBg} alt="" />
    </div>
  </motion.div>
  
};

export default Home;