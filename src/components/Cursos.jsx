import React from 'react'
import Menu from './Menu'
import { useEffect, useState } from 'react'

const Cursos = () => {
    
    const [cursos, setCursos] = useState([])
    const mostrarCursos = async() => {
        await fetch('/src/components/json/cursos.json')
        .then((response)=>response.json())
        .then((data) => setCursos(data))
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        mostrarCursos()
    },[])
    console.log(cursos)
    
  return (
    <div >
        <Menu/>
        <h1 className='titulo'><strong>Este es el listado de cursos</strong></h1>
        <section className='container-cursos'>
        
        {
            cursos.map((curso)=>(
                <section className='card-cursos'>
                    <section className='header-card'> 
                        <img src={curso.img}/>
                        <h1><strong>{curso.nombre}</strong></h1>
                        <h5>{curso.opiniones} Opiniones</h5>
                    </section>
                    <section className='descripcion-card'>
                        <p>{curso.descripcion}</p>
                        <h4>{curso.contenido} horas de contenido</h4>
                        <h4>{curso.practica} horas de preactica</h4>
                    </section>
                </section>
            ))
        }
        </section>
    </div>
  )
}

export default Cursos