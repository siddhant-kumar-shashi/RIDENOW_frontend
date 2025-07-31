import React from 'react'

const Lookingfordriver = (props) => {
  return (
    <div>
        <h3 onClick={()=>{props.setvehiclefound(false)}} className='text-center p-3 absolute top-0  '><i className=" text-gray-200 text-2xl ri-arrow-down-wide-line"></i></h3>
        <h3 className='font-bold text-xl'>Looking for Driver</h3>
        <div className=' flex justify-center flex-col items-center rounded-full  '>
            <div className='m-6'>
                <img className=' bg-blue-100 rounded-full w-15 h-20' src='https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png'></img>
            </div>
            <div className='w-full mt-5'>
                 <div className='flex  items-center justify-start gap-5 p-3 border-b-2'>
                 <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center'><i className="ri-map-pin-line"></i></h2>
               <div>
                  <h3 className='font-bold text-xl'>562/11-A</h3>
                  <p className='text-sm -mt-1' >{props.pickup}</p>
               </div>
                 </div>
               <div className='flex items-center justify-start gap-5 p-3 border-b-2'>
              <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center '><i className="ri-rectangle-fill"></i></h2>
              <div>
                 <h3 className='font-bold text-xl'>Third Wave Coffee</h3>
                  <p className='text-sm -mt-1'>{props.destination}</p>
              </div>
                 </div>
                <div className='flex items-center justify-start gap-5 p-3 border-b-2'>
              <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center'><i className="ri-wallet-fill"></i></h2>
              <div>
                 <h3 className='font-bold text-xl'>#103.20</h3>
                  <p className='text-sm -mt-1'>{props.fare[props.vehicleType]}</p>
              </div>
                 </div>
            </div>
        </div>
        
    </div>
  )
}

export default Lookingfordriver