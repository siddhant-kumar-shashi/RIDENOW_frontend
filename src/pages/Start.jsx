import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] pt-5  flex flex-col h-screen w-full justify-between'>
            <img className='w-20 h-20 ml-8' src='https://www.yoeleocanada.com/cdn/shop/files/RideNow_Japan_1360x_404e1fd4-9702-4551-b6f1-e3c94640207d_600x.webp?v=1704038949' />
            <div className='py-5 px-10 bg-white w-full '>
                <h2 className='flex justify-center text-3xl font-bold'>Get Started With Uber</h2>
                <Link to='/login' className='flex justify-center py-2 w-full bg-black text-white rounded mt-2 '>continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start