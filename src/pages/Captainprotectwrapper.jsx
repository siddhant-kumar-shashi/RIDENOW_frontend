import axios from 'axios'
import React, { useEffect, useState , useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Captaindatacontext } from '../context/Captaincontext'


const Captainprotectwrapper = ({children}) => {   // always use childrena as prop
    const [isloading , setisloading] = useState(true)
    const {captain , setcaptain} = useContext(Captaindatacontext)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!token){
            navigate('/captainlogin')
        }

 //   console.log('Inside captainprotectwrapper')
     axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                             headers:{
                                 Authorization: `Bearer ${token}`
                             }
                       }).then(response => { 
                               if( response.status == 200 ){
                                    setisloading(false)
                                    setcaptain(response.data) 
                                    // console.log('response--->' ,  response)
                                    console.log("captainprotectWrapper")
                                }
                          })
                      
    .catch((err)=>{
        console.log(err)
      //  console.log('sidkumar')
      //  localStorage.removeItem('token')
        navigate('/captainlogin')
    }) } , [token])

    if(isloading){
        return(
        <div>
            Loading...
        </div>
        ) 
    }
  return (
    <div>
       {children}
    </div>
  )
}

export default Captainprotectwrapper