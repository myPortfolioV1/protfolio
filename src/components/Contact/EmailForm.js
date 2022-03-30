import { useState } from 'react';
  
const Form =()=>{
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [phone, setPhone]=useState("")
    const [message,setMessage] = useState("")
    
    const ChangeHandler=(e)=>{
      console.log({name,mail,phone,message})
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
  
 return (<div className="container">
  <div className="contact-box">
    <div className="left" />
    <div className="right">
      <h4 >Email me</h4>
      <input type="text" className="field" name ="name" onChange={ChangeHandler} placeholder="Your Name"/>
      <input type="text" className="field" name ="Email" onChange={ChangeHandler} placeholder="Your Email"/>
      <input type="text" className="field" Name ="phone" onChange={ChangeHandler} placeholder="Phone" />
      <textarea placeholder="Message" name="message" onChange={ChangeHandler} className="field" />
      <button type="button" className="bttn">Send</button>
    </div>
  </div>
</div>)
}
export default Form