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
    <div>
        <Menu/>
        <h1>Este es el listado de cursos</h1>
        {
            cursos.map((curso)=>(
                <section>
                    <h1>{curso.nombre}</h1>
                    <img src={curso.img}/>
                    <h4>{curso.opiniones} Opiniones</h4>
                    <p>{curso.descripcion}</p>
                    <h4>{curso.contenido} horas de contenido</h4>
                    <h4>{curso.practica} horas de preactica</h4>
                </section>
            ))
        }
    </div>
  )
}

export default Cursos