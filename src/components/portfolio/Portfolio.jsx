import React from 'react'
import './portfolio.css'
import FMT from '../../assets/FMT.png'
import PF from '../../assets/portfolio.PNG'
import NF from '../../assets/netflix.png'
import PG from '../../assets/pirategame.png'
import FG from '../../assets/fallgame.png'

const data = [
  {
    id: 0,
    image: FMT,
    title: 'FindMyTruck',
    github: 'https://github.com/VincentBGojo/FindMyTruck',
    demo: 'https://youtu.be/X7Indy4FB_o?t=2460'
  },
  {
    id: 1,
    image: PF,
    title: 'Portfolio',
    github: 'https://github.com/VincentBGojo/Portfolio'
  },
  {
    id: 2,
    image: NF,
    title: 'Netflix',
    github: 'https://github.com/VincentBGojo/Netflix_Clone_NotDynamic'
  },
  {
    id: 3,
    image: PG,
    title: 'PirateGame',
    github: 'https://github.com/VincentBGojo/PirateGame'
  },
  {
    id: 4,
    image: FG,
    title: 'FallGame',
    github: 'https://github.com/VincentBGojo/FallGame'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes projets</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Code Source</a>
            {id===0 &&
              <a href={demo} className='btn btn-primary' target='_blank'>Présentation live</a>
            }
            </div>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio