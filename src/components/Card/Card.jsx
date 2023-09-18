import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name,image, id}) => {

    return (
        <article className='card__container'>
            <Link to={`/catalogo/detailCharacter/${id}`}>
                <h2>{name}</h2>
                <img src={image} alt="" />
            </Link>
        </article>

    )
}

export default Card