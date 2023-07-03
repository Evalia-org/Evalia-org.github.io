import React from 'react';
import globe from './assets/globe2.svg';
import '../App.css'

function Proact() {
  return (
    <div className='bg-enavy text-center relative mb-10'  id='proact'>
      <div className='flex justify-center flex-col -z-10 '>
        <img src={globe} alt=".." className='h-[60vh] w-auto relative' id="globe" />
        <div>
        <div className='text-epeach lg:text-[11vh] text-[8vh] font-headingFont z-0 bg-enavy font-semibold h-[35vh] w-full m-0 absolute  top-[30vh] '>
        PROACT
        </div>
        <div className='flex lg:flex-row flex-col justify-center flex-wrap items-center -mt-24'>   
            <div className=' m-10 h-auto lg:w-1/6 w-3/4 flex flex-wrap justify-center '>
              <div className='text-eg2 font-semibold font-exclaim text-[5vh] z-10'>Privacy</div>
              <div className='text-eg3 font-descFont text-[3vh] font-semibold z-10 '>
              AI-powered encryption, securing your data like a digital fortress
              </div>
            </div>

            <div className=' m-10 h-auto lg:w-1/4 w-3/4 flex flex-wrap justify-center'>
              <div className='text-eg2 font-semibold font-exclaim text-[5vh] z-10'>Responsibility</div>
              <div className='text-eg3 font-descFont text-[3vh] font-semibold tracking-wider z-10'>
              AI with a moral compass, putting people and the planet before profit.
              </div>
            </div>

            <div className=' m-10 h-auto lg:w-1/6 w-3/4 flex flex-wrap justify-center'>
              <div className='text-eg2 font-semibold font-exclaim text-[5vh] z-10'>Openess</div>
              <div className='text-eg3 font-descFont text-[3vh] font-semibold tracking-wider z-10'>
              AI with an open heart, sharing knowledge and embracing diverse minds.
              </div>
            </div>
            
            <div className=' m-10 h-auto lg:w-1/4 w-3/4 flex flex-wrap justify-center'>
              <div className='text-eg2 font-semibold font-exclaim text-[5vh] z-10'>Accountability</div>
              <div className='text-eg3 font-descFont text-[3vh] font-semibold tracking-wider z-10'>
              Holding AI's feet to the fire, making sure it owns up to its actions.
              </div>
            </div>

            <div className=' m-10 h-auto lg:w-1/6 w-3/4 flex flex-wrap justify-center'>
              <div className='text-eg2 font-semibold font-exclaim text-[5vh] z-10'>Compliance</div>
              <div className='text-eg3 font-descFont text-[3vh] font-semibold tracking-wider z-10'>
              AI meets regulations head-on, effortlessly keeping you on the right side of the law.              
              </div>
            </div>
            
            <div className=' m-10 h-auto lg:w-1/4 w-3/4 flex flex-wrap justify-center'>
              <div className='text-eg2 font-semibold font-exclaim text-[5vh] z-10'>Trust</div>
              <div className='text-eg3 font-descFont text-[3vh] font-semibold tracking-wider z-10'>
              AI you can bet your bytes on, earning your trust with every reliable and accurate prediction.              
              </div>
            </div>
      </div> 
        </div>
      </div>

       
    </div>
  )
}

export default Proact
