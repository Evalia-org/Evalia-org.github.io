import React from 'react'
import Data from '../data/BlogData.json';


function Blog() {
  return (
    <div>
      <div className='flex justify-center flex-wrap'>
          {/* Card */}
        
        {Data.map((info)=>(
          <div className='lg:w-2/3 w-3/4 bg-epeach h-auto rounded-xl mt-5 mb-5 border-4 border-epeach  flex flex-col ' key={info.id}>
            {/* image */}
            <div className='bg-eg3 sm:h-[16vh] h-auto w-full rounded-2xl mb-[1vh] overflow-hidden'>
              <img src={info.pic} alt="Blog_image" className=' object-cover'/>
            </div>
            <div className='mx-2'>
           <div className='text-[3.5vh] font-semibold font-headingFont text-eg1 '>
              {info.name}          
            </div>
           <div className='text-[2vh] font-descFont text-eg2 font-semibold'>
              {'by: '+ info.author}
           </div>
           <div>
           <div className='text-[2vh] p-2 font-descFont text-eg2 font-semibold border-2 border-eg2 rounded-xl m-2 min-h-[8vh] ' >
              {info.description}
           </div>
           {/* Button */}
           <a href={info.link} className='m-2'>
           <button type="button" className='bg-eg3 p-2 rounded-xl text-eg1 font-descFont font-semibold hover:bg-eg2 duration-200'>
            Read More
           </button>
           </a>
           </div>

           </div>
          </div>

          )) }
      </div>
    </div>
  )
}

export default Blog
