import React from 'react'

const Vehiclepanel = (props) => {
  return (
    <div>
        <h3 onClick={()=>{props.setvehiclepanel(false)}} className='text-center p-3 absolute top-0  '><i className=" text-gray-200 text-2xl ri-arrow-down-wide-line"></i></h3>
        <h3 className='font-bold text-xl'>Choose your vehicle</h3>
       <div onClick={() =>{ props.setconfirmridepanel(true), props.setvehiclepanel(false) , props.setvehicletype('auto')} } className='active:border-black border-2 bg-gray-100 rounded-xl w-full flex items-center gap-0 bg-white mt-2 ' >          
          <img className='w-15 h-20 p-1' src='https://thvnext.bing.com/th/id/OIP.vQ2t-i1DksPoYBgqlJS4ZgHaIH?r=0&cb=thvnext&w=840&h=921&rs=1&pid=ImgDetMain'></img>
            <div className='w-1/2 ml-12'>    
                 <h3 className='font-medium text-xl'>UberGo<span><i className="ri-user-fill"></i>4</span></h3>
                 <h5 className='font-semibold'>2 mins away</h5>
                 <p>Affordable, compact rides</p> 
            </div>
            <h2 className='text-2xl font-semibold mr-5'>₹{props.fare.auto}</h2>
       </div>
    <div onClick={() =>{ props.setconfirmridepanel(true), props.setvehiclepanel(false) , props.setvehicletype('car')}} className='active:border-black border-2 bg-gray-100 rounded-xl w-full flex items-center gap-5 bg-white mt-2 ' >          
          <img className='w-15 h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png'></img>
            <div className='w-1/2'>  
                 <h3 className='font-medium text-xl'>UberGo<span><i className="ri-user-fill"></i>4</span></h3>
                 <h5 className='font-semibold'>2 mins away</h5>
                 <p>Affordable, compact rides</p> 
            </div>
            <h2 className='text-2xl font-semibold'>₹{props.fare.car}</h2>
    </div>
    <div onClick={() =>{ props.setconfirmridepanel(true), props.setvehiclepanel(false) , props.setvehicletype('motor')}} className='active:border-black border-2 bg-gray-100 rounded-xl w-full flex items-center gap-10 bg-white mt-2 ' >          
          <img className='w-15 h-20' src='https://th.bing.com/th/id/OIP.znY96OhfmQ9RecEw45FS_AHaE7?w=187&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
            <div className='w-1/2'>  
                 <h3 className='font-medium text-xl'>UberGo<span><i className="ri-user-fill"></i>4</span></h3>
                 <h5 className='font-semibold'>2 mins away</h5>
                 <p>Affordable, compact rides</p> 
            </div>
            <h2 className='text-2xl font-semibold'>₹{props.fare.motor}</h2>
     </div>
</div>
  )
}

export default Vehiclepanel