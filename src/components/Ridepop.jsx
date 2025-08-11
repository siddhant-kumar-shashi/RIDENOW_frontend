import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Ridepop = (props) => {
  //  console.log('inside ridepop', {props.ride?.fare})
  return (
    <div>
        
        <h3 onClick={()=>{props.setridepoppanel(false)}} className='text-center p-3 absolute top-0  '><i className=" text-gray-200 text-2xl ri-arrow-down-wide-line"></i></h3>
        <h3 className='text-2xl font-semibold mb-3'>New Ride Available!</h3>
        <div className='flex justify-between bg-yellow-300 p-3 rounded-full items-center'>
            <div className='flex items-center gap-3'>
                <img className='rounded-full w-10 h-12 object-cover' src='https://th.bing.com/th/id/OIP.Wwkj6mz7ZUkF8pBMY7UvIwHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
                <h3 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname }</h3>
            </div>
            <h5 className='text-lg font-semibold '>{props.ride.distance}</h5>
        </div>
        <div className=' flex justify-center flex-col items-center rounded-full  '>
          
            <div className='w-full mt-5'>
                 <div className='flex  items-center justify-start gap-5 p-3 border-b-2'>
                 <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center'><i className="ri-map-pin-line"></i></h2>
               <div>
                  <h3 className='font-bold text-xl'>562/11-A</h3>
                  <p className='text-sm -mt-1' >{props.ride?.pickup}</p>
               </div>
                 </div>
               <div className='flex items-center justify-start gap-5 p-3 border-b-2'>
              <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center '><i className="ri-rectangle-fill"></i></h2>
              <div>
                 <h3 className='font-bold text-xl'>Source</h3>
                  <p className='text-sm -mt-1'>{props.ride?.pickup}</p>
              </div>
                 </div>
                <div className='flex items-center justify-start gap-5 p-3 border-b-2'>
              <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center'><i className="ri-wallet-fill"></i></h2>
              <div>
                 <h3 className='font-bold text-xl'>₹{props.ride?.fare}</h3>
                  <p className='text-sm -mt-1'>{props.ride?.destination}</p>
              </div>
                 </div>
            </div>
            <div> 
                        <button onClick={() =>{
                    //      props.setvehiclefound(true)
                          props.setconfirmRidePopupPanel(true)
                          props.confirmRide()
                      }} className='bg-green-600 text-xl w-full text-white mt-5 p-2 rounded-lg'>Accept</button>
                    
                      <button onClick={() =>{
                          props.setridepoppanel(false)
                      }} className='bg-gray-300 text-xl w-full text-gray-700 mt-5 p-2 rounded-lg'>Ignore</button>
            </div>
        </div>
        
    </div>
  )
}

export default Ridepop