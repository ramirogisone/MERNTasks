import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    // obtener funciones del contex de tareas
    const tareasContext = useContext(tareaContext);
    const {errorTarea, agregarTarea, validarTarea, obtenerTareas, tareaSeleccionada, actualizarTarea, limpiarTarea} = tareasContext;

    useEffect(() => {
        if(tareaSeleccionada !== null) {
            guardarTarea(tareaSeleccionada);
        }else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada]);

    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // extraigo nombre de proyecto
    const {nombre} = tarea;
    
    if(!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;
    
    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        
        // validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }
       
        if(tareaSeleccionada === null) {
            // agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else {
            actualizarTarea(tarea);
            limpiarTarea();
        }

        // obtener las tareas del proyecto seleccionado
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }
    return ( 
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nombre tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorTarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTarea;