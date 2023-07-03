import React from 'react'
import linkedIn from './assets/linkedIn.svg'
import insta from './assets/insta.svg'
import mail from './assets/mail.svg'
import Arrow from './assets/upArrow.svg'
import twitter from './assets/twitter.svg'


function Footer() {

  return (
    <div className='bg-enavy overflow-auto mt-auto'>
      
        <div className='sm:h-28 h-24  flex justify-center items-center'>
          {/* UpArrow */}
        <div   className='hover:scale-125 duration-200 hover:cursor-pointer' onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>
            <div className='sm:h-14 sm:w-14 h-10 w-10  rounded-full bg-epeach duration-200 mx-5 relative  fill-enavy stroke-enavy '>
                      
             <img src={Arrow} alt="linkedIn" className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[.60] fill-enavy stroke-enavy'/>
                      
            </div>  
        </div>

          {/* LinkedIn */}
        <a href='https://twitter.com/EvaliaOrg01' target='_blank'rel="noreferrer"  className='hover:scale-125 duration-200'>
            <div className='sm:h-14 sm:w-14 h-10 w-10  rounded-full bg-epeach duration-200 mx-5 relative  fill-enavy stroke-enavy '>
                      
             <img src={twitter} alt="linkedIn" className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[.60] fill-enavy stroke-enavy'/>
                      
            </div>  
        </a>

              {/* Insta */}
            <a href='https://www.instagram.com/evalia_org/' target='_blank' rel="noreferrer"  className='hover:scale-125 duration-200'>
            <div className='sm:h-14 sm:w-14 h-10 w-10  rounded-full bg-epeach duration-200 mx-5 relative  fill-enavy stroke-enavy '>
                      
             <img src={insta} alt="Instagram" className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[.90] fill-enavy stroke-enavy'/>
                      
            </div>  
        </a>


          {/* Mail */}
            <a href={'mailto: orgevalia@gmail.com'} target='_blank' rel="noreferrer" className='hover:scale-125 duration-200'>
            <div className='sm:h-14 sm:w-14 h-10 w-10  rounded-full bg-epeach duration-200 mx-5 relative  fill-enavy stroke-enavy '>
                      
             <img src={mail} alt="mail" className='w-auto bg-cover max-w-full absolute top-0 left-0 h-auto scale-[.75] fill-enavy stroke-enavy'/>
                      
            </div>  
        </a>

        </div>

        <div className='text-white text-center items-center text-[2vh] -mt-2'>
        &#169;&nbsp;Evalia
        </div>

    </div>
  )
}

export default Footer
