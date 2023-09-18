import React from 'react'
import Formulario from '../../components/Formulario/Formulario';
import './admin.css';

const Admin = () => {
    return (
        <>
            <h1 className='admin__title'>Agregando un producto</h1>
            <Formulario />
        </>
    )
}

export default Admin