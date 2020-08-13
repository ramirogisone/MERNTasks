import React, {Fragment, useContext} from 'react';
import Tarea from '../tareas/Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoTareas = () => {

    // extrae proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    // obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {tareasProyecto} = tareasContext;

    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onclicEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareasProyecto.length === 0 
                ? (<li className='tarea'><p>No hay tareas</p></li>) 
                : 
                <TransitionGroup>
                    {tareasProyecto.map(tarea => (
                        <CSSTransition
                            key={tarea.id}
                            timeout={400}
                            classNames='tarea'
                        >
                            <Tarea 
                                tarea={tarea}
                            />
                        </CSSTransition>
                        
                    ))}
                </TransitionGroup>
                }
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