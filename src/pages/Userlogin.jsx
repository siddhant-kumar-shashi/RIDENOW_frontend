import React , {useState , useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UsercontextData } from '../context/Usercontext'
import axios from 'axios'

const Userlogin = () => {
   const [email , setemail] = React.useState('')
   const [password , setpassword] = React.useState('')
   const [data , setdata] = React.useState({})
   const [emailerror , setemailerror] = useState('')

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
        <img className='w-40 h-30 mb-5 ' src='https://www.yoeleocanada.com/cdn/shop/files/RideNow_Japan_1360x_404e1fd4-9702-4551-b6f1-e3c94640207d_600x.webp?v=1704038949' />
        <form onSubmit={(e) => {
            submithandler(e)
        }}> 
        <div className='mb-8'>
            <h3 className='font-semibold text-xl mb-2' >What's your email</h3>
            <input
                required
                value={email}
                onChange={(e) => {
                   
                  if(e.target.value.length >= 9 || e.target.value.length == 0 )
                       setemailerror('')
                  else setemailerror("Enter more than nine characters")
                  setemail(e.target.value)  
                 }     
                }
                    
                className='placeholder:3xl  border bg-[#eeeeee] w-full text-lg px-4 py-2'
                type='email'
                placeholder='example@email.com'
              />
              <p className='text-red-500 text-sm '>{emailerror}</p>
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
               <button className='bg-[#111] text-white w-full mb-3 px-4 py-2 font-semibold text-lg'>User Login</button>
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