import React from 'react'
import ResearchCard from '../components/ResearchCard'
import Data from '../data/ResearchData.json'



function Research() {

  return (
    <div>
      <div className='text-eg1 bg-epeach lg:text-[11vh] text-[8vh] font-headingFont z-0 font-semibold  w-full text-center py-10'>
      RESEARCH ARTICLES
        </div>
        
        <ResearchCard data={Data}  />
      
    </div>
  )
}

export default Research
