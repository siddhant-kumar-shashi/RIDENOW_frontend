import React, { useState , useContext } from 'react'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import 'remixicon/fonts/remixicon.css'
import Locationserachpanel from '../components/Locationserachpanel'
import Vehiclepanel from '../components/Vehiclepanel'
import Confirmride from '../components/Confirmride'
import Lookingfordriver from '../components/Lookingfordriver'
import WaitingforDriver from '../components/WaitingforDriver'
import axios from 'axios'
 import { SocketContext } from '../context/Socketcontext'
import { UsercontextData } from '../context/Usercontext'
import { useEffect } from 'react'
import LiveTracking from './Livetracking'

const Home1 = () => {
  const [pickup , setpickup] = React.useState('')
  const [destination , setdestination] = React.useState('')  
  const [panelopen , setpanelopen] = React.useState(false)
  const panelref = React.useRef(null)
  const panelCloseRef = React.useRef(null)
  const backref = React.useRef(null)
  const logoref = React.useRef(null)
  const [vehiclepanel , setvehiclepanel] = React.useState(false)
  const vehiclepanelref = React.useRef(null)
  const [Confirmridepanel , setconfirmridepanel] = React.useState(false)
  const Confirmridepanelref = React.useRef(null)
  const [vehiclefound , setvehiclefound] = React.useState(false)
  const vehiclefoundref = React.useRef(null)
  const [waitingfordriver , setwaitingfordriver] = React.useState(false)
  const [suggestion , setsuggestion ] = useState('')
  const waitingfordriverref = React.useRef(null)
  const [fare , setfare] = useState({})
  const [vehicletype , setvehicletype] = useState('')
  const [ride , setride] = useState(null)
  const submithadler = (e) => {
    e.preventDefault()
  }

  
    const { socket } = useContext(SocketContext)
    const {  user  } = useContext(UsercontextData)

    useEffect(() => {
          console.log("inside home " , user._id)
          socket.emit('join' , {
            userId: user._id ,
            userType: 'user'
          })
        } , [user])

  useGSAP(function(){
    if(panelopen){
    gsap.to(panelref.current,{
      height:'70%'
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
    gsap.to(backref.current,{  //This is used to hide the background image when the panel is open
      opacity:0
    })
    gsap.to(logoref.current,{  //This is used to hide the logo image when the panel is open
      opacity:0
    })
  } else{
    console.log(panelopen)
    gsap.to(panelref.current,{
      height:'0%'
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
    gsap.to(backref.current,{  
      opacity:1
    })
    gsap.to(logoref.current,{  
      opacity:1
    })
  }
  }, [panelopen])

  useGSAP(function(){
    if(vehiclepanel){
   //   console.log('sid1')
      gsap.to(vehiclepanelref.current,{
        transform:'translateY(0%)',
      })
    }else{
   //   console.log('sid2')
      gsap.to(vehiclepanelref.current,{
        transform:'translateY(100%)',
      })
    }
  } , [vehiclepanel])
 
  useGSAP(function(){
    if(Confirmridepanel){
   //   console.log('sid1')
      gsap.to(Confirmridepanelref.current,{
        transform:'translateY(0%)',
      })
    }else{
 //     console.log('sid2')
      gsap.to(Confirmridepanelref.current,{
        transform:'translateY(100%)',
      })
    }
  } , [Confirmridepanel])

  useGSAP(function(){
    if(vehiclefound){
   //   console.log('sid1')
      gsap.to(vehiclefoundref.current,{
        transform:'translateY(0%)',
      })
    }else{
  //    console.log('sid2')
      gsap.to(vehiclefoundref.current,{
        transform:'translateY(100%)',
      })
    }
  } , [vehiclefound])

  useGSAP(function(){
    if(waitingfordriver){
 //     console.log('sid1')
      gsap.to(waitingfordriverref.current,{
        transform:'translateY(0%)',
      })
    }else{
  //    console.log('sid2')
      gsap.to(waitingfordriverref.current,{
        transform:'translateY(100%)',
      })
    }
  } , [waitingfordriver])

  const findtrip = async() =>{
    const response = await axios(`${import.meta.env.VITE_BASE_URL}/ride/get-fare`,{
      params: {pickup , destination},
      headers:{
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   })
    setfare(response.data)
    setvehiclepanel(true)
    setpanelopen(false)
  }

 async function createRide(){
  try{
    console.log('Inside createride fun')
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/create` , {
        vehicleType: vehicletype,
        pickup: pickup,
        destination: destination
      } , {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    }catch(err){
      console.log('Unable to create the ride')
      console.log(err)
    }

  }

  socket.on('ride-confirmed', ride => {
    console.log('Inside ride confirmed')
        setvehiclefound(false)
        setwaitingfordriver(true)
        setride(ride)
    })

      socket.on('ride-started', ride => {
        console.log("ride")
        setwaitingfordriver(false)
        navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
    })

  return (
    <div  className='h-screen relative overflow-hidden'>
       <img ref={logoref} className=' absolute w-15 h-20 ' src='https://logospng.org/download/uber/logo-uber-4096.png' />  
       <div className='h-screen w-screen top-0'>
          <LiveTracking/>
       </div>
       <div className=' absolute h-screen flex flex-col justify-end top-0 w-full'>
          <div className=' relative p-5 h-[30%] '>
              <h5 ref={panelCloseRef}  onClick={()=> {
                setpanelopen(!panelopen)
              }} className='absolute top-1 left-3 text-xl'> 
                 <i className="ri-arrow-down-wide-line"></i> 
              </h5>
            <h3 className='font-semibold text-xl' >Find a trip</h3>
             <form  onSubmit={(e) => {
                  submithadler(e)
                }} >
                
                 <div className='line absolute h-16 w-1 bg-gray-800 top-[34%] left-10 rounded-full '></div>
                <input
                  onClick={() => {
                    setpanelopen(true)
                  }}
                   value = {pickup}
                   onChange={async(e) => {
                    console.log('Inside onchange')
                    setpickup(e.target.value)
                try{
                    console.log('Inside try1')
                   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/map/get-suggestion`, {
                       params: { input: e.target.value },
                       headers: {
                           Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                   console.log('Inside try2')
                   console.log(response.status)
                   console.log(response)
                   if(response.status == 200 ){
                       setsuggestion(response.data) 
                   }
                  }catch(err){console.log(err)}
                    
                  }}
                  required
                  placeholder='Add a pickup Location'
                  className=' bg-gray-200 px-10 py-2 mt-2 w-full rounded text-base'
                  type='text'
                /><br />
                <input
                   onClick={() => {
                    setpanelopen(true)
                   }}
                   value = {destination}
                   onChange={async(e) => {
                    setdestination(e.target.value)
                try{
                   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/map/get-suggestion`, {
                     params: { input: e.target.value },
                       headers: {
                           Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                   });   {/*Remember this axios format*/}

                   if(response.status === 200 ){
                       setsuggestion(response.data) 
                   }
                  }catch(err){console.log(err)}
                    
                   }}
                  required
                  placeholder='Enter your destination'
                  className=' bg-gray-200  px-10 py-2 mt-2 w-full rounded text-base '
                  type = 'text'
                />
             </form>
             <button onClick={()=>{
                findtrip()  
             }} className='bg-[#111] text-white w-full mb-3 px-4 py-2 font-semibold text-lg'>Find Trip</button>
          </div>
         
          <div  ref={panelref} className='top-0'>
               <Locationserachpanel setpanelopen = {setpanelopen} setvehiclepanel = {setvehiclepanel} suggestion = {suggestion} setpickup = {setpickup} setdestination = {setdestination}/>
          </div>
       </div>
       <div ref={vehiclepanelref} className='fixed z-10 bottom-0 px-3 py-10  bg-white w-full '>
          <Vehiclepanel setvehiclepanel = {setvehiclepanel} setconfirmridepanel = {setconfirmridepanel} fare = {fare} setvehicletype = {setvehicletype} />
      </div>
      <div ref={Confirmridepanelref} className='fixed z-10 bottom-0 px-3 py-10  bg-white w-full '>
          <Confirmride setconfirmridepanel = {setconfirmridepanel} setvehiclefound = {setvehiclefound} createRide = {createRide} pickup = {pickup} destination = {destination} vehicleType = {vehicletype} fare = {fare}/>
      </div>
      <div ref={vehiclefoundref} className='fixed z-10 bottom-0 px-3 py-10  bg-white w-full '>
          <Lookingfordriver setvehiclefound = {setvehiclefound} pickup = {pickup} destination = {destination} vehicleType = {vehicletype} fare = {fare}/>
      </div>   
      <div ref={waitingfordriverref} className='fixed z-10 bottom-0 px-3 py-10 bg-white w-full'> 
        <WaitingforDriver setwaitingfordriver = {setwaitingfordriver} ride = {ride} />
      </div>
    </div>
  )
}

export default Home1