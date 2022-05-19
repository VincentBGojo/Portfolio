import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqdih0q', 'template_5mxrvzl', form.current, 'gxMaoh4GgijXtAejV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
  };

  return (
    <section id='contact'>
    <h2>Me contacter</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>vincent.bouchard92@gmail.com</h5>
          <a href="mailto:vincent.bouchard92@gmail.com" target="_blank">Envoyer un email</a>
        </article>
        <article className="contact__option">
        <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/bouchard-vincent/" target="_blank">Se connecter sur LinkedIn</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom et prénom' required/>
          <input type="email" name='email' placeholder='Votre email' required/>
          <textarea name="message" rows="7" placeholder='Votre message' required>
          </textarea>
          <button type='submit' className='btn btn-primary'>Envoyer votre message</button>
        </form>
    </div>
    </section>
  )
}

export default Contact
