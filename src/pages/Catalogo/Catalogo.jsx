import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/axios.config';
import './catalogo.css';
import Card from '../../components/Card/Card';
import { useParams } from 'react-router-dom';

const Catalogo = () => {
    const name = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        axiosInstance.get('/')
            .then(response => {
                if (response.status == 200) {
                    setItems(response.data)
                }
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <section className='catalogo'>
            <h1 className='catalogo__title'>Catálogo</h1>
            <section className='catalogo__section'>
                {

                    items.length > 0 ?
                        items.map(item => item.category == name.name ?
                            <Card key={item.id} {...item} />
                            :
                            name.name == null ?
                                <Card key={item.id} {...item} />
                                :
                                '')
                        :
                        <p className='catalogo__cargando'>Cargando...</p>
                }  
            </section>
            <section>
                <button>1</button>
            </section>
        </section>
    )
}

export default Catalogo