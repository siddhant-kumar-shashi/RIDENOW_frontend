import axios from 'axios'
import React , {useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { Captaindatacontext } from '../context/Captaincontext'
import { useState } from 'react'


const Captainlogin = () => {
     const [email , setemail] = React.useState('')
     const [password , setpassword] = React.useState('')
     const [emailerror , setemailerror] = useState('')
     const navigate = useNavigate()
     const {captain , setcaptain} = useContext(Captaindatacontext)

     const submithandler = async(e) => {
        e.preventDefault()
        const captaindata = {
            email:email,
            password:password
        }

    try{
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login` , captaindata) // I forgot post here
        console.log(response)
        console.log(response.status)
        if( response.status == 200){
          const data = response.data;
          localStorage.setItem('token' , data.token)
          navigate('/captainhome')
          setcaptain(data.captain)
          setemail('')
          setpassword('')
        }
    
      }catch(err){
        console.log(err)
      }
        
  }
  return (
    <div className='p-7 flex flex-col h-screen justify-between' >
    <div>
      <img className='w-40 h-30 mb-5 ' src='https://www.yoeleocanada.com/cdn/shop/files/RideNow_Japan_1360x_404e1fd4-9702-4551-b6f1-e3c94640207d_600x.webp?v=1704038949' />
      <form onSubmit={(e) => {
          submithandler(e)
      }}> 
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
             <button className='bg-[#111] text-white w-full mb-3 px-4 py-2 font-semibold text-lg'>Captain Login</button>
          </div>
      </form>
      <p className='text-center'>New here? <Link to='/captainsignup' className='text-blue-700' >Create new account</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-green-500 rounded flex justify-center w-full text-white py-2 '>Sign in as User</Link>
      </div>
  </div>
  )
}

export default Captainlogin