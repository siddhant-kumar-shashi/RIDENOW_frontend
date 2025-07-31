import {createContext , useState , useContext} from "react";

export const Captaindatacontext = createContext()

const Captaincontext = ({children}) => {    
   const[captain, setcaptain] = useState({
       fullname:{
        firstname:'',
        lastname:''
       },
       email:'',
       password:'',
       vehicle:{
        color:'',
        plate:'',
        capacity:'',
        vehicleType:''
       }
   })


  return (
    <div>
       <Captaindatacontext.Provider value={{captain , setcaptain}}> {/*instead [captain , setcaptain] use {} */ }
           {children}
       </Captaindatacontext.Provider>
    </div>
  )
}

export default Captaincontext


