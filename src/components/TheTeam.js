import React from 'react';
import globe2 from './assets/teamGlobe.svg';
import '../App.css'
import TeamCards from './TeamCards';

function TheTeam() {
  return (
    <div className='bg-epeach my-10 text-center relative'  id='team'>
         <div className='flex justify-center flex-col -z-10 '>
        <img src={globe2} alt=".." className='h-[40vh] w-auto relative' id="globe2" />
        <div>
        <div className='lg:text-[11vh] text-[8vh] font-headingFont font-semibold w-full bg-transparent absolute top-[12vh]'>
         MEET THE TEAM
        </div>
        </div>
        </div>

        <TeamCards />
      
    </div>
  )
}

export default TheTeam
