import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    
    // extrae proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // obtiene los proyectos cuando se carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos para mostrar</p>;

    return ( 
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
            
        </ul>
     );
}
 
export default ListadoProyectos;