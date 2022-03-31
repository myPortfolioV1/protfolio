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
     <div>  <LocalPhoneIcon/> 20 669 058 </div>
      <div> <AlternateEmailIcon/> aminejelassi95@gmail.com </div>
      <div><LinkedInIcon/> linkedin.com/in/amine-jelassi</div>
       
        <button type='button' onClick={()=>toggle()} className='btn btn--outline'>
          Email me
        </button>
        {EmailMenu?<Form/>:""}
    
    </section>
  )
}

export default Contact
