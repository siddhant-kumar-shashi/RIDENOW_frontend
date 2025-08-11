import React , {useContext} from 'react'
import { Link , useNavigate  } from 'react-router-dom'
import axios from 'axios'
import { Captaindatacontext } from '../context/Captaincontext'
import { useState } from 'react'

const Captainsignup = () => {
  const [first_name , setfirst_name] = React.useState('')
    const [last_name , setlast_name] = React.useState('')
    const [email , setemail] = React.useState('')
     const [password , setpassword] = React.useState('')
     const [vehiclecapacity , setvehiclecapacity] = React.useState('')
     const [vehicleplate , setvehicleplate] = React.useState('')
     const [vehiclecolor , setvehiclecolor] = React.useState('')
     const [vehicletype , setvehicletype] = React.useState('')
     const [error , setError] = useState('')
     const [emailerror , setemailerror] = useState('')
     const navigate = useNavigate()
     const {captain , setcaptain} = React.useContext(Captaindatacontext)
  
    const submithandler = async(e) => {
      console.log('Captainsignup')
        e.preventDefault()
      const captaindata = {
            fullname:{
              firstname:first_name,
              lastname:last_name
            },
            email:email,
            password:password,
            vehicle: {
              color: vehiclecolor,
              vehicleType: vehicletype,
              plate: vehicleplate,
              capacity: vehiclecapacity
            }
        }
    try{
    //    console.log('hello inside captainsignup')
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register` , captaindata)
   //     console.log('mr india')
        if(response.status == 200 ){
          const data = response.data ;
          localStorage.setItem('token' , data.token)
          setcaptain(data.captain)
   //       console.log(data)
          navigate('/captainhome')
        }    
        setfirst_name('')
        setlast_name('')
        setemail('')
        setpassword('')
        setvehiclecapacity('')
        setvehiclecolor('')
        setvehicleplate('')
        setvehicletype('')  
      }catch(err){
          console.log(err)
          console.log('error')
      }
  }


  return (
    <div className='p-7 flex flex-col h-screen justify-between' >
    <div>
      <img className='w-40 h-30 mb-5 ' src='https://www.yoeleocanada.com/cdn/shop/files/RideNow_Japan_1360x_404e1fd4-9702-4551-b6f1-e3c94640207d_600x.webp?v=1704038949' />
      <form onSubmit={(e) => {
          submithandler(e)
      }}> 
          <h3 className='font-semibold text-xl mb-2 w-full' >What's your name</h3>
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
            onChange={(e) => setlast_name(e.target.value)}
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
          <h3 className='font-semibold text-xl mb-2 w-full' >Vehicle's Information</h3>
          <div>
          <div className=' flex gap-2'>
               <input
                 required
                 value={vehiclecolor}
                 onChange={(e) => setvehiclecolor(e.target.value)}
                 className='placeholder:3xl  border bg-[#eeeeee] w-full mb-5 text:lg px-4 py-2 '
                 type='name'
                 placeholder='Vehicle_Color'
               />
               <input
                 required
                 value={vehicleplate}
                 onChange={(e) => setvehicleplate(e.target.value)}
                 className='placeholder:3xl  border bg-[#eeeeee] w-full mb-5 text:lg px-4 py-2 '
                 type='name'
                 placeholder='Vehicle_Plate'
               />
          </div>
          <div className=' flex gap-2'>
               <input
                 required
                 value={vehiclecapacity}
                 onChange={(e) => setvehiclecapacity(e.target.value)}
                 className='placeholder:3xl  border bg-[#eeeeee] w-full mb-5 text:lg px-4 py-2 '
                 type='name'
                 placeholder='Vehicle_Capacity'
               />
      <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base mb-5'
              value={vehicletype}
              onChange={(e) => {
                setvehicletype(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="motor">motor</option>
      </select>
          </div>
          </div>
          <div>
             <button className='bg-[#111] text-white w-full mb-3 px-4 py-2 font-semibold text-lg'>Create Captain Account</button>
          </div>
      </form>
      <p className='text-center'>Already have an account? <Link to='/captainlogin' className='text-blue-700' >Login here</Link></p>
      </div>
      <div>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit<span className='underline'>Google privacy</span>Doloremque dicta, nihil quaerat laborum quisquam debitis pariatur amet placeat,<span className='underline'> veniam ut quo praesentium quidem</span>deserunt molestiae architecto possimus magnam labore animi earum aspernatur. Quis, repellendus sapiente.</p>
      </div>
  </div>
  )
}

export default Captainsignup