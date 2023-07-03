import React from 'react';
import graphic from './assets/main_hero.svg';
import {Link} from 'react-scroll';

function Hero() {
  return (
    <div className='w-full bg-epeach text-center flex justify-center mb-10 flex-col ' id="hero">
      <img src={graphic} alt="main_graphic" className='h-[65vh] w-auto'/>
      
      <div className='mx-5'>
        <div className='text-[6vh] text-eg1 font-exclaim'>
            Elevate with Evalia
        </div>
        <div className='text-[3vh] text-eg3 font-descFont font-medium'>
        Where AI meets ethics, privacy, and trust for a better tomorrow.<br/>
        Mission: Our mission is gonna be the discussion and research behind a new term:
        <span className=' font-bold text-eg1'> PROACT </span> 
        </div>
        
        <div className='flex justify-center lg:flex-row flex-col'>

        <Link to="proact" spy={true} smooth={true} offset={-50} duration={500}>
          <button className='bg-eg1 w-3/4 lg:w-auto  rounded-2xl p-1 px-5 m-2 text-epeach text-xl hover:cursor-pointer hover:bg-eg3 duration-200 border-2 border-eg1 hover:border-eg3' type="button">PROACT</button>
          </Link>

          <Link to="team" spy={true} smooth={true} offset={-50} duration={500}>
          <button className='bg-epeach w-3/4 lg:w-auto rounded-2xl p-1 px-5 m-2 text-eg1 border-2 border-eg1 text-xl hover:cursor-pointer hover:text-eg3 hover:border-eg3 duration-200' type="button">The Team</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Hero
