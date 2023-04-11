import React, { Component } from 'react'
import data from '../../data';
import linkico from '../../images/linkicon.png'
export class Portfolio extends Component {
  render() {
    const { clients } = data;
    return (
      <section>
        {clients.map(({ name, img, info, link }) => (
          <article className='portfolio__container'>
            <h2 className='portfolio__title'>{ name }</h2>
            <div className='portfolio__card'>
              <img src={ img } alt={ `Imagem do menu web de ${ name } ` } className='portfolio__card-image'/>
              <a href={ link } target='_blank' rel='noreferrer'><img src={linkico} alt={`link para acessar o cardápio ${name}`} /></a>
              </div>
            <div>
              <p>{info}</p>
            </div>
          </article>
        ))}
      </section>
  );
  }
}

export default Portfolio