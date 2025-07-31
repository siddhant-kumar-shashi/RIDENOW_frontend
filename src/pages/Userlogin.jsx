import React , {useState , useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UsercontextData } from '../context/Usercontext'
import axios from 'axios'

const Userlogin = () => {
   const [email , setemail] = React.useState('')
   const [password , setpassword] = React.useState('')
   const [data , setdata] = React.useState({})
   
   const { user , setuser } = useContext(UsercontextData)
   const navigate = useNavigate()

   const submithandler = async(e) => {
      e.preventDefault()
      
      const userdata = {
          email:email,
          password:password
      }
try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login` , userdata)
 //     console.log(data)
      if( response.status == 200 ){
        const data = response.data
        setuser(data.user)
        localStorage.setItem('token' , data.token) // we are setting token when user logged-in
        navigate('/home1')
      }
    }catch(err){
      console.log('sid')
        console.log(err)
    }
      setemail('')
      setpassword('')
   }
   return (
    <div className='p-7 flex flex-col h-screen justify-between' >
      <div>
        <img className='w-20 h-20 mb-5 ' src='https://logospng.org/download/uber/logo-uber-4096.png' />
        <form onSubmit={(e) => {
            submithandler(e)
        }}> 
            <h3 className='font-semibold text-xl mb-2' >What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className='placeholder:3xl  border bg-[#eeeeee] w-full mb-5 text:lg px-4 py-2 '
              type='email'
              placeholder='example@email.com'
            />

            <h3 className='font-semibold text-xl mb-2' >What's your password</h3>
            <input
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className='placeholder:3xl  border bg-[#eeeeee] w-full mb-8 text-lg px-4 py-2'
              type='password'
              placeholder='password'
            />
            <div>
               <button className='bg-[#111] text-white w-full mb-3 px-4 py-2 font-semibold text-lg'>Login</button>
            </div>
        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-700' >Create new account</Link></p>
        </div>
        <div>
          <Link to='/Captainlogin' className='bg-green-500 rounded flex justify-center w-full text-white py-2 '>Sign in as Captain</Link>
        </div>
    </div>
    
  )
}

export default Userlogin