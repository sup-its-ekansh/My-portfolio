import React from 'react'

export default function footer() {
  return (
    <div id="contact"className=' flex flex-col'>
        <div className='flex text-white text-6xl mb-16 justify-center'>
            <h1>Contact</h1>

        </div>
        <div className='flex flex-col text-indigo-200 pl-12 text-xl justify-center align-start'>
        <span><p>Address: Faridabad, Haryana, 121004</p></span>
        <span><p>gargekanshekanshgarg@gmail.com</p></span>
        <span> <p>7303500849</p></span>
        </div>
        <div className='flex flex-row text-white justify-evenly ml-82 mr-82 mt-16 mb-8'>
            <div className='flex hover:border-b-orange-400 hover:border-b-2 hover:text-blue-100 hover:pb-3 '>
                <a className="font-bold text-xl" href="https://www.linkedin.com/in/ekansh-garg-53b71720b/"> LinkedIn</a>
            </div>
            <div className='flex  text-white justify-center hover:border-orange-400 hover:border-b-2 hover:py-4'>
                <a className='text-xl font-bold' href="https://github.com/sup-its-ekansh"> Github</a>
            </div>
                    
        </div>
      
    </div>
  )
}