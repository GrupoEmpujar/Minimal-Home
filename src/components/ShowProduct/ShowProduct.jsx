import React, { useContext, useEffect } from 'react'
import { ItemsContext, UPLOAD_ITEMS } from '../../context/ItemsContext'
import { axiosInstance } from '../../services/axios.config';
import Table from '../Table/Table';


const ShowProduct = () => {
    const {items, dispatch} = useContext(ItemsContext);
    useEffect(()=>{
        axiosInstance.get('/')
        .then(response =>{
            if(response.status === 200){
                console.log(response.data);
                dispatch({type:UPLOAD_ITEMS, payload:response.data})
            }else {
                throw new Error(`[${response.status} error en la solicitud]`)
            }
        })
        .catch(err => console.error(err))
    },[])
    return (
        <>
        <div className='containerShowProducts'>
            <h2 style={{ textAlign: "center" }}>Productos</h2>
            <div className='tabla'>
                {
                    items.length > 0 ?
                        <Table items={items}
                        />
                        :
                        <p style={{ textAlign: "center", fontSize: "24px", color: "#fff" }}>No hay productos en el sistema</p>
                }
            </div>
        </div>
        </>
    )
}

export default ShowProduct