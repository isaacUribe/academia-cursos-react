import React from 'react'
import Menu from './Menu'

const Home = () => {
  return (
    <div >
        <Menu/>
        <section className='home'>
        <h1><strong>Bienvenido, Estudiante</strong></h1>
        <p>Continua aprendiendo</p>
        <section className='contendedor '>
          <section className='box'>
            <section className='etiqueta'>
              <p><strong>3 horas </strong> de estudio</p>
              <p>Meta Semanal: <strong>20 horas</strong></p>
            </section>
            <section className='etiqueta'>
              <p><strong>3 horas </strong> de estudio</p>
              <p>Meta Semanal: <strong>20 horas</strong></p>
            </section>
            <section className='etiqueta'>
              <p><strong>50 puntos </strong> Rank</p>
              <p>Total obtenidos <strong>50 puntos</strong></p>
            </section>
          </section>
          <section className='contenedor-card-home'>
            <section className='card-home'>
              <img src="/src/assets/img/imagen1.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui, magnam, odio impedit iste totam enim molestiae maiores quod inventore doloremque quidem autem cum. Modi soluta inventore repellendus eaque sint.</p>
            </section>
            <section className='card-home'>
              <img src="/src/assets/img/imagen2.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui, magnam, odio impedit iste totam enim molestiae maiores quod inventore doloremque quidem autem cum. Modi soluta inventore repellendus eaque sint.</p>
            </section>
            <section className='card-home'>
              <img src="/src/assets/img/imagen3.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui, magnam, odio impedit iste totam enim molestiae maiores quod inventore doloremque quidem autem cum. Modi soluta inventore repellendus eaque sint.</p>
            </section>
          </section>
        </section>
        </section>
    </div>
  )
}

export default Home