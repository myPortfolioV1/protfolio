import { useState } from 'react';
  
const Form =()=>{
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [phone, setPhone]=useState("")
    const [message,setMessage] = useState("")
    
    const ChangeHandler=(e)=>{
      console.log(e.target.name)
      console.log(e.target.value)
      switch(e.taget.name){
        case "name" : console.log("e.event.value");
        break;
        case "Email" : setMail(()=>e.target.value);
        break;
        case "phone" : setPhone(()=>e.target.value);
        break;
        case "message" : setMessage(()=>e.target.value);
        break;
        default : console.log(e.target);
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