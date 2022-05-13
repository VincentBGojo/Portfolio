import React from 'react'
import "./about.css"
import ME from '../../assets/hunter.png'
import {FaAward} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {MdOutlineNetworkCheck} from 'react-icons/md'
import {FaInfinity} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Ce qu'il faut savoir</h5>
      <h2>Sur moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Expérience</h5>
              <small>1 an et +</small>
            </article>
            <article className='about__card'>
              <DiJavascript1 className='about__icon'/>
              <h5>Projets</h5>
              <small>6</small>
            </article>
            <article className='about__card'>
              <MdOutlineNetworkCheck className='about__icon'/>
              <h5>Motivation</h5>
              <small><FaInfinity /></small>
            </article>
          </div>
          <p>
            Passionné du développement web, j'aime créer tout type de projet et affronter les nombreux obstacles que ces derniers génèrent. Le travail de groupe et l'apprentissage sont mes deux principaux moteurs. Je ne demande qu'à enrichir mes connaissances du code et travailler sur des projets complexes et variés.
          </p>

          <a href="#contact" className='btn btn-primary'>Me contacter</a>
        </div>
      </div>
    </section>
  )
}

export default About