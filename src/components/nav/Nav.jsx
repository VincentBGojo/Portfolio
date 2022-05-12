import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {ImFilesEmpty} from 'react-icons/im'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  //Active button in the state is home by default
  const [activeNav, setActiveNav] = useState('#');
  return (
    // Each <a> has a value that will change the active class when clicked thanks to the hook UseState and the OnClick method
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><ImFilesEmpty /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav