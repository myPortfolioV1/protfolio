import { useState } from 'react';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { contact } from '../../portfolio'
import './Contact.css'
import Form from "./EmailForm";


const Contact = () => {

  const [EmailMenu , setEmailMenu] = useState(false);

  const toggle=()=>{
    setEmailMenu(()=>!EmailMenu)
  }

  if (!contact.email) return null
 
 


  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      
     <div  className="parent">
     <div>  <LocalPhoneIcon/></div><p>20 669 058</p>
      <div> <AlternateEmailIcon/></div>
      <p>aminejelassi95@gmail.com</p>
      <div><LinkedInIcon/></div>
     <p> https://www.linkedin.com/in/amine-jelassi/ </p>
     </div> 
       
        <button type='button' style={{margin : "25px"}} onClick={()=>toggle()} className='btn btn--outline'>
          Email me
        </button>
        {EmailMenu?<Form/>:""}
    
    </section>
  )
}

export default Contact
