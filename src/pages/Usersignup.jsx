import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UsercontextData} from '../context/Usercontext'

const Usersignup = () => {
  const [first_name , setfirst_name] = React.useState('')
  const [last_name , setlast_name] = React.useState('')
  const [email , setemail] = React.useState('')
  const [password , setpassword] = React.useState('')
  const [data , setdata] = React.useState({})
   
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
      <img className='w-20 h-20 mb-5 ' src='https://logospng.org/download/uber/logo-uber-4096.png' />
      <form onSubmit={(e) => {
          submithandler(e)
      }}> 
          <h3 className='font-semibold text-xl mb-2' >What's your name</h3>
          <div className=' flex gap-2'>
          <input
            required
            value={first_name}
            onChange={(e) => setfirst_name(e.target.value)}
            className='placeholder:3xl  border bg-[#eeeeee] w-full mb-5 text:lg px-4 py-2 '
            type='name'
            placeholder='first_name'
          />
          <input
            required
            value={last_name}
            onChange={(e) => setlast_name(e.target.value)}
            className='placeholder:3xl  border bg-[#eeeeee] w-full mb-5 text:lg px-4 py-2 '
            type='name'
            placeholder='last_name'
          />
          </div>
          <h3 className='font-semibold text-xl mb-2' >What's your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='placeholder:3xl  border bg-[#eeeeee] w-full mb-8 text-lg px-4 py-2'
            type='email'
            placeholder='example@email.com'
          />
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