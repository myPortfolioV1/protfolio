import { useState ,useContext } from 'react';
import axios from 'axios'
import { ThemeContext } from '../../contexts/theme'

const Form =()=>{
    const [{ themeName }] = useContext(ThemeContext)
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [phone, setPhone]=useState("")
    const [message,setMessage] = useState("")
    
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
 
 const sendMail= async ()=>{
   const body = {name,mail,phone,message}
try{
     console.log("helloj")
    }
  catch(err){
    console.log(err)
  }
 }

const getTheme =()=>{
  if(themeName === "light"){
    return "contact-boxlight"
  }
    return "contact-boxdark"
}
  
 return (<div className="container">
  <div className={getTheme()}>
    <div className="left" />
    <div className="right">
      <h4 >Email me</h4>
      <input type="text" className="field" name ="name" onChange={ChangeHandler} placeholder="Your Name"/>
      <input type="text" className="field" name ="Email" onChange={ChangeHandler} placeholder="Your Email"/>
      <input type="text" className="field" Name ="phone" onChange={ChangeHandler} placeholder="Phone" />
      <textarea placeholder="Message" name="message" onChange={ChangeHandler} className="field" />
      <button type="button" className="bttn" onClick={sendMail} >Send</button>
    </div>
  </div>
</div>)
}
export default Form