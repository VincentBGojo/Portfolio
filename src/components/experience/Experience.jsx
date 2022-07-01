import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mon profil technique</h5>
      <h2>Compétences</h2>

      <div className="container experience__container">

      {/* Frontend section */}
        <div className="experience__frontend">
          <h3>Développement Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>HTML/CSS</h4>
              </div>
            </article>   
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Javascript</h4>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Boostrap/Bulma</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Redux</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Accessibilité</h4>
              </div>
            </article>

          </div>
        </div>
        {/* Backend section */}
        <div className="experience__backend">
          <h3>Développement Backend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>PHP</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>MySql</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Api rest</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Laravel</h4>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
