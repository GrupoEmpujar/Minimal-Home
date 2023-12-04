import React, { useEffect, useState } from 'react'
import { getProducts, deleteCurso } from '../../services/axios.config';
import './admin.css';

const Admin = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                if (response.status === 200) {
                    setProductos(response.data.productos);
                }
            })
    }, []);
    const handleDelete = (_id)=>{
        const  confirmDelete = window.confirm(`¿Estas seguro que querés eliminar el producto?`);
        if(confirmDelete){
            deleteCurso(_id)
        .then(() => {
            window.location.reload()
        })
        .catch((error) =>{
            console.log(error)
        })

    }
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">

                <h1>Admin - Productos</h1>
                <div className="d-flex justify-content-end">
                    <a href="/admin/crear" className="btn bg-white">Crear</a>

                </div>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Página</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        productos.map(producto => {
                            return(
                            <tr key={producto._id}>
                                <td>
                                    {producto.id}
                                    
                                </td>
                                <td>
                                    {producto.name}
                                </td>
                                <td>
                                    {producto.description}
                                </td>
                                <td>
                                    {producto.price}
                                </td>
                                <td>
                                    {producto.stock}
                                </td>
                                <td>
                                    {producto.category}
                                </td>
                                <td>
                                    <img src={producto.image} width="100" alt={producto.name} className='img_admin'/>
                                </td>
                                <td>
                                    <button><a href={`/admin/edit/${producto._id}`}>Editar </a></button>
                                    <button  onClick={()=>handleDelete(producto._id)}>Borrar </button>
                                </td>
                            </tr>
                        )})
                    }


                </tbody>
            </table>
        </div>

    )
}

export default Admin