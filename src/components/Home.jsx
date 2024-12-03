import React from 'react'
import pic from "../../public/profile.jpg"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
     <div name="Home"  className='max-w-screen-2xl container ms-auto px-4  md:px-20  '>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-16 md:mt-40 space-y-2 order-2 md:order-1'>
      <span className='text-xl '>Welcome In My Feed </span>
        <div className='flex  space-x-1 text-xl md:text-4xl'>
          <h1 className='font-semibold'>Hello,I'm a</h1>  
         {/*<span className='text-red-700 font-bold'>Developer</span>*/}
         <ReactTyped
          className=' text-red-700 font-bold  '
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
       </div>
      
       <br /> 
        <p className='text-sm md:text-m text-justify'>Aspiring software developer skilled in React.js and basic knowledge of Spring Boot. Eager to apply skills inbuilding responsive, user-friendly applications and contribute to innovative projects in a dynamic environment that fosters learning and growth</p>
      <br />
      {/*social media icons*/}
      <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
      <div className='space-y-2'>
         <h1 className='font-bold text-center'>Available on</h1>
         <ul className='flex space-x-5'>
          <li>
             <a href="https://github.com/sourabhnagar70" target="_blank">
             <FaGithubSquare className='text-2xl cursor-pointer' />
             </a>
             </li>
             <li>
               <a href="https://www.linkedin.com/in/sourabh-nagar-524211291/" target="_blank">
               <FaLinkedin className='text-2xl cursor-pointer'/>
               </a>
                 </li>
               <li>
               <a href="https://x.com/sourabhnagar70"target="_blank">
                <FaSquareXTwitter className='text-2xl cursor-pointer' />
                </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sourav_nagar_27/" target="_blank">
                   <FaInstagramSquare className='text-2xl cursor-pointer' />
                   </a>
                     </li>
         </ul>
        </div>
         <div className='space-y-2'>
         <h1 className='font-bold text-center'>Currently Working on</h1>
         <div className='flex space-x-5'>
         <FaReact   className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}'    />
         <SiMongodb  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}'   />
         <SiSpringboot className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}' />
         <FaNodeJs   className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px'    />
         </div>  

         </div>
      </div>
      </div>
      <div  className="md:w-1/2 md:ml-48 md:mt-36 mt-20  object-cover shadow-lg  order-1">
      <img 
      src={pic}
       className='rounded-full md:w-[450px] md:h-[450px]  ' alt="" />
      </div>
      </div>
      <br />
      <hr />
    </div>
     
  )
}

export default Home



