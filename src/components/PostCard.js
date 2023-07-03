import React from 'react';
import Data from '../data/PostData.json';


function PostCard() {
  return (
    <div className='flex justify-center  flex-wrap lg:flex-row felx-col'>
        {/* Cards */}

        {Data.map((info)=>(
        <div className='lg:w-1/4 sm:w-1/2 w-3/4 h-auto bg-eg1 m-1 rounded-xl border-8 border-eg1' key={info.id}>
            <div className='w-full h-[30vh] bg-eg3 rounded-xl'>
              <img src={info.pic} alt="post_image" className=' object-cover' />
            </div>
            <div className='mx-5 my-2'>
            <div className='text-[5vh] text-eg3 font-headingFont font-semibold'>
              {info.name}
            </div>
              <div className='text-[2vh] w-[90%] text-eg3 font-descFont font-medium mb-5 min-h-[12vh]'>
                {info.description}
              </div>
              {/* Button */}
           <a href={info.link}>
           <button type="button" className='bg-eg3 p-2 rounded-xl text-eg1 font-descFont font-semibold hover:bg-eg2 duration-200'>
            Read More
           </button>
           </a>
            </div>
        </div>
       )) }
        
    </div>
  )
}

export default PostCard
