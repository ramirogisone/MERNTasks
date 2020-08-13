import React, {useContext} from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    // obtener funciones del contex de tareas
    const tareasContext = useContext(tareaContext);
    const {eliminarTarea, obtenerTareas, modificaEstado, guardarTareaActual} = tareasContext;

    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    const [proyectoActual] = proyecto;

    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);

    } 

    const cambiarEstadoTarea = tarea => {
        if(tarea.estado) {
            tarea.estado = false
        }else {
            tarea.estado = true
        }
        modificaEstado(tarea);
    }

    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }

    return ( 
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                {tarea.estado
                ?
                    (
                        <button
                            type='button' 
                            className='completo' 
                            onClick={() => cambiarEstadoTarea(tarea)}>
                                Completo
                        </button>
                    )
                :
                        <button 
                            type='button' 
                            className='incompleto' 
                            onClick={() => cambiarEstadoTarea(tarea)}>
                                Incompleto
                        </button>
                }
            </div>
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>

            </div>

        </li>
     );
}
 
export default Tarea;