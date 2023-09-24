import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ name,image, id}) => {

    return (

            <Link to={`/catalogo/detailCharacter/${id}`} className='card__a'>
                <img src={image} alt="" />
                <h2 className='card__title'>{name}</h2>
            </Link>


    )
}

export default Card