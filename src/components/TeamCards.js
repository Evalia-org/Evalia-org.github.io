import React from 'react'
import linkedIn from './assets/linkedIn.svg'
import insta from './assets/insta.svg'
import mail from './assets/mail.svg'
import TeamData from '../data/Members.json';


function TeamCards() {
  return (
    <div className='flex justify-center  flex-wrap lg:flex-row felx-col'>
      {/* Cards */}

    {TeamData.map((info)=>(
       <div  className='lg:w-1/4 sm:w-[45%] w-3/4 h-40 bg-eg2  rounded-2xl m-10 border-8 border-eg3 relative' key={info.id}>

       {/* image */}
     <div className='rounded-full md:h-24 md:w-24  w-[4rem] h-[4rem]   border-2 border-primary  overflow-hidden object-center relative top-[10%] left-[5%]'>
                <img src={info.pic} alt=" " className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[1.15]'/>
     </div>
        {/* NameAndQuote */}
        <div className='  text-2xl font-bold absolute top-[15%] left-[35%] text-enavy font-headingFont '>
           {info.name}
       </div>
       <div className='text-md absolute top-[35%] left-[35%] text-enavy font-exclaim '>
           {`" `+info.quote+` "`}
       </div>


       {/* Socials*/}
       <div className='text-xl absolute bottom-0 right-0 text-eg1 font-exclaim bg-enavy h-12 w-2/3 rounded-2xl flex justify-evenly items-center align-middle'>


        
                  {/* LinkedIn */}
                 <a href={info.linkedIn} target='_blank'rel="noreferrer" className='hover:scale-125 duration-200'>
                 <div className='rounded-full h-8 w-8  overflow-hidden object-center relative top-[10%] left-[5%]  bg-eg2 hover:bg-eg3 '>
                         <img src={linkedIn} alt="linkedIn" className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[.60] fill-enavy stroke-enavy'/>
               </div>
               </a>
                  {/* Instagram */}
               <a href={info.instagram}  target='_blank'rel="noreferrer" className='hover:scale-125 duration-200'>
               <div className='rounded-full  h-8 w-8   overflow-hidden object-center relative top-[10%] left-[5%]  bg-eg2 hover:bg-eg3'>
                         <img src={insta} alt="Instagram " className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[.90]  fill-enavy stroke-enavy'/>
               </div>
               </a>
                  {/* Email */}
               <a href={`mailto:`+info.email} target='_blank'rel="noreferrer" className='hover:scale-125 duration-200'>
               <div className='rounded-full  h-8 w-8  overflow-hidden object-center relative top-[10%] left-[5%]  bg-eg2 hover:bg-eg3'>
                         <img src={mail} alt="email" className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[0.75] fill-none stroke-enavy'/>
               </div>
               </a>      
       </div>
     </div>

    ))       
    }    
    </div>
  )
}

export default TeamCards
