import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/profil.png'
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Salut je suis</h5>
          <h1>Vincent Bouchard</h1>
          <h5 className="text-light">
            Développeur Front-end spécialisé React
          </h5>
          <CTA />
           <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll down</a>
        </div>
      </header>

  )
}

export default header
