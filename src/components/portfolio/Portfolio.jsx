import React, { Component } from 'react';
import data from '../../data';
import linkicon from '../../images/linkicon.png';
import './Portfolio.css'
export class Portfolio extends Component {
  render() {
    const { clients } = data;
    return (
      <section className='portfolio__main-container' id="portfolio">
        <div className='portfolio__sub-container'>
          <h2 className='portfolio__main-title'>Portfólio</h2>
        {clients.map(({ name, img, info, link }) => (
          <article key={name} className='portfolio__container'>
            <div className='portfolio__card'>
            <h2 className='portfolio__title'>{ name }</h2>

              {/* Desktop */}
              <img src={ img } alt={ `Imagem do menu web de ${ name } ` } className='portfolio__card-image' id='card__desktop'/>
              <div className='card__icon' id='icon__desktop'>
                <a href={ link } target='_blank' rel='noreferrer'><img src={linkicon} alt={`link para acessar o cardápio ${name}`} className='portfolio__img-link' /></a>
              </div>

              {/* Mobile */}
              <a href={ link } target='_blank' rel='noreferrer'> <img src={ img } alt={ `Imagem do menu web de ${ name } ` } className='portfolio__card-image' id='card__mobile'/> </a>

              </div>
            <div className='portfolio__hr'>
              <hr className='portfolio__bar'/>
            </div>
            <div className='portfolio__container-card-text'>
              <p className='portfolio__card-text'>{info}</p>
            </div>
          </article>
        ))}
        <hr className='portfolio__bar-end'/>
        </div> 
      </section>
  );
  }
}

export default Portfolio;