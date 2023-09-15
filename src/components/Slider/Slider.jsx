import React from 'react';
import { Link } from 'react-router-dom';
import './slider.css';
import { motion } from 'framer-motion';

import card1 from '../../assets/images/cuadros/cuadro1.jpg';
import card2 from '../../assets/images/cuadros/cuadro2.jpg';
import card3 from '../../assets/images/cuadros/cuadro3.jpg';

const cards = [
    { id: 1, url: card1, nombre: "Cuadro de verdad", precio: 123123 },
    { id: 2, url: card2, nombre: "Lorem", precio: 123123 },
    { id: 3, url: card3, nombre: "Lorem", precio: 123123 },
    { id: 4, url: card2, nombre: "Lorem", precio: 123123 },
    { id: 5, url: card1, nombre: "Lorem", precio: 123123 },
    { id: 6, url: card3, nombre: "Lorem", precio: 123123 },
]

const CarouselSection = () => {
    const itemWidth = 348; 

    const totalWidth = cards.length * itemWidth;
    const screenWidth = window.innerWidth; // Ancho de la pantalla
    const dragLimit = totalWidth - screenWidth;



    return (
        <motion.div className='slider-container' layout>
            <motion.div className='slider' drag='x'
                dragConstraints={{ right: 0, left:-dragLimit }} >

                {
                    cards.map(card => (
                        <motion.div className='item' key={card.id}>
                            
                                <img src={card.url} alt="" />
                            
                            <div>
                                <p>{card.nombre}</p>
                                <p className='item__precio'>{`$${card.precio}`}</p>
                                <Link to="/catalogo">
                                    Ver más
                                </Link>
                            </div>
                            
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default CarouselSection