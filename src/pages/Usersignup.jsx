import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UsercontextData} from '../context/Usercontext'
import { useState } from 'react'

const Usersignup = () => {
  const [first_name , setfirst_name] = React.useState('')
  const [last_name , setlast_name] = React.useState('')
  const [email , setemail] = React.useState('')
  const [password , setpassword] = React.useState('')
  const [data , setdata] = React.useState({})
  const [error, setError] = useState('');
  const [emailerror , setemailerror] = useState('')
   const navigate = useNavigate()

   const {user , setuser} = React.useContext(UsercontextData)

   const submithandler = async(e) => {
      e.preventDefault()
      const newUser = {
          fullname:{
               firstname:first_name,
               lastname:last_name
          },
          email:email,
          password:password
      }
   try{   
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register` , newUser)
      console.log(response)
      if(response.status == 200 ){
        
        setuser(response.data)
        console.log(user)
        localStorage.setItem('token' , response.data.token) // we are setting token when user signed-up

        navigate('/home1')
    }
  }catch(err){
      console.log(err)
  }
      setemail('')
      setpassword('')
      setfirst_name('')
      setlast_name('')
      console.log('hi there2')

  }

  return (
    <div className='p-7 flex flex-col h-screen justify-between' >
    <div>
      <img className='w-40 h-30 mb-5 ' src='https://www.yoeleocanada.com/cdn/shop/files/RideNow_Japan_1360x_404e1fd4-9702-4551-b6f1-e3c94640207d_600x.webp?v=1704038949' />
      <form onSubmit={(e) => {
          submithandler(e)
      }}> 
          <h3 className='font-semibold text-xl mb-2' >What's your name</h3>
      <div className='mb-5'>
        <div className=' flex gap-2'>
          <input
            required
            value={first_name}
            onChange={(e) => {
              if(e.target.value.length >= 5  || e.target.value.length == 0 )
                   setError('')
              else  setError('Enter more than five characters')
                   setfirst_name(e.target.value)
            }}
            className='placeholder:3xl  border bg-[#eeeeee] w-full  text:lg px-4 py-2 '
            type='name'
            placeholder='first_name'
          />
          <input
            required
            value={last_name}
            onChange={(e) => {setlast_name(e.target.value)}}
            className='placeholder:3xl  border bg-[#eeeeee] w-full  text:lg px-4 py-2 '
            type='name'
            placeholder='last_name'
          />
          </div>
            <p className='text-red-500 text-sm mt-1'>{error}</p>
        </div>
        
         <div className='mb-8'>
          <h3 className='font-semibold text-xl mb-2' >What's your Email</h3>
              <input
                required
                value={email}
                onChange={(e) => {
                  if(e.target.value.length >= 9 || e.target.value.length == 0 )
                       setemailerror('')  
                  else setemailerror('Enter more than nine characters')  
                      setemail(e.target.value)
                 }     
                }
                    
                className='placeholder:3xl  border bg-[#eeeeee] w-full  text-lg px-4 py-2'
                type='email'
                placeholder='example@email.com'
              />
              <p className='text-red-500 text-sm mt-1'>{emailerror}</p>
        </div>

          <h3 className='font-semibold text-xl mb-2' >Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='placeholder:3xl  border bg-[#eeeeee] w-full mb-8 text-lg px-4 py-2'
            type='password'
            placeholder='password'
          />
          <div>
             <button className='bg-[#111] text-white w-full mb-3 px-4 py-2 font-semibold text-lg'>Signup</button>
          </div>
      </form>
      <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-700' >Login here</Link></p>
      </div>
      <div>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta, nihil quaerat laborum quisquam debitis pariatur amet placeat, veniam ut quo praesentium quidem deserunt molestiae architecto possimus magnam labore animi earum aspernatur. Quis, repellendus sapiente.</p>
      </div>
  </div>
  )
}

export default Usersignup