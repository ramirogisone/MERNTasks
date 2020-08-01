import React, {Fragment, useState} from 'react';

const NuevoProyecto = () => {

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })
    // extraer nombre de proyecto
    const {nombre} = proyecto;
    // lee lo que el usuario escribe
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : [e.target.value]
        })
    }
    // lo que el se envia
    const onSubmitProyecto = e => {
        e.preventDefault();
        // validar campo

        // agregar al state

        // reiniciar form
    }


    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >Nuevo Proyecto
            </button>
            <form 
                className='formulario-nuevo-proyecto'
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type='text'
                    className='input-text'
                    placeholder='Nombre del proyecto'
                    name='nombre'
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input 
                    type='submit'
                    className='btn btn-primario btn-block'
                    value='Agregar proyecto'
                />
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;