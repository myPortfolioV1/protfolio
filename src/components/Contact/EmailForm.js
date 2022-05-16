import { useState ,useContext ,useEffect} from 'react';
import axios from 'axios'
import { ThemeContext } from '../../contexts/theme'

const Form =()=>{

 //---------init------------
  useEffect(()=>{
     checkMobile()
  })
   
    const [{ themeName }] = useContext(ThemeContext)
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [phone, setPhone]=useState("")
    const [message,setMessage] = useState("")
    const  [mobile,setMobile] = useState(false)
    

    const ChangeHandler=(e)=>{
   
      if(e.target.name ==="name")
      {
        setName(()=>e.target.value)
      }
      if(e.target.name ==="Email")
      {
        setMail(()=>e.target.value)
      }
      if(e.target.name ==="phone")
      {
        setPhone(()=>e.target.value)
      }
      if(e.target.name ==="message")
      {
        setMessage(()=>e.target.value)
      }
    }


  const mobileForm=()=>{

return  (  <div className="form">
    <div className="title">Email me</div>
    <div className="input-container ic1">
      <input id="firstname" className="input" type="text" placeholder=" " />
      <div className="cut" />
      <label htmlFor="firstname" className="placeholder">Name</label>
    </div>
    <div className="input-container ic2">
      <input id="lastname" className="input" type="text" placeholder=" " />
      <div className="cut" />
      <label htmlFor="lastname" className="placeholder">Last name</label>
    </div>
    <div className="input-container ic2">
      <input id="email" className="input" type="Email" placeholder="" />
      <div className="cut cut-short" />
      <label htmlFor="email" className="placeholder">Email
      </label></div>
    <button type="text" className="submit">submit</button>
  </div>
)
    
  }




///---------checking window width for mobile menu 
    const checkMobile =()=>{     
      if(window.innerWidth <= 600){
        setMobile(()=>true)
      }
      else 
       {
         setMobile(()=>false)
       }
    }

 const sendMail= async ()=>{
   const body = {name,mail,phone,message}

 }

const getTheme =()=>{
  if(themeName === "light"){
    return "contact-boxlight"
  }
    return "contact-boxdark"
}

window.addEventListener('resize', checkMobile)
  
 return (<div className="container">
  {!mobile?(<div className={getTheme()}>
    <div className="left" />
    <div className="right">
      <h4 >Email me</h4>
      <input type="text" className="field" name ="name" onChange={ChangeHandler} placeholder="Your Name"/>
      <input type="text" className="field" name ="Email" onChange={ChangeHandler} placeholder="Your Email"/>
      <input type="text" className="field" Name ="phone" onChange={ChangeHandler} placeholder="Phone" />
      <textarea placeholder="Message" name="message" onChange={ChangeHandler} className="field" />
      <button type="button" className="bttn" onClick={sendMail} >Send</button>
    </div>
  </div>):mobileForm()}
</div>)
}
export default Form