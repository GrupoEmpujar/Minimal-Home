import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/axios.config';
import './catalogo.css';
import Card from '../../components/Card/Card';
import { useParams } from 'react-router-dom';

const Catalogo = () => {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);


    const busqueda = useParams();

    console.log(busqueda);
    const [items, setItems] = useState([]);
    useEffect(() => {
        axiosInstance.get('/')
            .then(response => {
                if (response.status === 200) {
                    setItems(response.data)
                }
            })
            .catch(err => console.error(err))
    }, [])

    const paginas = [...new Set(items.map(item => item.page))];

    return (
        <section className='catalogo'>
            <h1 className='catalogo__title'>Catálogo</h1>
            <section className='catalogo__section'>
                {

                    items?
                        items.map(item => item.category === busqueda.name ?
                            <Card key={item.id} {...item} />
                            :
                            busqueda.name == null ?
                                <Card key={item.id} {...item} />
                                :
                                '')
                        :
                        <p className='catalogo__cargando'>Cargando...</p>
                }  
            </section>
            <section className='catalogo-botonera'>
                {
                    paginas.map(pagina =>(
                        <button key={pagina} className='catalogo-botonera__button'>{pagina}</button>
                    ))
                }
            </section>
        </section>
    )
}

export default Catalogo