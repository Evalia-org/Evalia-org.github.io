import React from 'react'
import Logo from './assets/Evalialogo.png'
import { Link } from 'react-router-dom';


function Navbar() {
  const [toggle, settoggle] = React.useState('hidden')

const prop=` w-full md:block md:w-auto ${toggle}`
 return (
 <div className=' overflow-clip pb-[4.5rem] font-custom relative font-headingFont bg-enavy'> 
<nav  className="px-2  sm:px-4 fixed top-0 left-0 right-0 z-20 overflow-hidden bg-enavy text-white  m-0">
 <div className="container flex flex-wrap items-center justify-between mx-auto mt-2">

   <Link to="/">
       <button>
       <img src={Logo} className=" w-auto sm:h-14 h-10 flex justify-center mx-5" alt="EvaliaLogo" />
       </button>
   </Link>

   <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 ml-3 text-md text-highlight  rounded-lg md:hidden hover:bg-eg3 focus:outline-none focus:ring-2 focus:ring-secondary font-light" aria-controls="navbar-default" aria-expanded="false" onClick={ ()=>{toggle==='hidden'?settoggle(' '):settoggle('hidden') }} 
   >
     
     <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Hamburger_LG"> <path id="Vector" d="M3 17H21M3 12H21M3 7H21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
   </button>

   <div className={prop} id="navbar-sticky">
     <ul className="flex flex-col md:flex-row md:space-x-10 md:text-sm md:font-light md:border-0 px-16 ">
     <li id="nav-item">

         <Link to="/blogs" className=" md:text-lg block py-2 pl-3 pr-4 text-highlight rounded  md:border-0 md:p-0">
           <button className='hover:text-eg2'>
           Blogs
           </button>
           </Link>
       </li>
       <li id="nav-item">

         <Link to="/posts" className=" md:text-lg  block py-2 pl-3 pr-4 text-highlight rounded  md:border-0 md:p-0">
           <button className='hover:text-eg2'>
           Posts
           </button>
           </Link>
       </li>
       <li id="nav-item">

         <Link to="/research" className="  md:text-lg  block py-2 pl-3 pr-4 text-highlight rounded  md:border-0 md:p-0">
           <button className='hover:text-eg2'>
           Research
           </button>
           </Link>
       </li>
       
     
     </ul>
   </div>

 </div>
</nav>
   </div>
 )
}

export default Navbar
