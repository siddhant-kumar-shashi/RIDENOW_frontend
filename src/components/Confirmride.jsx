{/*

import React , {useState} from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link}  from 'react-router-dom'


const Confirmridepopup = (props) => {
  const [otp , setotp] = useState('')
  const submiHandler = (e) => {
    e.preventDefault()
}
  return (
    <div> 
        <h3 onClick={()=>{props.setconfirmRidePopupPanel(false)}} className='text-center p-3 absolute top-0  '><i className=" text-gray-200 text-2xl ri-arrow-down-wide-line"></i></h3>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your ride </h3>
        <div className=' flex justify-center flex-col items-center rounded-full  '>
            
            <div className='w-full mt-5'>
                 <div className='flex  items-center justify-start gap-5 p-3 border-b-2'>
                 <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center'><i className="ri-map-pin-line"></i></h2>
               <div>
                  <h3 className='font-bold text-xl'>562/11-A</h3>
                  <p className='text-sm -mt-1' >chamundi hill, Bengaluru, karanataka</p>
               </div>
                 </div>
               <div className='flex items-center justify-start gap-5 p-3 border-b-2'>
              <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center '><i className="ri-rectangle-fill"></i></h2>
              <div>
                 <h3 className='font-bold text-xl'>Third Wave Coffee</h3>
                  <p className='text-sm -mt-1'>chamundi hill, Bengaluru, karanataka</p>
              </div>
                 </div>
                <div className='flex items-center justify-start gap-5 p-3 border-b-2'>
              <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center'><i className="ri-wallet-fill"></i></h2>
              <div>
                 <h3 className='font-bold text-xl'>#103.20</h3>
                  <p className='text-sm -mt-1'>chamundi hill, Bengaluru, karanataka</p>
              </div>
                 </div>
            </div>
            <div className='mt-6 w-full' >
                  <form onSubmit={(e) => {
                      submiHandler(e)
                  }}>
                    <input value={otp} onChange={(e) => setotp(e.target.value)}  type='text' placeholder='Enter OTP' className=' bg-gray-200 px-10 font-mono py-2 mt-2 w-full rounded text-base'/>
                    <Link to='/captain-riding' className='bg-green-400 flex justify-center text-xl w-full text-white mt-5 p-2 rounded-md'>confirm</Link>
                 
                  <button onClick={() =>{
                      props.setconfirmRidePopupPanel(false)
                      props.setridepoppanel(false)
                  }} className='bg-red-500 text-xl w-full text-white mt-5 p-2 rounded-md'>cancel</button>
                  
                  </form>
            
            </div>
        </div>
        
    </div>
  )

}

export default Confirmridepopup
*/}

import React from 'react'

const Confirmride = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setconfirmridepanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setvehiclefound(true)
                    props.setconfirmridepanel(false)
                    console.log('confirm-ride-button0')
                    props.createRide()
              //      console.log('confirm-ride-button1')
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
            </div>
        </div>
    )
}

export default Confirmride