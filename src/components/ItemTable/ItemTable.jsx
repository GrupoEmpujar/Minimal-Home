import React, { useContext, useState } from 'react'
import { ItemsContext, UPLOAD_ITEMS } from '../../context/ItemsContext';
import Modal from '../Modal/Modal';
import { axiosInstance } from '../../services/axios.config';

function ItemTable({id,name, description, image, price, stock}) {
    const [modalShow, setModalShow] = useState(false);
    const {items, dispatch} = useContext(ItemsContext);

    const handleDelete = (idDelete) =>{
        axiosInstance.delete(`/${idDelete}`)
        .then(response =>{
            if(response.status === 200){
                const itemUpload = items.filter(item => item.id !== response.data.id)
                dispatch({type:UPLOAD_ITEMS, payload:itemUpload})
            }
        })
    }
    return (
        <>
            <tr >
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>$ {price}</td>
                <td>{stock}</td>
                <td style={{ display: "flex", justifyContent: "space-around" }}>
                    <i 
                    style={{ cursor: "pointer" }} 
                    className="bi bi-trash"
                    onClick={()=> handleDelete(id)}
                    ></i>
                    <i style={{ cursor: "pointer" }} 
                    className="bi bi-pencil-square" 
                    onClick={() => setModalShow(true)}
                    ></i>
                </td>
            </tr>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
                name={name}
                description={description}
                price={price}
                stock={stock}
                image={image}
                // onSubmit={editItem}
            />
        </>
    )
}

export default ItemTable