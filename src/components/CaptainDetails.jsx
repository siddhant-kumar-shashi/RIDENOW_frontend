import React from 'react'

const CaptainDetails = (props) => {
  return (
    <div>
        <div className='flex items-center'>
              <img className='w-16' src='https://t4.ftcdn.net/jpg/01/88/36/45/360_F_188364539_a9ymnQnUOIvio7pisoYdaX9yQTdZBuCb.jpg'></img>
              <div>
                <h3 className='font-semi-bold'>{props.captain.fullname.firstname}</h3>
                <p className='text-gray-500'>Basic level</p>
              </div>
           </div>
           <div className='flex bg-yellow-400 p-10 justify-between '>
               <div className=''>
                   <i className="ri-timer-2-line"></i>
                   <h1>10.2</h1>
                   <p className='text-gray-400'>HOURS ONLINE</p>
               </div>
               <div className=''>
                   <i className="ri-timer-2-line"></i>
                   <h1>20 KM</h1>
                   <p className='text-gray-400' >TOTAL DISTANCE</p>
               </div>
               <div className=''>
               <i className="ri-timer-2-line"></i>
                   <h1>20 KM</h1>
                   <p className='text-gray-400' >TOTAL DISTANCE</p>
               </div>
           </div>
        </div>
  )
}

export default CaptainDetails