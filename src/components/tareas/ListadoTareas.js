import React, {Fragment, useContext} from 'react';
import Tarea from '../tareas/Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    // extrae proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir plataforma', estado: true},
        {nombre: 'Elegir colores', estado: false},
        {nombre: 'Elegir plataformas de pago', estado: false},
        {nombre: 'Elegir hosting', estado: true},
    ]

    const onclicEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length === 0 
                ? (<li className='tarea'><p>No hay tareas</p></li>) 
                : tareasProyecto.map(tarea => (
                    <Tarea 
                        tarea={tarea}
                    />
                ))}
            </ul>
            <button 
                type='button' 
                className='btn btn-eliminar' 
                onClick={onclicEliminar}>Eliminar proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListadoTareas;