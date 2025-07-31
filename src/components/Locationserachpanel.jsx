import React, { useState } from 'react'

const Locationserachpanel = (props) => {
   const location = props.suggestion || []  //if there is no props.suggeation then we put []
   const [isforpick , setisforpick] = useState(true)
  return (
    <div>
          {/* This is just a sample data */}   
   {
      location.map(function(element, index) {
       return <div
        key={index}
       onClick={() => {
        if(isforpick){
           props.setpickup(element)
           setisforpick(false)
        }else{
          props.setdestination(element)
          setisforpick(true)
        }
         
       }}
        className='flex active:border-black justify-start items-center p-3 border-2 mt-2 rounded-xl ' >
         <h2 className='bg-gray-200 rounded-full p-2 h-8 w-8 flex items-center mr-3'><i className="ri-map-pin-line"></i></h2>
         <h4 className='font-medium'>{element}</h4>
      </div>
     })
   }
    </div>
  )
}

export default Locationserachpanel