import React from 'react';
import './sectionmain.css';
import { Link } from 'react-router-dom';

import fondo from '../../assets/images/cuadros/cuadro1.jpg';
import fondo1 from '../../assets/images/cuadros/cuadro2.jpg';
import fondo2 from '../../assets/images/cuadros/cuadro3.jpg';
import fondo3 from '../../assets/images/cuadros/cuadro4.jpg';
import fondo4 from '../../assets/images/cuadros/cuadro5.jpg';
import fondo5 from '../../assets/images/cuadros/cuadro6.jpg';
import fondo6 from '../../assets/images/cuadros/cuadro7.jpg';
import fondo7 from '../../assets/images/cuadros/cuadro8.jpg';
import fondo8 from '../../assets/images/cuadros/cuadro9.jpg';

//Simulamos el traernos el array de objetos y solamente usar determinada propiead, entonces nos quedaria
const titulos = [
    { id: 1, title: "Cuadro", fondo: fondo },
    { id: 2, title: "Living", fondo: fondo1 },
    { id: 3, title: "Sillón", fondo: fondo2 },
    { id: 4, title: "Lámpara", fondo: fondo3 },
    { id: 5, title: "Dormitorio", fondo: fondo4 },
    { id: 6, title: "Mesas", fondo: fondo5 },
    { id: 7, title: "Mesas", fondo: fondo6 },
    { id: 8, title: "Mesas", fondo: fondo7 },
    { id: 9, title: "Mesas", fondo: fondo8 }
];


const Section = () => {
    return (
        <section className='sectionmain'>
            {
                titulos.map(titulo => (
                    <Link to={`/catalogo/${titulo.id}`} key={titulo.id}>
                        <div className='sectionmain__container' style={{ backgroundImage: `url(${titulo.fondo})` }}>
                            <article className='sectionmain__article' >
                                <h3 className='sectionmain__title'>{titulo.title}</h3>
                            </article>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}

export default Section