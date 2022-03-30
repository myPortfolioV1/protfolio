import { useState } from 'react';
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

        <button type='button' onClick={()=>toggle()} className='btn btn--outline'>
          Email me
        </button>
        {EmailMenu?<Form/>:""}
    
    </section>
  )
}

export default Contact
