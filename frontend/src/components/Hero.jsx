import React from 'react'
import hero from '../assets/Images/hero.jpg';

const Hero = () => {
  return (
    <div>
        <div className="">
            <img src={hero} alt="" className='size-3/5 mx-auto my-10'/>
        </div>
        <div className="pl-20 space-y-3 max-w-sm">
            <h1 className='text-black text-3xl font-semibold'>Online Experiences</h1>
            <p className='text-xl font-light'>Join unique interactive activities led by one-of-a-kind hosts-all without living home</p>
        </div>
    </div>
  )
}

export default Hero