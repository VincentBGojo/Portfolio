import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> &copy; Bouchard Vincent </a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">Présentation</a></li>
        <li><a href="#experience">Compétences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </footer>
  )
}

export default Footer