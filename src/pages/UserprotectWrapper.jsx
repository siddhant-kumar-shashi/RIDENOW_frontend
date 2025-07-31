import React , {useContext, useEffect, useState} from 'react'
import { UsercontextData } from '../context/Usercontext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const UserprotectWrapper = ({
    children
}) => {
  {/*  const {user} = useContext(UsercontextData) --> we will not depend on {user} as when user refresh afer logged-in then {user} get vanished */}
    const token = localStorage.getItem('token')
    const [isloading , setisloading] = useState(true)
    const {user , setuser} = useContext(UsercontextData)
    const navigate = useNavigate()
    console.log('usrprotect')
    useEffect(() => 
    {
      if(!token){
           navigate('/login') ;
       } 


   //   console.log('In try')
      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile` , {  // In Axios, responses with HTTP status codes outside the 2xx range (like 401) are treated as errors and are caught in the .catch() block, not in the .then() block.
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then(function(response){
        if( response.status == 200 ){
              const data = response.data ;
              setuser(data)
              setisloading(false)
        }
      })
      .catch(err => {
        navigate('/login')
        console.log(err)
      })} , [token , navigate])
    
    
    if( isloading ){
       return(
        <div>
          Loading...
        </div>
       ) 
    }
  
    
    return (
      <> 
        {children}
      </>
  ) 
}

export default UserprotectWrapper