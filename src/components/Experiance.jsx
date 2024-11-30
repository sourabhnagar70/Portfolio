import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import JavaScript from "../../public/javascript.png"
import java from "../../public/java.png"
import oracle from "../../public/oracle.png"
import spring from "../../public/spring.png"
import springboot from "../../public/springBoot.jpg"
function Experiance() {
     const cardItem = [
      {
      id : 1,
      logo:html,
      name : "HTML"
      },
      {
        id : 2,
        logo:css,
        name : "CSS"
        },
      {
        id : 3,
        logo: JavaScript,
        name : "JavaScript"
        },
        {
          id : 4,
          logo: java,
          name : "Java"
          },
          {
            id : 5,
            logo: oracle,
            name : "Oracle"
            },
            {
              id : 6,
              logo: spring,
              name : "Spring"
              },
              {
                id : 7,
                logo: springboot,
                name : "SpringBoot"
                }
     ]
  return (
    <div className='max-w-screen-2xl container ms-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
        <span className=''> I've more than 2 years of experience in below technologies</span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
         {
          cardItem.map(({id,logo,name}) => (
             <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300'
              key={id}>

                <img
                 src={logo} className='w-[150px] rounded-full ' 
                alt="" />
                <div>
                  <div className=''> {name}</div>
                  
                </div>
                
              </div>
          ))
         }
        </div>
      
      </div>
    
    </div>
  )
}

export default Experiance
