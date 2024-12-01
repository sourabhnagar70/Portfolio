import React from 'react'

function Contact() {
  return (
    <>
    <div name="contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-4 '>Contact me </h1>
      <span>Please fill out the form below to contact me </span>
      <div className='flex flex-col items-center justify-center mt-5'>
        <form action='https://getform.io/f/brooplma' method="POST" className='bg-slate-200 w-54 md:w-96 px-8 py-6 rounded-xl '> 
          <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 ' >
            FullName
            </label>
            <input 
              className='shadow rounded-lg apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
               id='name'
               name="name"
              type="text" 
              placeholder=' Enter Your FullName'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 ' >
            Email Address
            </label>
            <input 
              className='shadow rounded-lg apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none shadow-outline'
               id='name'
               name="email"
              type="text" 
              placeholder=' Enter Your email address'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 ' >
            Message
            </label>
            <textarea 
              className='shadow rounded-lg apperance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
               id='name'
               name="message"
              type="text" 
              placeholder=' Enter Your Query'
            />
          </div>
          <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
        </form>
      </div>
      </div>
      </>
  )
}

export default Contact
