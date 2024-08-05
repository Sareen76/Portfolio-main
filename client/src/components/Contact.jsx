import React from 'react'

function Contact() {
    return (
        <div className="Contact w-full flex flex-col items-center">
            <h1 className='text-center mb-2 font-bold text-3xl'>Contact Me</h1>

            <div className="ContactFields flex lg:w-3/4 sm:w-full p-8 flex-wrap items-center justify-center">
                <div className="input w-full flex gap-2 mb-3 md:flex-row sm:flex-col">
                    <input
                        type="text"
                        placeholder='Name'
                        className='lg:w-1/2 sm:w-full md:w-1/2 p-3 text-black focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        placeholder='Email'
                        className='lg:w-1/2 sm:w-full md:w-1/2 p-3 text-black focus:outline-none focus:ring-0'
                    />
                </div>
                <textarea name="message" placeholder='Message' id="" className='w-full h-[35vh] p-3 text-black focus:outline-none focus:ring-0 resize-none'></textarea>

                <button className='btn bg-blue-500 p-2 pl-5 pr-5 rounded-lg mt-5'>Send</button>
            </div>
        </div>
    )
}

export default Contact