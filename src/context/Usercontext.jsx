import React , { createContext } from 'react'
export const UsercontextData = createContext()

const Usercontext = ({children}) => {
    const [user , setuser] = React.useState({
     email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <UsercontextData.Provider value={{user , setuser}}>
          {children}
        </UsercontextData.Provider>
    </div>
  )
}

export default Usercontext