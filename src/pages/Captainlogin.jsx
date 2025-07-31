import axios from 'axios'
import React , {useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { Captaindatacontext } from '../context/Captaincontext'


const Captainlogin = () => {
     const [email , setemail] = React.useState('')
     const [password , setpassword] = React.useState('')
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
      <img className='w-20 h-20 mb-5 ' src='https://ih1.redbubble.net/image.5007880594.5940/st,small,507x507-pad,600x600,f8f8f8.jpg' />
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
      <p className='text-center'>New here? <Link to='/captainsignup' className='text-blue-700' >Create new account</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-green-500 rounded flex justify-center w-full text-white py-2 '>Sign in as User</Link>
      </div>
  </div>
  )
}

export default Captainlogin