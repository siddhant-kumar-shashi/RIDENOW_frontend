import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import Ridepop from '../components/Ridepop'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Confirmride from '../components/Confirmride'
import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { Captaindatacontext } from '../context/Captaincontext'
import { useEffect } from 'react'
import axios from 'axios'
import Confirmridepopup from '../components/Confirmridepopup'
const Captainhome = () => {

    const [ridepoppanel , setridepoppanel] = useState(false)
    const [confirmRidePopupPanel , setconfirmRidePopupPanel] = useState(false)
    const [ride ,   setride] = useState(null)
    const ridepoppanelRef = useRef(null)
    const confirmRidePopupPanelref = useRef(null)

    const { socket } = useContext(SocketContext)
    const {captain} = useContext(Captaindatacontext)

   useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })
        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()

        // return () => clearInterval(locationInterval)
    }, [])  

    socket.on('new-ride', (data) => {

        setride(data)
        setridepoppanel(true)
        console.log('Inside Captainhome' , data)

    })

    async function confirmRide() {

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/confirm`, {

            rideId: ride._id,
            captainId: captain._id,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        setridepoppanel(false)
        setconfirmRidePopupPanel(true)

    }

    useGSAP(function(){
    if(ridepoppanel){
   //   console.log('sid1')
      gsap.to(ridepoppanelRef.current,{
        transform:'translateY(0%)',
      })
    }else{
   //   console.log('sid2')
      gsap.to(ridepoppanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  } , [ridepoppanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      console.log('sid1')
      gsap.to(confirmRidePopupPanelref.current,{
        transform:'translateY(0%)',
      })
    }else{
      console.log('sid2')
      gsap.to(confirmRidePopupPanelref.current,{
        transform:'translateY(100%)',
      })
    }
  } , [confirmRidePopupPanel]) 

  return (
    <div className='h-screen'>
        <div className='fixed p-3 top-0 flex items-center justify-between'>
          <img className='w-16' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
       
        <Link to='/home1' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="ri-logout-box-r-line"></i>  
        </Link>
        </div>
        <div className='h-1/2'>
            <img className='w-full h-full object-cover' src='https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif' />
        </div>
        
        <div className='h-1/2 p-4 '>
           <CaptainDetails/>
        </div>
      
        <div ref={ridepoppanelRef} className='fixed z-10 top-0 px-3 py-10 bg-white w-full '>
           <Ridepop ride = {ride} setridepoppanel= {setridepoppanel} setconfirmRidePopupPanel={setconfirmRidePopupPanel} confirmRide = {confirmRide}/>
        </div>
      
        <div ref={confirmRidePopupPanelref} className='fixed z-10 top-0  bottom-0  px-3 py-10 bg-white w-full '>
           <Confirmridepopup setconfirmRidePopupPanel= {setconfirmRidePopupPanel} setridepoppanel = {setridepoppanel} ride = {ride} />
        </div>
      
    </div>
  )
} 

export default Captainhome